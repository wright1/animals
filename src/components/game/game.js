import React, { useState, useEffect, useRef, createRef } from "react"
import ImageCard from "./imageCard"
import Button from "./button"
import Sound from "./audio"
import { formatter } from "../../utils/utils"
import { buttonsList } from "../../utils/utils"
import correct from "../../sound/correct.wav"
import wrong from "../../sound/wrong.wav"
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

    const [score, setScore] = useState(0)






    //----------------------useEffect methods----------------------------------------
    


    //render new buttons when image is changed
    useEffect(()=>{
        

        setButtonOptions(buttonsList(String(image), animals))
        setScore(score+10)

    },[image])


    //--------------------------------------------------------------------------
    


    const checkAnswer = (the_answer)=>{
        if(the_answer===formatter(String(image))){
            elref.current.play()  
         
        setImage(animalImages[Math.floor(Math.random()*animalImages.length)])
        
    }else{

        wrongRef.current.play();
    }
   }

    const elref = createRef();
    const wrongRef = createRef();

    

    return(
        <div>
        
    <ImageCard img={ image } />
    <p>{score}</p>
    <Sound ref={ elref } src={ correct }  />
    <Sound ref={ wrongRef } src={ wrong } />


        {
            buttonOptions.map((buttonOption,i)=>{
                return(
                <Button
                // ref={elementsRef.current[i]} 
                text={buttonOption} 
                key={buttonOption+i}
                onClick={checkAnswer}
                />
            )})
        }

        </div>
    )
}

export default Game