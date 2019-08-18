import React from "react"
import styled from "styled-components"
import lilly from "../../images/lilly.png"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Section = styled.section`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
justify-items: center;
flex-direction: column;
background-image: url(${lilly});
`

const Head = styled.div`
display: flex;
justify-content: center;
font-family: 'Itim', cursive;
font-size: 2em;
color: #8D4960;
> p{
    align-text: center;
}
`
const Title = styled.div`
display: flex;
justify-content: center
font-family: 'Itim', cursive;
font-size: 5em;
color: #8D4960;
`

const Homepage = () => {
    return(
        <Section>
            <Title>Name Game</Title>


           <Head>
           <p>Choose the correct name for each animal<br></br>
               Press the button to start!!!
            </p>
            </Head>
            

           <Head> <Link to="/game">START</Link> </Head>


        </Section>
    )
}

export default Homepage;