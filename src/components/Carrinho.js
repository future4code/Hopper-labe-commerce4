import React from 'react'
import styled from 'styled-components'

const Lista = styled.div`
    display: flex;
    background-color: white;
    color: black;
    justify-content: space-around;
    gap: 10px;
`

export class Carrinho extends React.Component{
    render(){
        const lista = this.props.lista.map((item)=>{
            return(
                <Lista>
                    <p>{item.nome}</p>
                    <p>R${item.preco},00</p>
                </Lista>
            )
        })
        return (
            <div className='box carrinho'>
                {lista}
                <div>
                    <h1>Valor Total:</h1>
                    <p>R${this.props.soma},00</p>
                </div>
            </div>
        )
    }
}