import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    background-color: white;
    color: black;
    width: 100%;
    height: 150px;
    border-radius: 3px;
    justify-content: space-between;
`

const ImgProduto = styled.img`
    height: 100%;
    width: 150px;
`

export class Produto extends React.Component{
    render(){
        return(
            <Card>
                <ImgProduto 
                    src={this.props.imagem}
                />
                <p>{this.props.nome}</p>
                <p>{this.props.preco}</p>
                <button onClick={() => this.props.addItem(this.props.nome,this.props.preco)}>Adicionar ao Carrinho</button>
            </Card>
        )
    }
}