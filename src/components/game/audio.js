import React from "react"

const Sound = React.forwardRef(({ src }, ref) =>(
    <audio ref={ ref } src={ src } autoPlay={ false } type="audio/wave">not</audio>

))

export default Sound