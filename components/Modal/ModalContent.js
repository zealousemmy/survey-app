import React from "react";
import FormComp from "../../universalComponents/form";
import { ModalArray } from "../../utils/Modal/modalArray";

const ModalContent = () => {
  return (
    <div>
      <FormComp formArr={ModalArray} />
    </div>
  );
};

export default ModalContent;
