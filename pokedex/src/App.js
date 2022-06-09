import './App.css';
import React, { useEffect, useState } from "react";
import Home from './Components/Home'
import NavBar from './Components/NavBar/Navbar'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import Pokemon from './Components/Pokemon'
import PkmnSearchPage from './Components/PkmnSearchPage';
import PkmnGameList from './Components/PkmnGameList';
import SearchedPkmn from './Components/SearchedPkmn';



const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

function App() {

  const [pokeData, setPokeData] = useState(null)

  const randomNumber = Math.floor(Math.random() * 898)

  React.useEffect(() => {
      async function getPokemonData() {
          const response = await client.get(`/${randomNumber}`)
          setPokeData(response.data)
          console.log(response.data)
      }
      getPokemonData()
  },[])

  async function deletePost() {
      await client.delete(`/${randomNumber}`)
      alert("Post Deleted!")
      setPokeData(null)
  }

  if (!pokeData) return "No Post!"

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home pokeData={pokeData}/>} />
          <Route path="/pokemon/random" element={<Pokemon pokeData={pokeData} />} />
          <Route path= "/pokemon/search" element={<PkmnSearchPage />} />
          <Route path= "/pokemon/gamelist" element={<PkmnGameList />} />
          <Route path= "/pokemon/searched" element={<SearchedPkmn  />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
