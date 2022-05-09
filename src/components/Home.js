import React from 'react'
import styled from 'styled-components'
import { Cards } from './Cards.js'
import { Carrinho } from './Carrinho.js'
import { Filtro } from './Filtro.js'

const arrayCarrinho = []

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
    state = {
        listaDeCompras: arrayCarrinho,
        soma: 0
    }

    addItem = (nomeProduto, precoProduto) => {
        const novoItem = {
            nome: nomeProduto,
            preco: precoProduto
        }

        const novaLista = [...this.state.listaDeCompras, novoItem]
        
        this.setState({listaDeCompras: novaLista})
        this.setState({soma: this.state.soma + precoProduto})
    }
    
    render(){
        const componentesCarrinho = this.state.listaDeCompras.map((c,index,array)=>{
            return(
                <Carrinho
                    lista={array}
                    soma={this.state.soma}
                />
            )
        }) 
        return(
            <Container>
                <Filtro/>
                {componentesCarrinho}
                <Cards
                    addItem={this.addItem}
                />
            </Container>
        )
    
    }
}