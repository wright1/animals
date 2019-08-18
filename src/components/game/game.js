import React, { useState, useEffect } from "react"
import ImageCard from "./imageCard"
import Button from "./button"
import buttonsList from "../../utils/utils"
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

    const [animals, setAnimals] = useState(['cow', 'dog', 'duck', 'elephant', 'giraffe','lion', 'moose', 'panda', 'pig', 'rabbit'])



    const [animalImages, setAnimalImages] = useState([cow, dog, duck, elephant, giraffe, lion, moose, panda, pig, rabbit ]) // an array of all animal images variables

    // console.log(animalImages[0], animalImages[1])

    //picks a random element from the animalImages array and sets it in state
    const [image, setImage] = useState(animalImages[Math.floor(Math.random()*animalImages.length)])

    const [buttonOptions, setButtonOptions] = useState(buttonsList(String(image), animals));

    
console.log( buttonsList(String(image), animals) )
    

    return(
        <div>
        
    <ImageCard img={ image } /> 
        <Button text={ 'cat' } />
        </div>
    )
}

export default Game