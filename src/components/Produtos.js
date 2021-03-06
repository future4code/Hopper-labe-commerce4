import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
    color: white;
    width: 250px;
    height: 150px;
    justify-content: space-between;
    border: 1px solid black;
    padding-right: 5px;
    background-image: url(https://wallpapercave.com/wp/wp3158324.jpg);
`

const ImgProduto = styled.img`
    height: 100%;
    width: 150px;
`

const ConteudoProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
`

const BotaoProduto = styled.button`
    width: 90px;
`

export class Produtos extends React.Component{
    render(){
        const itensProdutos = this.props.listaDeProdutos.map((item,index,array)=>{
            return(
                <Card>
                    <ImgProduto src={item.imagem}/>
                    <ConteudoProduto>
                        <p>{item.nome}</p>
                        <p>R${item.preco},00</p>
                        <BotaoProduto 
                            onClick={() => this.props.addItemCarrinho(item,item)}>
                            Adicionar ao Carrinho
                        </BotaoProduto>
                    </ConteudoProduto>
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