import { StyledRegister } from "./register.style";
import UserPage from "../userPage";
import { withTheme } from "styled-components";
import SurveryPage from "../SurveyPage";
import { useCallback, useState } from "react";
import Modals from "../../universalComponents/Modals";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import SpinnerMain from "../../universalComponents/Spinner";

const RegisterUser = ({ theme }) => {
  const [surData, setSurData] = useState();
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(true);
  const [modal, setModal] = useState(false);
  const [sending, setSending] = useState(false);

  const Notify = (value) => toast(value);
  const [inputValues, setInputValues] = useState(["", "", "", ""]);

  const storeValue = useCallback((value, index, values) => {
    const access = JSON.parse(sessionStorage.getItem("user"));
    console.log(value);
    setInputValues(values);
    let items = values.filter((e) => e !== "");
    if (items.length === 4) {
      let code = Number(values.join(""));
      setSending(true);
      Axios.get(`/api/verifyphone/${access._id}/${code}`)
        .then((res) => {
          if (res.data.message !== "verified") {
            setSending(false);
            return Notify(res.data.message);
          }
          setModal(false);
          setSending(false);
          setShow(true);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const HandleRedirect = useCallback(() => {
    setShow(false);
    setShowUser(true);
  }, []);

  return (
    <StyledRegister color={theme}>
      {showUser && (
        <UserPage
          setModal={setModal}
          SetSurData={setSurData}
          SurData={surData}
          setShowUser={setShowUser}
        />
      )}
      {show && (
        <SurveryPage SurData={surData} HandleRedirect={HandleRedirect} />
      )}
      {modal && (
        <Modals handlePinChange={storeValue} inputValues={inputValues} />
      )}
      {sending && <SpinnerMain sending={sending} />}
      <ToastContainer />
    </StyledRegister>
  );
};

export default withTheme(RegisterUser);
