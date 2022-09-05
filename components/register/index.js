import { StyledRegister } from "./register.style";
import SuccessFull from "../Successful";
import UserPage from "../userPage";
import { withTheme } from "styled-components";
import SurveryPage from "../SurveyPage";
import { useState } from "react";
import Modal from "../Modal";

const RegisterUser = ({ theme }) => {
  const [surData, setSurData] = useState();
  return (
    <StyledRegister color={theme}>
      {/* {!surData && <UserPage SetSurData={setSurData} SurData={surData} />}
      {surData && <SurveryPage SurData={surData} />} */}
      <Modal />
    </StyledRegister>
  );
};

export default withTheme(RegisterUser);
