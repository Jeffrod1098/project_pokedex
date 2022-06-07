import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Pokemon = ({pokeData}) => {
    return(
        <div>
            <h1>{pokeData.name}</h1>
            <img className="pkmnImg" src={pokeData.sprites.front_default} />
            <div className="group">
                <div>
                    <h2>ability</h2>
                </div>
                <div className="group">
                    <h2></h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>hp:30</h3>
                <h3>attack:30</h3>
                <h3>special-attack:50</h3>
                <h3>speed:30</h3>
                <h3>defense:30</h3>
            </div>
        </div>
    )
}

export default Pokemon