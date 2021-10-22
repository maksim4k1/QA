import React from "react";
import styled from "styled-components";

const SelectElement = styled.select`
  width: 200px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 16px;
`;

function Select (props) {
  return(
    <SelectElement {...props}>
      {props.children}
    </SelectElement>
  );
}

export default Select;