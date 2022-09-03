import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

const FormComp = ({ formArr }) => {
  return (
    <div>
      {formArr.map((input, key) => (
        <>
          {input.inputField ? (
            <TextField id={input.id} label={input.label} variant="outlined" />
          ) : (
            <></>
          )}
          {input.radioButton ? (
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                {input.radioButtonTitle}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={input.defaultRadio}
                name="radio-buttons-group"
              >
                {input.radioButton.map((item) => (
                  <>
                    <FormControlLabel
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  </>
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
};

export default FormComp;
