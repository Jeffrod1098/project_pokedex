import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import SearchedPkmn from "./SearchedPkmn";




const PkmnSearchPage = () => {
    const [text, setText] = useState('')
    const [pokeData, setSPokeData] = useState({})
    
    function searchforPokemon(event) {
        event.preventDefault()
        const lowerCaseText = text.toLowerCase()
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${lowerCaseText}`
        axios.get(apiUrl).then(function (response) {
            console.log(response.data)
            setSPokeData(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    }


    // const ability = pokeData.abilities.map(poke =>{
    //     return(
    //         <>
    //         <div>{poke.ability.name}</div>
    //         </>
    //     )
    // })

    // const stats = pokeData.stats.map(poke =>{
    //     return(
    //         <div>{poke.stat.name}:{poke.base_stat}</div>
    //     )
    // })


    return (
        <div>
            <form className="pure-form">

                <input
                    type="text"
                    className="pure-input-2-3"
                    value={text}

                    onChange={e => setText(e.target.value)}
                />
                <button onClick={e => searchforPokemon(e)} className="pure-button pure-button-active"  >Search a Pokemon</button>

            </form>
            {JSON.stringify(pokeData) != '{}' ?
            // <Link to={`pokemon/random/${pokeData.id}`}>
                    //         <div className="randomCard">
                    // <h2>#{pokeData.id}</h2>

                    //         <img src={pokeData.sprites.front_default} alt={pokeData.name} />

                    // <h2>{pokeData.name}</h2>
                // </div>
            // </Link>
                <div>
                    <SearchedPkmn sPokeData={pokeData} />
            </div>



                :
                <><p>No results yet.</p></>
            }
                
        </div>




    )
}

export default PkmnSearchPage