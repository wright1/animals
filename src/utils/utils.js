
const formatter = (imageUrl)=>{ //this function extracts the animal name from the image url
    const result = imageUrl.split('/').pop('.').split('.')[0];

    return result
}

//this function returns button options (as an array)which include the correct answer
const buttonOptions = (imageUrl, animalList) =>{
    const buttonOptionsArr = [formatter(imageUrl)];

    for(let i=4; i>1; i--){
        buttonOptionsArr.push(animalList[Math.floor(Math.random()*animalList.length)])
      }

      return buttonOptionsArr;

}

export default {
    formatter,
    buttonOptions
}