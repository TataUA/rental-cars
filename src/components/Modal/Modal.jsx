import ReactDOM from "react-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { ModalItemCar } from "components/ModalItemCar/ModalItemCar";
import { ModalBackdrop, ModalContent, Button } from "./Modal.styled";

export const Modal = ({ show, close, item }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (show && e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, close]);

  return ReactDOM.createPortal(
    <>
      <ModalBackdrop onClick={() => close()}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Button type="button" onClick={() => close()}>
            <svg
              className="close-btn"
              viewBox="0 0 512 512"
              height="20"
              width="20"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </Button>
          <ModalItemCar item={item} />
        </ModalContent>
      </ModalBackdrop>
    </>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.bool.isRequired,
  item: PropTypes.shape({}).isRequired,
};
