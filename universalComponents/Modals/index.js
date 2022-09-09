import { ModalStyles } from "./modal.style";
import ReactInputVerificationCode from "react-input-verification-code";
import { PinInput } from "react-input-pin-code";

const Modals = ({ handlePinChange, inputValues }) => {
    return (
        <ModalStyles>
            <div className="modal-component">
                <div className={"modal-content"}>
                    <div className="content">
                        {/* <ReactInputVerificationCode
                            length={4}
                            autoFocus={true}
                            onChange={handlePinChange}
                        /> */}
                        <PinInput
                            borderColor={"#0072C2"}
                            autoFocus={true}
                            size={"lg"}
                            values={inputValues}
                            onChange={handlePinChange}
                        />
                    </div>
                </div>
            </div>
        </ModalStyles>
    );
};

export default Modals;
