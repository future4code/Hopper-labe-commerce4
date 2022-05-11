import React from 'react'
import styled from 'styled-components'
import { Produtos } from './Produtos.js'
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
    state = {
        listaDeProdutos: [
            {
                imagem:"https://picsum.photos/50/50",
                nome:"Terra",
                preco:40,
                id:1
            },
            {
                imagem:"https://picsum.photos/50/51",
                nome:"Marte",
                preco:60,
                id:2
            },
            {
                imagem:"https://picsum.photos/50/52",
                nome:"Saturno",
                preco:80,
                id:3
            },
            {
                imagem:"https://picsum.photos/50/53",
                nome:"Júpiter",
                preco:90,
                id:4
            }
        ],
        listaDeCompras: [],
        valorDaCompra: 0
    }

    //Funções do Botão "Adicionar ao Carrinho"

    addItemCarrinho = (itemAdicionado, itemRemovido) => {

        //Adiciona Item ao Carrinho
        const novoItemCarrinho = {
            imagem: itemAdicionado.imagem,
            nome: itemAdicionado.nome,
            preco: itemAdicionado.preco,
            id: itemAdicionado.id
        }

        const novaListaCarrinho = [...this.state.listaDeCompras, novoItemCarrinho]
        
        this.setState({listaDeCompras: novaListaCarrinho})

        //Soma valor da compra
        this.setState({valorDaCompra: this.state.valorDaCompra + itemAdicionado.preco})

        //Remove Item da Vitrine
        const novaListaVitrine = [...this.state.listaDeProdutos].filter((item,index,array) => {
            if(item.id === itemRemovido.id){
                return false
            }else{
                return true
            }
        })

        this.setState({listaDeProdutos: novaListaVitrine})
    }

    //Funções do Botão "Remover"

    rmItemCarrinho = (itemRemovido, itemAdicionado) => {
        //Remove item do Carrinho
        const novaListaCarrinho = [...this.state.listaDeCompras].filter((item,index,array) => {
            if(item.id === itemRemovido.id){
                return false
            }else{
                return true
            }
        })

        this.setState({listaDeCompras: novaListaCarrinho})

        //Subtrai valor da compra
        this.setState({valorDaCompra: this.state.valorDaCompra - itemRemovido.preco})

        //Adiciona item a Vitrine
        const novoItemVitrine = {
            imagem: itemAdicionado.imagem,
            nome: itemAdicionado.nome,
            preco: itemAdicionado.preco,
            id: itemAdicionado.id
        }

        const novaListaVitrine = [...this.state.listaDeProdutos, novoItemVitrine]

        this.setState({listaDeProdutos: novaListaVitrine})
    }
    
    render(){
        return(
            <Container>
                <Filtro/>
                <Carrinho
                    listaDeCompras={this.state.listaDeCompras}
                    valorDaCompra={this.state.valorDaCompra}
                    rmItemCarrinho={this.rmItemCarrinho}
                />
                <Produtos
                    listaDeProdutos={this.state.listaDeProdutos}
                    addItemCarrinho={this.addItemCarrinho}
                />
            </Container>
        )
    
    }
}