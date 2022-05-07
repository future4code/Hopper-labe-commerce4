import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    background-color: aliceblue;
`

export class HomeHeader extends React.Component{
    render(){
        return(
            <Header>
                <p>Home Header</p>
            </Header>
        )
    }
}