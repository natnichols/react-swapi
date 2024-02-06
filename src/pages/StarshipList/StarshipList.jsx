// npm modules
import { useEffect, useState } from 'react'

// services
import * as apiService from '../../services/sw-api'
import Starship from '../../components/Starship/Starship'

// css
import styles from './StarshipList.module.css'

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await apiService.getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])
  
  if (!starships.length) return <h2>Please wait...Loading Ships...</h2>
  
  return ( 
    <>
      <h1>Starship List</h1>
      <div className={styles.starshipContainer}>
        {starships.map(starship => 
          <Starship key={starship.name} starship={starship} />
        )}
      </div>
    </>
  )
}

export default StarshipList