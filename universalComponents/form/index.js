import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Button,
    Box,
} from "@mui/material";
import React from "react";
import { withTheme } from "styled-components";
import { FormDiv } from "./form.style";

const FormComp = ({
    formArr,
    theme,
    formik,
    setInputValue,
    details,
    HandleNext,
}) => {
    return (
        <FormDiv color={theme}>
            <Box component="form" noValidate autoComplete="off">
                {formArr?.map((item, key) => (
                    <div key={key} className={`${item.classbody}`}>
                        {item.submit ? (
                            <div className={`${item.classname}`}>
                                <Button
                                    onClick={() => {
                                        details === "user" &&
                                            formik.handleSubmit();

                                        item.submit === "Continue" &&
                                            HandleNext();

                                        {
                                            item.submit === "Submit" &&
                                                HandleNext();
                                        }
                                    }}
                                    variant="contained"
                                    className={`${item.classitem}`}
                                >
                                    {item.submit}
                                </Button>
                            </div>
                        ) : item.text ? (
                            <div className={`${item.classname}`}>
                                <TextField
                                    required
                                    className={`${item.classitem}`}
                                    id={item.id}
                                    type={item.type}
                                    name={item.name}
                                    label={item.label}
                                    variant="outlined"
                                    onChange={setInputValue}
                                />
                                <div className="errorcheck">
                                    <small>
                                        {item.name === "name"
                                            ? formik.errors.name
                                            : item.name === "email"
                                            ? formik.errors.email
                                            : item.name === "phone" &&
                                              formik.errors.phone}
                                    </small>
                                </div>
                            </div>
                        ) : (
                            item.radioButtonTitle && (
                                <div className={`${item.classname}`}>
                                    <FormControl
                                        className={`${item.classitem}`}
                                    >
                                        <FormLabel id={item.radioButtonTitle}>
                                            {item.radioButtonTitle}
                                        </FormLabel>
                                        <RadioGroup
                                            aria-labelledby={
                                                item.radioButtonTitle
                                            }
                                            defaultValue={item.defaultRadio}
                                            name={item.name}
                                            onChange={setInputValue}
                                        >
                                            {item.radioButton.map(
                                                (item, key) => (
                                                    <div key={key}>
                                                        <FormControlLabel
                                                            value={item.value}
                                                            control={<Radio />}
                                                            label={item.label}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </Box>
        </FormDiv>
    );
};

export default withTheme(FormComp);
