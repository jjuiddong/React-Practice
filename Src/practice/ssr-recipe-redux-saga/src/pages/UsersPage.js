import React from "react";
import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";
import { Route } from "react-router-dom";

const UsersPage = () => {
  return (
    <div>
      <UsersContainer />
      <hr></hr>
      <Route
        path="/users/:id"
        render={({ match }) => 
          <UserContainer id={match.params.id}></UserContainer>
        }
      ></Route>
    </div>
  );
};

export default UsersPage;
