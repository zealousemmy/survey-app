import { useFormik } from "formik";
import React, { useState, useCallback } from "react";
import FormComp from "../../universalComponents/form";
import * as yup from "yup";
import { registerArr } from "../../utils/registerUser";
import Axios from "axios";
import { SurveyArray } from "../../utils/registerUser/surveyArray";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().min(3).required(),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is not valid"
    )
    .required(),
  taken: yup.boolean().default(false),
});

const UserPage = ({ SetSurData }) => {
  const Notify = (value) => toast(value);

  const handleOnSubmit = (values) => {
    PostUser(values);
  };

  const userformik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (e) => {
      const { name, value } = e.target;
      userformik.setValues({
        ...userformik.values,
        [name]: value,
        taken: false,
      });
    },
    [userformik]
  );

  const PostUser = (data) => {
    Axios.post("/api/user", data)
      .then((res) => {
        Notify(res.data.message);
        if (res.data.message === "successful") {
          Notify(res.data.message);
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem(
              "user",
              JSON.stringify(res.data.user)
            );
          }
          SetSurData(SurveyArray);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <FormComp
        formArr={registerArr}
        formik={userformik}
        setInputValue={setInputValue}
        details={"user"}
      />
      <ToastContainer />
    </div>
  );
};

export default UserPage;
