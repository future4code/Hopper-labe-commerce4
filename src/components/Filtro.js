import React from 'react'

export class Filtro extends React.Component{
    state = {
        valor: ''
    }

    onChangeOption = (event) => {
        this.setState({valor: event.target.value})
    }

    render(){
        return(
            <div className='box filtro'>
                <p>Filtro</p>
                <select onChange={this.onChangeOption} value={this.state.valor} onClick={() => this.props.filtroSelecionado(this.state.valor)}>
                    <option>FILTRO</option>
                    <option value={'minimo'}>Valor Mínimo</option>
                    <option value={'maximo'}>Valor Máximo</option>
                    <option value={'nome'}>Nome do Produto</option>
                </select>
            </div>
        )
    }
}