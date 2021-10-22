import React from "react";
import styled from "styled-components";
import LoupeIcon from "../../../assets/LoupeIcon";
import { gap } from "../../../styles/mixins";
import Button from "../Button";
import Input from "../Input";

const HeaderElement = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray);
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1`
  font-size: 28px;
  font-weight: 900;
`;
const Form = styled.form`
  display: flex;
  ${gap("5px")}
`;

function Header () {
  return(
    <HeaderElement>
      <Container className="container">
        <Logo>Filmes App</Logo>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Input type="text" placeholder="Search" />
          <Button><LoupeIcon/></Button>
        </Form>
      </Container>
    </HeaderElement>
  );
}

export default Header;