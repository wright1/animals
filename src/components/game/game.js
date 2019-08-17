import React from "react"
import ImageCard from "./imageCard"
import cow from "../../images/cow.png"
import dog from "../../images/dog.png"
import duck from "../../images/duck.png"
import elephant from "../../images/elephant.png"
import giraffe from "../../images/giraffe.png"
import lion from "../../images/lion.png"
import moose from "../../images/moose.png"
import panda from "../../images/panda.png"
import pig from "../../images/pig.png"
import rabbit from "../../images/rabbit.png"

const Game = () =>{
    return(
        <div>
        <div><h1>This is the game page</h1></div>
        <ImageCard img={ moose } />
        </div>
    )
}

export default Game