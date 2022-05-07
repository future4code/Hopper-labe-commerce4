import React from 'react'
import styled from 'styled-components'
import { Card } from './Card.js'
import { Carrinho } from './Carrinho.js'
import { Filtro } from './Filtro.js'

const Container = styled.main`
    display: grid;
    width: calc(100% - 20px);
    grid-gap: 10px;
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3 - 20px);
    background-color: #ff4;
    color: #444;
    padding: 10px;
`

export class Home extends React.Component{
    render(){
        return(
            <Container>
                <Filtro/>
                <Carrinho/>
                <Card/>
                {/* <div class="box filtro">A</div>
                <div class="box carrinho">B</div>
                <div class="box card">C</div> */}
            </Container>
        )
    }
}