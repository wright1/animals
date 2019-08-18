import React from "react"
import styled from "styled-components"

const Choice = styled.button`
width: 18vw;
height: 10vh;
font-family: 'Raleway', serif sans;
font-size: 1.2em;
border: solid 0.3em #9DA0BF;
border-radius: 5px;
margin-right: 3vw;
background-color: rgb(212,215,247, 0.6);
`



const Button = ({ text, onClick }) => {
    return(
        <div>
        <Choice onClick={ ()=> onClick( text )}>{ text }</Choice>
        </div>
    )
}

export default Button