import { TextField } from "@mui/material";
import React from "react";
import { StyledRegister } from "./register.style";

const RegisterUser = () => {
  return (
    <StyledRegister>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </StyledRegister>
  );
};

export default RegisterUser;
