import React from 'react';
import { Home } from './components/Home.js';
import { HomeHeader } from './components/HomeHeader.js';
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle.js';

const Container = styled.div`
  width: 100vw;
`

class App extends React.Component {
  render(){
    return (
      <Container>
        <GlobalStyle/>
        <HomeHeader/>
        <Home/>
      </Container>
    );
  }
}

export default App