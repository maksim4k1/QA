import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setSortFilmesValueAction } from "../redux/actions/filmesActions";
import { getGenresAction } from "../redux/actions/genresAction";
import Button from "./UI/Button";
import Select from "./UI/Select";

const Form = styled.div`
  width: 100%;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function FilterForm ({genres, sort, getGenres, setGenresValue}) {
  useEffect(() => {
    getGenres();
  }, [sort, getGenres]);

  function selectHandler(event){
    setGenresValue(event.target.value);
  }

  return(
    <Form>
      <Select style={{padding: "10px"}} onChange={selectHandler}>
        <option value="">Все</option>
        {
          genres.map((genre, index) => {
            return <option key={index} value={genre}>{genre}</option>
          })
        }
      </Select>
      <Button style={{padding: "10px", background: "var(--color-blue)", color: "var(--color-white)"}}>Добавить фильм</Button>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genres,
  sort: state.filmes.sort
});
const mapDispatchToProps = {
  getGenres: getGenresAction,
  setGenresValue: setSortFilmesValueAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);