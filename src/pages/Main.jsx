import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import AddFilmModal from "../components/AddFilmModal";
import FilterForm from "../components/FilterForm";
import Card from "../components/UI/Card";
import { getFilmesAction } from "../redux/actions/filmesActions";
import { gap } from "../styles/mixins";

const List = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("20px")}
`;

function Main ({filmes, getFilmes}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getFilmes();
  }, [getFilmes]);
  useEffect(() => {
    setIsOpenModal(false);
  }, [filmes]);

  return(
    <main className="content container">
      <FilterForm openModal={() => setIsOpenModal(true)}/>
      <List>
        {
          filmes.map(film => {
            return <Card key={film.id} {...film}/>;
          })
        }
      </List>
      {
        isOpenModal
        ? <AddFilmModal closeModal={() => setIsOpenModal(false)}/>
        : null
      }
    </main>
  );
}

const mapStateToProps = (state) => ({
  filmes: state.filmes.sortedFilmes,
});
const mapDispatchToProps = {
  getFilmes :getFilmesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);