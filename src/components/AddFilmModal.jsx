import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addNewFilmAction } from "../redux/actions/filmesActions";
import { gap } from "../styles/mixins";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const Title = styled.h5`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("15px")}
  &>input{
    width: 100%;
  }
`;
const Error = styled.div`
  color: #ff0000;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;

function AddFilmModal ({error, closeModal, addNewFilm}) {
  const [formData, setFormData] = useState({});

  function inputHandler(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function addFilmHandler(event){
    event.preventDefault();
    addNewFilm({
      ...formData,
      genres: formData.genres ? formData.genres.split(", ") : [],
      actors: formData.actors ? formData.actors.split(", ") : [],
    });
  }

  return(
    <Modal onClick={(e) => e.target === e.currentTarget ? closeModal() : null}>
      <Title>Добавить фильм</Title>
      <Form onSubmit={addFilmHandler}>
        <Input type="text" name="name" placeholder="Название фильма" onChange={inputHandler} />
        <Input type="text" name="image" placeholder="Ссылка на картинку" onChange={inputHandler} />
        <Input type="text" name="director" placeholder="Режиссер" onChange={inputHandler} />
        <Input type="text" name="genres" placeholder="Жанры через запятую" onChange={inputHandler} />
        <Input type="text" name="actors" placeholder="Актеры через запятую" onChange={inputHandler} />
        <Input type="number" name="publishYear" placeholder="Год выхода фильма" onChange={inputHandler} />
        <Error>{error}</Error>
        <Button type="submit" style={{padding: "10px", background: "var(--color-blue)", color: "var(--color-white)"}}>Добавить</Button>
      </Form>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  error: state.filmes.error
});

const mapDispatchToProps = {
  addNewFilm: addNewFilmAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFilmModal);