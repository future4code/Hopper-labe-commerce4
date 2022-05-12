import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .box {
    background-color: gainsboro;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 100%;
    border: 1px solid black;
  }

  .filtro {
    grid-column: 1 / 3;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 50px;
  }
  .carrinho {
    grid-column: 3 ;
    grid-row: 1 / 3;
    color: black;
  }
  .card {
    grid-column: 1 / 3;
    grid-row: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    min-height: 500px;
  }
`

export default GlobalStyle