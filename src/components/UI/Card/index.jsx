import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const CardElement = styled.div`
  width: 100%;
  display: flex;
  ${gap("20px")}
  border: 1px solid var(--color-gray);
  border-radius: 20px;
  overflow: hidden;
`;
const Name = styled.h2`
  color: var(--color-black);
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  &>a{
    color: var(--color-blue);
    &:hover{
      text-decoration: underline;
    }
  }
`;
const Year = styled.div`
  font-size: 24px;
  text-align: center;
  margin: -15px 0 0;
`;
const Image = styled.img`
  max-width: 250px;
  width: 100%;
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
  ${gap("10px")}
  color: var(--color-txt-gray);
  font-size: 17px;
  &>strong{
    color: var(--color-black);
  }
`;

function Card ({id, name, image, director, genres, actors, publishYear}) {
  return(
    <CardElement>
      <Image src={image} alt={name} />
      <Info>
        <Name><NavLink to={`/detail/${id}`}>{name}</NavLink></Name>
        <Year>({publishYear})</Year>
        <InfoItem><strong>Режиссер:</strong>{director}</InfoItem>
        <InfoItem><strong>Жанр:</strong>{genres.join(", ")}</InfoItem>
        <InfoItem><strong>Актеры:</strong>{actors.join(", ")}</InfoItem>
      </Info>
    </CardElement>
  );
}

export default Card;