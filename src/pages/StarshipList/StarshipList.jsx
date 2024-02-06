// npm modules
import { useEffect, useState } from 'react'

// services
import * as apiService from '../../services/sw-api'

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await apiService.getAllStarships()
      setStarships(starshipData)
    }
    fetchStarshipData()
  }, [])

  return ( 
    <>
      <h1>Starship List</h1>
    </>
  )
}

export default StarshipList