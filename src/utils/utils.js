
const formatter = (imageUrl)=>{ //this function extracts the animal name from the image url
    const result = imageUrl.split('/').pop('.').split('.')[0];

    return result
}


// this function shuffles an array
const shuffle = (array) =>{

            
        for(let i = (array.length)-1; i>1; i--) {// shuffles the array
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array
}


//this function returns button options (as an array)which include the correct answer
const buttonsList = (imageUrl, animalList) =>{
    const buttonsArr = [formatter(imageUrl)];

    for(let i=4; i>1; i--){
        buttonsArr.push(animalList[Math.floor(Math.random()*animalList.length)])
      }

      return shuffle(buttonsArr);

}

export default buttonsList
