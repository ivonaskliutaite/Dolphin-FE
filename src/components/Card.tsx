import React from "react";
import {ArticleSummary} from "../pages/Homepage";

import styled from "styled-components";

const CardContainer = styled.a`
  width: 250px;
  padding: 3vw;
  margin: 40px 1vw 40px 7vw;
  overflow: hidden;
  box-shadow: 0 0 15px -5px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: black;
  vertical-align: top;

  &:hover {
    background-color: #E1C699;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const CardCategory = styled.div`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 50px;
  transition-duration: .3s;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: bold;
  text-align: center;
  padding: 15px 15px 0;
  color: #fff;
  background-color: gray;
  height: 30px;
`;

interface CardProps {
    data: ArticleSummary;
    onclick: () => void;
}

const Card = (props: CardProps) => {
    return (
        (<CardContainer onClick={() => {
            props.onclick()
        }}>
            <CardTitle>
                <h3>{props.data.title}</h3>
            </CardTitle>
            {props.data.category && <CardCategory>{props.data.category}</CardCategory>}
        </CardContainer>)
    )
}

export default Card;