import ReactDOM from "react-dom";
import { ModalBackdrop } from "./Modal.styled";
import { useEffect } from "react";

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
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        ></div>
        <button type="button" onClick={() => close()}>
          <svg viewBox="0 0 512 512" fill="currentColor" height="12" width="12">
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
          </svg>
        </button>
        <h1>{item.id}</h1>
      </ModalBackdrop>
    </>,
    document.getElementById("modal")
  );
};
