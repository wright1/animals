import React from "react"
import styled from "styled-components"

const Choice = styled.button`
width: 15vw;
height: 10vh;
border: solid 0.3em red;
border-radius: 5px;
`

const Button = ({ text, onClick }) => {
    return(
        <Choice onClick={ ()=> onClick( text )}>{ text }</Choice>
    )
}

export default Button