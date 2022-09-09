import { useFormik } from "formik";
import React, { useState, useCallback } from "react";
import FormComp from "../../universalComponents/form";
import * as yup from "yup";
import { registerArr } from "../../utils/registerUser";
import Axios from "axios";
import { SurveyArray } from "../../utils/registerUser/surveyArray";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserDiv } from "./user.style";
import { withTheme } from "styled-components";

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().min(3).required(),
  network: yup.string().required(),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone number is not valid"
    )
    .required(),
  taken: yup.boolean().default(false),
});

const UserPage = ({ SetSurData, setModal, theme, setShowUser }) => {
  const Notify = (value) => toast(value);
  const [sending, setSending] = useState(false);

  const handleOnSubmit = (values) => {
    setSending(true);
    PostUser(values);
  };

  const userformik = useFormik({
    initialValues: {
      name: "",
      email: "",
      network: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  console.log(userformik.values);

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
    Axios.post("/api/user/create", data)
      .then((res) => {
        Notify(res.data.message);

        if (res.data.message === "successful") {
          if (typeof window !== undefined) {
            window.sessionStorage.setItem(
              "user",
              JSON.stringify(res.data.user)
            );
          }
          SetSurData(SurveyArray);
          setShowUser(false);
          setModal(true);
          setSending(false);
        }
        setSending(false);
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
      });
  };

  return (
    <UserDiv color={theme}>
      <div>
        <FormComp
          formArr={registerArr}
          formik={userformik}
          setInputValue={setInputValue}
          details={"user"}
          sending={sending}
        />
        <ToastContainer />
      </div>
    </UserDiv>
  );
};

export default withTheme(UserPage);
