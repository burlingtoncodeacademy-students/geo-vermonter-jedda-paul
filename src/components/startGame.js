import React from 'react';


function StartGame(props) {
    

    return(
        <div>
        <button onClick={() => {props.randomLocation(); props.setDisable()}}>Start</button>
        

        </div>
    )
}









export default StartGame;