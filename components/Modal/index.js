import React from "react";
import Modals from "../../universalComponents/Modals";
import { ModalDiv } from "./modal.style";
import ModalContent from "./ModalContent";

const Modal = () => {
  return (
    <ModalDiv>
      <Modals ModalComponent={ModalContent} />
    </ModalDiv>
  );
};

export default Modal;
