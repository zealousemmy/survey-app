import React, { useState, useCallback } from "react";
import * as yup from "yup";
import FormComp from "../../universalComponents/form";
import { useFormik } from "formik";
import SuccessFull from "../Successful";
import { SurveyDiv } from "./survey.style";
import Axios from "axios";
import { UserDiv } from "../userPage/user.style";
import { withTheme } from "styled-components";

const surveySchema = yup.object().shape({
  gender: yup.string().min(1).required(),
  age: yup.string().min(1).required(),
  education: yup.string().required(),
  product: yup.string().min(1).required(),
  need: yup.string().min(1).required(),
  ticket: yup.string().min(1).required(),
  social_media: yup.string().required(),
  social_media_text: yup.string().min(1).required(),
  recommendation: yup.string().min(1).required(),
  employed: yup.string().min(1).required(),
  affliate_program: yup.string().required(),
});

const SurveryPage = ({ SurData, theme, HandleRedirect }) => {
  const [surveyTest, setSurveyTest] = useState({});
  const [surveyPage, setSurveyPage] = useState(SurData[0]);
  const [surveylength, setSurveyLength] = useState(1);
  const [showSuccess, setShowSuccess] = useState("");
  const [user, setUser] = useState(undefined);
  const [count, setCount] = useState(1);

  const handleOnSubmitSurvey = (values) => {
    PostUser(values);
  };

  const surveyformik = useFormik({
    initialValues: {
      gender: "",
      age: "",
      education: "",
      product: "",
      need: "",
      ticket: "",
      social_media: "",
      social_media_text: "",
      recommendation: "",
      employed: "",
      affliate_program: "",
    },
    validationSchema: surveySchema,
    onSubmit: handleOnSubmitSurvey,
  });

  const HandleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSurveyTest({ ...surveyTest, [name]: value });
    },
    [surveyTest]
  );

  const PostSurvey = (data) => {
    Axios.post("/api/survey", data)
      .then((res) => {
        if (res.data.message === "successful") {
          if (typeof window !== "undefined") {
            let userStore = JSON.parse(window.sessionStorage.getItem("user"));
            setUser(userStore);
            setShowSuccess(res.data.message);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const PostUser = (data) => {
    Axios.put("/api/user", data)
      .then((res) => {
        console.log(res);
        if (res.data.message === "successful") {
          setShowSuccess(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const HandleNext = () => {
    if (count <= 6 && Object.keys(surveyTest).length >= surveylength) {
      setSurveyPage(SurData[count]);
      setCount(count + 1);
      setSurveyLength(surveylength + 1);
      return;
    }
    let userStore = JSON.parse(window.sessionStorage.getItem("user"));

    PostSurvey({ ...surveyTest, user: userStore._id });
    // PostUser({ ...user });
  };

  return (
    <UserDiv color={theme}>
      <SurveyDiv>
        {!showSuccess && (
          <FormComp
            formArr={surveyPage.section}
            formik={surveyformik}
            setInputValue={HandleChange}
            HandleNext={HandleNext}
          />
        )}

        {showSuccess && (
          <SuccessFull
            name={user?.name}
            setShowSuccess={setShowSuccess}
            HandleRedirect={HandleRedirect}
          />
        )}
      </SurveyDiv>
    </UserDiv>
  );
};

export default withTheme(SurveryPage);
