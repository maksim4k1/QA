import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { getFilmeByIdAction } from "../redux/actions/filmesActions";
import { gap } from "../styles/mixins";

const Name = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;
const Year = styled.div`
  margin: 0 0 30px;
  font-size: 30px;
  text-align: center;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  ${gap("20px")}
`;
const Image = styled.img`
  max-width: 350px;
  width: 100%;
  border: 1px solid var(--color-gray);
`;
const Info = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-flow: column;
  ${gap("15px")}
`;
const InfoItem = styled.div`
  display: flex;
  ${gap("20px")}
  color: var(--color-txt-gray);
  font-size: 20px;
  &>strong{
    color: var(--color-black);
  }
`;

function Detail ({film, getFilm}) {
  const {id} = useParams();

  useEffect(() => {
    getFilm(id);
  }, [getFilm, id]);
  
  return(
    <main className="container content">
      <Name>{film.name}</Name>
      <Year>({film.publishYear})</Year>
      <Content>
        <Image src={film.image} alt={film.name} />
        <Info>
          <InfoItem><strong>Режиссер:</strong>{film.director}</InfoItem>
          <InfoItem><strong>Жанр:</strong>{film.genres ? film.genres.join(", ") : null}</InfoItem>
          <InfoItem><strong>Актеры:</strong>{film.actors ? film.actors.join(", ") : null}</InfoItem>
        </Info>
      </Content>
    </main>
  );
}

const mapStateToProps = (state) => ({
  film: state.filmes.selectedFilm
});

const mapDispatchToProps = {
  getFilm: getFilmeByIdAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);