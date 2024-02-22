import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

ul {
  list-style: none;
}

li {
  text-decoration: none;
}

ul,
h2,
h3,
p{
  margin: 0;
  padding: 0;
}

body {
      @media only screen and (max-width: 1000px) {
          padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 15px;
    }
  margin: 0;
  padding: 0;
  font-family: Roboto;
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 30px;
  max-width: 1440px;
  box-sizing: border-box;


  background: ${(props) => props.backgroundColor};
  
}
button{
  cursor: pointer;
}

select {
  -webkit-appearance: none;
}
`;

export default GlobalStyled;
