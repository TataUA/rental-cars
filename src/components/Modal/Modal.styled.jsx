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
  
  
  .modal-content{
    width: 541px;
    height: 752px;
    border-radius: 24px;
    background-color: var(--white);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      
  }
`;
