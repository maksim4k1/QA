import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const ModalOverflow = styled.div`
  padding: 100px 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg-modal);
  z-index: 100;
  display: flex;
  justify-content: center;
`;
const ModalContainer = styled.div`
  max-width: 400px;
  height: min-content;
  width: 100%;
  padding: 30px 15px;
  display: flex;
  flex-flow: column;
  ${gap("20px")}
  background: var(--color-white);
  border-radius: 20px;
`;

function Modal (props) {
  return(
    <ModalOverflow {...props}>
      <ModalContainer>
        {props.children}
      </ModalContainer>
    </ModalOverflow>
  );
}

export default Modal;