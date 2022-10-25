import React from "react";
import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3vh;
  
  @media(max-width: 600px){
    display: flex;
    flex-direction: column;
    padding-left: 1vw;
  }
`;

export const HomepageMainContainer = styled.div`
  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 60px;
  }
`;
