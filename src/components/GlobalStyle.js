import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;

  }

  .filtro {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .carrinho {
    grid-column: 3 ;
    grid-row: 1 / 3;
  }
  .card {
    grid-column: 1 / 3;
    grid-row: 2;
  }
`

export default GlobalStyle