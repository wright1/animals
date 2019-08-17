import styled from "styled-components"


const ImageCard = styled.div`
width: 40vw;
height: 60vh;
background-image: url(${props => props.img});
background-repeat: no-repeat;
background-size: auto;
background-position: center;
`

export default ImageCard

