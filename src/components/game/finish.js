import React from "react"
import styled from "styled-components"


const Section = styled.section`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
justify-items: center;
flex-direction: column;
background-color: #95A9BF;
`

const Finish = ({score}) =>{
    return(
        <Section>
            <p>Well done you have scored { score } points</p>

        </Section>
    )
}

export default Finish