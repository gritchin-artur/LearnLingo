import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

h2 {
    margin: 0;
    font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #121417;
}

h3{
    font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #121417;

}

p {
   margin: 0;
    font-family: Manrope;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #12141780;
}

button{
  font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 20px;
  &:focus-visible {
    color: #cfcfcf;
  }
  &:hover {
background-color: #0B44CD;
  }
  &:active {
background-color: #0B44CD;
  }
  &:disabled {
    background-color: #0B44CD;
    color: #444;
    pointer-events: none;
  }
}


span {
  color: #3470ff;
}

body {
  margin: 0;
  padding: 0;
  font-family: Inter, Manrope, Montserrat;
}
`;

export default GlobalStyled;
