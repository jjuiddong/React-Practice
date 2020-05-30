import React, {useContext} from "react";
import ColorContext from "../contexts/color";
import ColorConsumer from "../contexts/color";

const ColorBox = () => {
    const {state} = useContext(ColorContext);

  return (
    <ColorConsumer>
      {() => (
          <div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: state.color,
                }}
              ></div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: state.subcolor,
                }}
              ></div>
          </div>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
