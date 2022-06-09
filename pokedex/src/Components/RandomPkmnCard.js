import React from "react";
import { useEffect } from "react";
import { Params } from "react-router-dom";


const RandomPkmnCard = ({pokeData}) => {
    console.log(pokeData.sprites.front_default)

    // testing commit
    return(
        <div>
            <div className="randomCard">
                <h2>{pokeData.id}</h2>
                <img src={pokeData.sprites.front_default} alt={pokeData.name} />
                <h2>{pokeData.name}</h2>
            </div>
        </div>
    )
}

export default RandomPkmnCard