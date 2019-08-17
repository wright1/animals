import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Section = styled.section`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
justify-items: center;
flex-direction: column;
background-color: #95A9BF;
`

const Head = styled.div`
display: flex;
justify-content: center;
font-family: 'Itim', cursive;
`

const Homepage = () => {
    return(
        <Section>
            <Head>Name Game</Head>

           <p>Choose the correct name for each animal<br></br>
               Press the button to start!!!
            </p>

            <Link to="/game">START</Link>


        </Section>
    )
}

export default Homepage;