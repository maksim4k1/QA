import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 200px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  padding: 4px 10px;
`;

function Input (props) {
  return(
    <InputElement {...props} />
  );
}

export default Input;