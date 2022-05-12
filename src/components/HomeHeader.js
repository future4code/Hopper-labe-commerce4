import React from 'react'
import styled from 'styled-components'
import groot from './img/groot.png'

const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    background-color: gainsboro;
    border-bottom: 1px solid black;
    padding-top: 4px;
    padding-bottom: 4px;
    justify-content: space-around;
`

export class HomeHeader extends React.Component{
    render(){
        return(
            <Header>
                <img alt='groot' src={groot}/>
            </Header>
        )
    }
}