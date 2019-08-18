import styled from "styled-components"


const ImageCard = styled.div`
width: 100vw;
height: 70vh;
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-size: auto;
background-position: center;
`

export default ImageCard

