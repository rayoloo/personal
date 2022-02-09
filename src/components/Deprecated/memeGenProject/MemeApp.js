import React from "react"
import MemeGenerator from "./MemeGenerator"
import './memeStyles.css'

function MemeApp(){
    return(
        <div>
            <header className="memeheader">
                <p>Meme Generator</p>
            </header>
            <MemeGenerator/>
        </div>
    )
}

export default MemeApp