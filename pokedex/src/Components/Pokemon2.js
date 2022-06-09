import React from "react"

const Pokemon2 = ({pokeData2}) => {

    const ability = pokeData2.abilities.map(poke =>{
        return(
            <>
            <div>{poke.ability.name}</div>
            </>
        )
    })

    const stats = pokeData2.stats.map(poke =>{
        return(
            <div>{poke.stat.name}:{poke.base_stat}</div>
        )
    })


    return(
        <div>
            <h1>{pokeData2.name}</h1>
            {/* <img className="pkmnImg" src={pokeData2.sprites.front_default} />  */}

            <img className="pkmnImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData2.id}.png`} />

            <div className="group">
                <div>
                    <h2>ability</h2>
                    <div>{ability}</div>
                </div>
                <div className="group">
                    <h2></h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>{stats}</h3>
            </div>
        </div>
    )
}

export default Pokemon2