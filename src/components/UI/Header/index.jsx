import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoupeIcon from "../../../assets/LoupeIcon";
import { setSearchFilmesValueAction, sortFilmesAction } from "../../../redux/actions/filmesActions";
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
  &>a{
    color: inherit;
  }
`;
const Form = styled.form`
  display: flex;
  ${gap("5px")}
`;

function Header ({search, setSearchValue, findFilmes}) {
  function inputHandler(event){
    setSearchValue(event.target.value);
  }

  function filterFilmes(event){
    event.preventDefault();

    findFilmes();
  }

  return(
    <HeaderElement>
      <Container className="container">
        <Logo><NavLink to="/">Filmes App</NavLink></Logo>
        <Form onSubmit={filterFilmes}>
          <Input type="text" placeholder="Search" value={search} onChange={inputHandler} />
          <Button><LoupeIcon/></Button>
        </Form>
      </Container>
    </HeaderElement>
  );
}

const mapStateToProps = (state) => ({
  search: state.filmes.search,
});
const mapDispatchToProps = {
  setSearchValue: setSearchFilmesValueAction,
  findFilmes: sortFilmesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);