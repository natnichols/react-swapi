// npm modules
import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// components
import Starship from './components/Starship/Starship'
import NavBar from './components/NavBar/NavBar'

//pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPageWithLocationHook from './pages/StarshipPageWithLocationHook/StarshipPageWithLocationHook'
import StarshipPageWithoutLocationHook from './pages/StarshipPageWithoutLocationHook/StarshipPageWithoutLocationHook'

// css
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<StarshipList />}/>
        <Route path='/starships/:starshipId' element={<StarshipPageWithoutLocationHook />}/>
        <Route path='/starships/details' element={<StarshipPageWithLocationHook />}/>
      </Routes>
    </>
  )
}

export default App
