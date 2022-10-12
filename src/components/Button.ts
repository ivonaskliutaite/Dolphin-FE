import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content:  center;
  align-items: center;
  background-color: initial;
  margin-left: 15%;
  background-image: linear-gradient(to left, #051937, #002033, #002326, #082418, #1e2311);
  border-radius: 8px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);
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
    box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
  opacity: .85}

  @media (max-width: 420px) {
    .button-84 {
      height: 48px;
    }
  }
`;