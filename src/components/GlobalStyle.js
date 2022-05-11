import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-size: 100%;
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
  }
  .card {
    grid-column: 1 / 3;
    grid-row: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
  }
`

export default GlobalStyle