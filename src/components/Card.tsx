import React from "react";
import {ArticleSummary} from "../pages/Homepage";

import styled from "styled-components";

 const CardContainer = styled.a`
  width: 250px;
  padding: 3vw;
   margin: 40px 2vw 40px 7vw;
  overflow: hidden;
  box-shadow: 0 0 15px -5px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: black;
   vertical-align: top;
`;

//  const CardBody = styled.div`
//   overflow: hidden;
//   padding: 1.5vw;
// `;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
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
            {props.data.category && <div style={{
                display: "inline-block",
                background: "gray",
                color: "white",
                padding: "8px",
                borderRadius: "8px"
            }}>{props.data.category}</div>}
        </CardContainer>)
    )
}

export default Card;