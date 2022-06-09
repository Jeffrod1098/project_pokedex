import React from "react";
import { useEffect } from "react";
import { Params } from "react-router-dom";


const RandomPkmnCard = ({pokeData1}) => {
    console.log(pokeData1.sprites.front_default)

    // testing commit
    return(
        <div>
            <div className="randomCard">
                <h2>{pokeData1.id}</h2>
                <img src={pokeData1.sprites.front_default} alt={pokeData1.name} />
                <h2>{pokeData1.name}</h2>
            </div>
        </div>
    )
}

export default RandomPkmnCard