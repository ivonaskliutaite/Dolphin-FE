import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content:  center;
  align-items: center;
  background-color: initial;
  margin-left: 15%;
  border-radius: 8px;
  border-width: 0;
  box-sizing: border-box;
  cursor: pointer ;
  color: #fff;
  font-size: 18px;
  outline: none;
  overflow: hidden;
  padding: 10px 32px;
  line-height: 1;
  white-space: nowrap;
  &:hover{
  opacity: .85}

  @media (max-width: 420px) {
    .button-84 {
      height: 48px;
    }
  }
`;

export const RefreshButton = styled.button`
  margin: 4vh 4vw;
  cursor: pointer;
  border-radius: 50px;
  font-weight: bold;
  font-size: 2vh;
`;

export const HamburgerBtn = styled.i`
  font-size: 2.1rem;
  top: 0;
  left: 0;
  margin: 2rem;
  color: black;
  z-index: 10;
@media(min-width: 600px){
  display: none;
}`