import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

ul {
  list-style: none;
}

li {
  text-decoration: none;
}


h2 {

}

h3{

}


body {
  margin: 0;
  padding: 0;
  font-family: Roboto;
  padding-left: 64px;
  padding-right: 64px;
  width: 1440px;
  box-sizing: border-box;
}
button{
  cursor: pointer;
}
`;

export default GlobalStyled;
