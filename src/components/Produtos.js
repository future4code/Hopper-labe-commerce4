import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

export class Produtos extends React.Component{
    render(){
        const itensProdutos = this.props.listaDeProdutos.map((item,index,array)=>{
            return(
                <Card>
                    <ImgProduto src={item.imagem}/>
                    <p>{item.nome}</p>
                    <p>R${item.preco},00</p>
                    <button onClick={() => this.props.addItemCarrinho(item,item)}>Adicionar ao Carrinho</button>
                </Card>
            )   
        }) 
        return(
            <div className='box card'>
                {itensProdutos}
            </div>
        )
    }
}