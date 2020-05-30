import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix:true //ignore ?
    });

    const showDetail = query.detail === 'true'; //query is string

    return (
        <div>
            <h1>Presentation</h1>            
            <p>this project learn how to use react router</p>            
            {showDetail && <p>detail value true </p>}
        </div>
    );
};

export default About;
