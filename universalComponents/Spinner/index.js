import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { withTheme } from "styled-components";
import { SpinnerMainDiv } from "./spinnermain.style";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0096FF",
};

const SpinnerMain = ({ theme: { color }, sending }) => {
  //   let [loading, setLoading] = useState(true);
  //   let [color, setColor] = useState("#ffffff");

  return (
    <SpinnerMainDiv color={color}>
      <div className={"spinnerbody"}>
        <ClipLoader
          color={"#000"}
          loading={sending}
          cssOverride={override}
          size={100}
        />
      </div>
    </SpinnerMainDiv>
  );
};

export default withTheme(SpinnerMain);
