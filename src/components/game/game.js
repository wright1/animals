import React, { useState, useEffect, useRef, createRef } from "react"
import ImageCard from "./imageCard"
import Button from "./button"
import Sound from "./audio"
import Finish from"../Finish/finish"
import { ButtonWrapper, Wrap  } from "../styles/wappers"
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


    //returns an array of button labels (correct answer included)
    const [buttonOptions, setButtonOptions] = useState(buttonsList(String(image), animals));

    const [score, setScore] = useState(0)

    const [counter, setCounter] = useState(0)

    const [limit, setLimit] = useState( false )






    //----------------------useEffect methods----------------------------------------
    


    //render new buttons when image is changed
    useEffect(()=>{
        

        setButtonOptions(buttonsList(String(image), animals))
        setScore(score+10)
        


    },[image])

    


    //--------------------------------------------------------------------------
    




    const elref = createRef();
    const wrongRef = createRef();


    const checkAnswer = (the_answer)=>{
        if(the_answer===formatter(String(image))){
            elref.current.play()  
         
        setImage(animalImages[Math.floor(Math.random()*animalImages.length)])
        setCounter(prevCounter=>prevCounter+1)
        
    }else{

        wrongRef.current.play();
        setCounter(prevCounter => prevCounter+1)
    }
   } 

   console.log(counter)

    const attempt = counter < 8;

    

    return(

        
        <div>
            
    
    { attempt &&<ImageCard img={ image } />}


    {attempt==false&&<Wrap>you have scored {score} points</Wrap>}


    <Sound ref={ elref } src={ correct }  />
    <Sound ref={ wrongRef } src={ wrong } />

       {attempt&& (<ButtonWrapper>
        
            {buttonOptions.map((buttonOption,i)=>{
                return(
                <Button 
                text={buttonOption} 
                key={buttonOption+i}
                onClick={checkAnswer}
                />
            )})}
        
       </ButtonWrapper>)}

       {/* {attempt == false && <Finish /> } */}
    
        </div>
    )
}

export default Game