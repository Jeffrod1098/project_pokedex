import './App.css';
import React, { useEffect, useState } from "react";
import Home from './Components/Home'
import NavBar from './Components/NavBar/Navbar'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import Pokemon from './Components/Pokemon'
import Pokemon2 from './Components/Pokemon2'
import Pokemon3 from './Components/Pokemon3'
import PkmnSearchPage from './Components/PkmnSearchPage';
import PkmnGameList from './Components/PkmnGameList';
import SearchedPkmn from './Components/SearchedPkmn';



const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

function App() {

  const [pokeData1, setPokeData1] = useState(null)
  const [pokeData2, setPokeData2] = useState(null)
  const [pokeData3, setPokeData3] = useState(null)


  const randomNumber1 = Math.floor(Math.random() * 898)

  React.useEffect(() => {
      async function getPokemonData() {
          const response = await client.get(`/${randomNumber1}`)
          setPokeData1(response.data)
          console.log(response.data)
      }
      getPokemonData()
  },[])

  async function deletePost() {
      await client.delete(`/${randomNumber1}`)
      alert("Post Deleted!")
      setPokeData1(null)
  }


  
  const randomNumber2 = Math.floor(Math.random() * 898)
  

  React.useEffect(() => {
    async function getPokemonData() {
        const response = await client.get(`/${randomNumber2}`)
        setPokeData2(response.data)
        console.log(response.data)
    }
    getPokemonData()
},[])

async function deletePost() {
    await client.delete(`/${randomNumber2}`)
    alert("Post Deleted!")
    setPokeData1(null)
}


const randomNumber3 = Math.floor(Math.random() * 898)


React.useEffect(() => {
  async function getPokemonData() {
      const response = await client.get(`/${randomNumber3}`)
      setPokeData3(response.data)
      console.log(response.data)
  }
  getPokemonData()
},[])

async function deletePost() {
  await client.delete(`/${randomNumber3}`)
  alert("Post Deleted!")
  setPokeData1(null)
}



  if (!pokeData1) return "No Post!"
  if (!pokeData2) return "No Post!"
  if (!pokeData3) return "No Post!"


  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home pokeData1={pokeData1} pokeData2={pokeData2} pokeData3={pokeData3}/>} />
          <Route path="/pokemon/random/1" element={<Pokemon pokeData1={pokeData1} />} />
          <Route path="/pokemon/random/2" element={<Pokemon pokeData1={pokeData2} />} />
          <Route path="/pokemon/random/3" element={<Pokemon pokeData1={pokeData3} />} />
          <Route path= "/pokemon/search" element={<PkmnSearchPage />} />
          <Route path= "/pokemon/gamelist" element={<PkmnGameList />} />
          {/* <Route path= "/pokemon/searched" element={<SearchedPkmn  />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
