import React from 'react'
import { Produto } from './Produto.js'

export class Cards extends React.Component{
    render(){
        return(
            <div className='box card'>
                <Produto
                    addItem={this.props.addItem}
                    imagem={"https://picsum.photos/50/50"}
                    nome={"Terra"}
                    preco={40}
                />
                <Produto
                    addItem={this.props.addItem}
                    imagem={"https://picsum.photos/50/51"}
                    nome={"Mercúrio"}
                    preco={60}
                />
                <Produto
                    addItem={this.props.addItem}
                    imagem={"https://picsum.photos/50/52"}
                    nome={"Saturno"}
                    preco={80}
                />
                <Produto
                    addItem={this.props.addItem}
                    imagem={"https://picsum.photos/50/53"}
                    nome={"Júpiter"}
                    preco={80}
                />
            </div>
        )
    }
}