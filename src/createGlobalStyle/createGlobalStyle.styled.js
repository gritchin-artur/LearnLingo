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
  margin: 0;
  padding: 0;
  font-family: Roboto;
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 30px;
  width: 1440px;
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
