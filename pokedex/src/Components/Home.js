import React, { useEffect, useState } from "react";
import axios from "axios";
import RandomPkmnCard from "./RandomPkmnCard";
import {Link} from "react-router-dom"
import { Route, Routes } from 'react-router-dom';
import Pokemon from "./Pokemon";



const client = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

const Home = ({pokeData1}) =>{

    // const [pokeData1, setPokeData1pokeData1] = useState(null)

    // const randomNumber = Math.floor(Math.random() * 898)

    // React.useEffect(() => {
    //     async function getPokemonData() {
    //         const response = await client.get(`/${randomNumber}`)
    //         setPokeData1pokeData1(response.data)
    //         console.log(response.data)
    //     }
    //     getPokemonData()
    // },[])

    // async function deletePost() {
    //     await client.delete(`/${randomNumber}`)
    //     alert("Post Deleted!")
    //     setPokeData1pokeData1(null)
    // }

    if (!pokeData1) return "No Post!"
    return(
        <div>
                <h1>HOME</h1>
                <p>
                    <b>Welcome</b> to my pokedex, 
                    this pokedex was made using react, and the pokemon API.<br></br> 
                    Click the random pokemon below or navigate through the 
                    nav bar to get started exploring. 
                </p>
                <Link to='/pokemon/random'>
                <RandomPkmnCard  pokeData1={pokeData1}/>
                </Link>
                <Link to='/pokemon/random'>
                <RandomPkmnCard  pokeData1={pokeData1}/>
                </Link>
                <Link to='/pokemon/random'>
                <RandomPkmnCard  pokeData1={pokeData1}/>
                </Link>
        </div>
    )
}

export default Home 

