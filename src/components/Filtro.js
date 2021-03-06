import React from 'react'
import styled from 'styled-components'

const CardFiltro = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const BotaoRedefinir = styled.button`
    align-self: center;
    width: 150px;
`

export class Filtro extends React.Component{
    state = {
        valorOrdem: '',
        valorFiltro: '',
        valorBusca: ''
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.valorBusca !== this.state.valorBusca){
            this.props.buscaSelecionada(this.state.valorBusca)
        }else if(prevState.valorOrdem !== this.state.valorOrdem){
            this.props.ordemSelecionada(this.state.valorOrdem)
        }else if(prevState.valorFiltro !== this.state.valorFiltro){
            this.props.filtroSelecionado(this.state.valorFiltro)
        }
    }

    onChangeOrdem = (event) => {
        this.setState({valorOrdem: event.target.value})
    }

    onChangeFiltro = (event) => {
        this.setState({valorFiltro: event.target.value})
    }

    onChangeBusca = (event) => {
        this.setState({valorBusca: event.target.value})
    }

    render(){
        return(
            <div className='box filtro'>
                <CardFiltro>
                    <select onChange={this.onChangeOrdem} value={this.state.valorOrdem}>
                        <option>ORDEM</option>
                        <option value={'crescente'}>Ordem Crescente</option>
                        <option value={'decrescente'}>Ordem Decrescente</option>
                        <option value={'alfabetica'}>Ordem Alfabética</option>
                    </select>
                    <select onChange={this.onChangeFiltro} value={this.state.valorFiltro}>
                        <option>FILTRO</option>
                        <option value={'minimo'}>Valor Mínimo</option>
                        <option value={'maximo'}>Valor Máximo</option>
                    </select>
                    <div>
                        <input placeholder='BUSCAR' value={this.state.valorBusca} onChange={this.onChangeBusca}/>
                    </div>
                </CardFiltro>
                <BotaoRedefinir onClick={this.props.reiniciaFiltros}>Redefinir Filtros</BotaoRedefinir>
            </div>
        )
    }
}