import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--text-color-fifty);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: auto;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 461px;
  padding: 40px;
  font-family: "Manrope", sans-serif;
  border-radius: 24px;
  background-color: var(--white);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  padding: 2px;
  position: absolute;
  display: inline-block;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;

  .close-btn {
    &:hover,
    :focus {
      fill: var(--blue-active);
      transition: var(--transition);
    }
  }
`;
