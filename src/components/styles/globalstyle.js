import styled, { createGlobalStyle }from "styled-components"
import lilly from "../../images/lilly.png"

const GlobalStyles = createGlobalStyle`
html{
    height: 100%;
    
}
body{
    height: 100%;
    display: flex;
    margin: 0;
    padding:0;
    background-image: url(${ lilly })
    
}
`

export default GlobalStyles