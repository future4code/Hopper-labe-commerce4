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

const listaInicialDeProdutos = [
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
    },
    {
        imagem:"https://picsum.photos/50/54",
        nome:"Plutão",
        preco:70,
        id:5
    },
    {
        imagem:"https://picsum.photos/50/55",
        nome:"Netuno",
        preco:30,
        id:6
    },
    {
        imagem:"https://picsum.photos/50/56",
        nome:"Mercúrio",
        preco:40,
        id:7
    }
]

export class Home extends React.Component{
    state = {
        listaDeProdutos: listaInicialDeProdutos,
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

    //Filtros de Ordenação
    ordemSelecionada = (ordem) => {
        this.setState({listaDeProdutos: listaInicialDeProdutos})
        switch(ordem){
            case 'crescente':
                const listaCrescente = [...this.state.listaDeProdutos]

                listaCrescente.sort(function(a,b){
                    let primeiroNumero1 = a.preco
                    let segundoNumero1 = b.preco
                    return primeiroNumero1 - segundoNumero1
                })
                
                this.setState({listaDeProdutos: listaCrescente})
                // console.log("Ordem Crescente")
                break;
            case 'decrescente':
                const listaDecrescente = [...this.state.listaDeProdutos]

                listaDecrescente.sort(function(a,b){
                    let primeiroNumero2 = a.preco
                    let segundoNumero2 = b.preco
                    return segundoNumero2 - primeiroNumero2
                })
                
                this.setState({listaDeProdutos: listaDecrescente})
                // console.log("Ordem Decrescente")
                break;
            case 'alfabetica':
                const listaNome = [...this.state.listaDeProdutos]

                listaNome.sort((a,b) => {
                    let primeiroNome = a.nome.toUpperCase()
                    let segundoNome = b.nome.toUpperCase()
                    return (primeiroNome < segundoNome) ? -1 : (primeiroNome > segundoNome) ? 1 : 0
                })
                
                this.setState({listaDeProdutos: listaNome})
                // console.log("Ordem Alfabética")
                break;
            default:
                console.log(`Ordem Inicial${ordem}`)
        }
    }
    
    //Filtros de Valor e Nome
    filtroSelecionado = (filtro) => {
        this.setState({listaDeProdutos: listaInicialDeProdutos})
        switch(filtro){
            case 'minimo':
                let listaValorMinimo = [...this.state.listaDeProdutos]

                listaValorMinimo.sort(function(a,b){
                    let primeiroNumero1 = a.preco
                    let segundoNumero1 = b.preco
                    return primeiroNumero1 - segundoNumero1
                })

                listaValorMinimo = listaValorMinimo.filter((item,index,array) => {
                    return index === 0
                })
                
                this.setState({listaDeProdutos: listaValorMinimo})
                // console.log("Valor Minimo")
                break;
            case 'maximo':
                let listaValorMaximo = [...this.state.listaDeProdutos]

                listaValorMaximo.sort(function(a,b){
                    let primeiroNumero2 = a.preco
                    let segundoNumero2 = b.preco
                    return segundoNumero2 - primeiroNumero2
                })

                listaValorMaximo = listaValorMaximo.filter((item,index,array) => {
                    return index === 0
                })

                this.setState({listaDeProdutos: listaValorMaximo})
                // console.log("Valor Maximo")
                break;
            default:
                console.log(`Filtro Inicial${filtro}`)
        }
    }

    // Filtro de Busca
    buscaSelecionada = (busca) => {
        const listaValorProcurado = [...this.state.listaDeProdutos]

        const valorProcurado = listaValorProcurado.filter((item) => {
            return item.nome.toLowerCase().includes(busca.toLowerCase())
        })

        this.setState({listaDeProdutos: valorProcurado})
    }

    //Reinicia Filtros
    reiniciaFiltros = () => {
        this.setState({listaDeProdutos: listaInicialDeProdutos})
    }

    render(){
        return(
            <Container>
                <Filtro
                    ordemSelecionada={this.ordemSelecionada}
                    filtroSelecionado={this.filtroSelecionado}
                    buscaSelecionada={this.buscaSelecionada}
                    reiniciaFiltros={this.reiniciaFiltros}
                />
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