import React from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import Select from "./UI/Select";

const Form = styled.form`
  width: 100%;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function FilterForm () {
  return(
    <Form>
      <Select style={{padding: "10px"}}>
        <option value="value">Value</option>
      </Select>
      <Button style={{padding: "10px", background: "var(--color-blue)", color: "var(--color-white)"}}>Добавить фильм</Button>
    </Form>
  );
}

export default FilterForm;