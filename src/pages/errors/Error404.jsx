import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 52px;
  font-weight: 600;
`;
const Content = styled.p`
  font-size: 20px;
`;
const Link = styled(NavLink)`
  color: var(--color-blue);
  &:hover{
    text-decoration: underline;
  }
`;

function Error404 () {
  return(
    <main className="container content">
      <Title>Error: 404</Title>
      <Content>Page not found. <Link to="/">Go to Main page</Link></Content>
    </main>
  );
}

export default Error404;