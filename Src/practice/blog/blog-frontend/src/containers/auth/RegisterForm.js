import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({history}) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes('')) {
      setError('detect space');
      return;

    }
    if (password !== passwordConfirm) {
      setError('password not matching');
      dispatch(changeField({form: 'register', key: 'password', value: ''}));
      dispatch(changeField({form: 'register', key: 'passwordConfirm', value: ''}));
      return;
    }

    dispatch(register({ username, password }));
  };

  // initialize form
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // signup success/fail
  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('Already Exist ID');
        return;
      }
      setError('SignUp Error');
      return;
    }
    if (auth) {
      console.log('signup success');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // check user value
  useEffect(() => {
    if (user) {
      console.log('check API success');
      console.log(user);
      history.push('/'); // goto home page
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user, history]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    ></AuthForm>
  );
};

export default withRouter(RegisterForm);
