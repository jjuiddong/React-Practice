import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "kkk",
    description: "developer",
  },
  gildong: {
    name: "gigi",
    description: "actor",
  },
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>no user</div>
    }
  return (<div>
      <h3>
          {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample></WithRouterSample>      
  </div>);
};

export default Profile;
