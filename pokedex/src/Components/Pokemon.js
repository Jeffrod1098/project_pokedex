import React from "react";


const Pokemon = ({ pokeData1 }) => {

    const ability = pokeData1.abilities.map(poke => {
        return (
            <>
                <div>{poke.ability.name}</div>
            </>
        )
    })

    const stats = pokeData1.stats.map(poke => {
        return (
            <div>{poke.stat.name}:{poke.base_stat}</div>
        )
    })

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let pkmnName = capitalizeFirstLetter(pokeData1.name)

    return (
        <div>
            <h1>{pkmnName}</h1>

            <div className="wholePage">
                <div className="halfPage">
                    <img className="pkmnImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData1.id}.png`} />
                </div>
                <div className="otherHalfPage">
                    <div className="sprites">
                        <div>
                            <img src={pokeData1.sprites.front_default} alt={pokeData1.name} />
                            <h4>Non-Shiny</h4>
                        </div>
                        <div>
                            <img src={pokeData1.sprites.front_shiny} alt={pokeData1.name} />
                            <h4>Shiny</h4>
                        </div>
                    </div>
                    <div>
                        <h2>ability</h2>
                        <div className="group">
                            <div>{ability}</div>
                        </div>

                    </div>
                    <div className="base-stat">
                        <h3>{stats}</h3>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Pokemon