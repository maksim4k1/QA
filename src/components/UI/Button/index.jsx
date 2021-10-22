import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  padding: 4px 5px;
`;

function Button (props) {
  return(
    <ButtonElement {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;