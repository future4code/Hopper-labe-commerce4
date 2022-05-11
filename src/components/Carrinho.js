import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    display: flex;
    background-color: white;
    color: black;
    justify-content: space-around;
    margin-bottom: 10px;
    align-items: center;
`

const BotaoRemover = styled.button`
    height: 25px;
`

export class Carrinho extends React.Component{
    render(){
        const itensCarrinho = this.props.listaDeCompras.map((item,index,array)=>{
            if(item !== null || item !== undefined){
                return(
                    <Item>
                        <p>{item.nome}</p>
                        <BotaoRemover 
                            onClick={() => {this.props.rmItemCarrinho(item,item)}}>
                            Remover
                        </BotaoRemover>
                    </Item>
                )
            }else{
                return <Item></Item>
            }
        }) 
        return (
            <div className='box carrinho'>
                {itensCarrinho}
                <div>
                    <h1>Valor Total:</h1>
                    <p>R${this.props.valorDaCompra},00</p>
                </div>
            </div>
        )
    }
}