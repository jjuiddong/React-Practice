import React from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  return (
    <div>
      new component {props.name} <br></br>
      children text : {props.children} <br></br>
      favorite number : {props.favoriteNumber}
      <br></br>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default Name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
