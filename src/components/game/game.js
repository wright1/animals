import React, { useState, useEffect } from "react"
import ImageCard from "./imageCard"
import Button from "./button"
import { formatter } from "../../utils/utils"
import { buttonsList } from "../../utils/utils"
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

const Game = () => {


    //-----------------------------Hooks-----------------------------------------------

    const [animals, setAnimals] = useState(['cow', 'dog', 'duck', 'elephant', 'giraffe','lion', 'moose', 'panda', 'pig', 'rabbit'])


    // an array of all animal images variable
    const [animalImages, setAnimalImages] = useState([cow, dog, duck, elephant, giraffe, lion, moose, panda, pig, rabbit ]) 

    //picks a random element from the animalImages array and sets it in state
    const [image, setImage] = useState(animalImages[Math.floor(Math.random()*animalImages.length)])
    console.log(image)

    const [buttonOptions, setButtonOptions] = useState(buttonsList(String(image), animals));

    




    //----------------------useEffect methods----------------------------------------
    


    //render new buttons when image is changed
    useEffect(()=>{
        setButtonOptions(buttonsList(String(image), animals))

    },[image])


    //--------------------------------------------------------------------------
    


    const checkAnswer = (the_answer)=>{
        if(the_answer===formatter(String(image))){
         
        setImage(animalImages[Math.floor(Math.random()*animalImages.length)])
        
    }
   }

    

    return(
        <div>
        
    <ImageCard img={ image } /> 
        {
            buttonOptions.map((buttonOption,i)=>{
                return(
                <Button text={buttonOption} 
                key={buttonOption+i}
                onClick={checkAnswer}
                />
            )})
        }
        </div>
    )
}

export default Game