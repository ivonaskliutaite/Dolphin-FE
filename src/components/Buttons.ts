import styled from "styled-components";

export const LoginButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-duration: .3s;
  border: 1px solid transparent;
  letter-spacing: 1px;
  width: auto;
  text-align: center;
  color: #fff;
  background-color: gray;
  height: 30px;
  margin: 10px;

  :hover {
    transform: scale(1.04);
    background-color: #E1C699;
    color: black;
  }
`;

export const RefreshButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-duration: .3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 700;
  text-align: center;
  padding: 10px 48px;
  color: #fff;
  background-color: gray;
  height: 48px;
  :hover{
    transform: scale(1.04);
    background-color: #E1C699;
    color: black;
  }

  @media(max-width: 600px) {
    font-size: 2vh;
    margin: 10px auto 20px 40px;
    width: 240px;

    i{
      display: none;
    }
  }
`;

export const HamburgerBtn = styled.i`
  font-size: 2.1rem;
  top: 0;
  left: 0;
  margin: 0.8rem;
  color: white;
  z-index: 10;
  cursor: pointer;
@media(min-width: 600px){
  display: none;
}`
