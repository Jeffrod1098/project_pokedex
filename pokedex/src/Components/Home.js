import React, { useEffect, useState } from "react";
import axios from "axios";
import RandomPkmnCard from "./RandomPkmnCard";
import {Link} from "react-router-dom"
import { Route, Routes } from 'react-router-dom';
import Pokemon from "./Pokemon";



const client = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

const Home = ({pokeData1, pokeData2, pokeData3}) =>{

    if (!pokeData1) return "No Post!"
    return(
        <div className="home">
                <h1>HOME</h1>
                <p>
                    <b>Welcome</b> to my pokedex, 
                    this pokedex was made using react, and the pokemon API.<br></br> 
                    Click one of the random pokemon below or navigate through the 
                    nav bar to get started exploring. 
                </p>
                <div className="pokeCardContainer">
                <Link style={{textDecoration: 'none'}} to='/pokemon/random/1'>
                    <RandomPkmnCard  pokeData1={pokeData1}/>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/pokemon/random/2'>
                    <RandomPkmnCard  pokeData1={pokeData2}/>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/pokemon/random/3'>
                    <RandomPkmnCard  pokeData1={pokeData3}/>
                </Link>
                </div>

        </div>
    )
}

export default Home 

