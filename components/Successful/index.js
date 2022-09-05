import React from "react";
import { SuccessfulDiv } from "./success.style";
import { FaRegCheckCircle } from "react-icons/fa";
import { withTheme } from "styled-components";

const SuccessFull = ({ theme, name }) => {
  return (
    <SuccessfulDiv color={theme}>
      <div>
        <div className={"iconbody"}>
          <FaRegCheckCircle className={"icon"} style={{ color: "#002953" }} />
        </div>
        <div className={"bodydetails"}>
          <h2>SuccessFully Submited</h2>
        </div>
        <div className={"footer"}>
          <p>{`thanks for your opinion, ${name}`}</p>
        </div>
      </div>
    </SuccessfulDiv>
  );
};

export default withTheme(SuccessFull);
