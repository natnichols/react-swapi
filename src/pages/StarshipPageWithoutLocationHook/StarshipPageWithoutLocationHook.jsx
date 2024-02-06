//  npm modules
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

// services
import * as apiService from '../../services/sw-api'

// css
import styles from './StarshipPageWithoutLocationHook.module.css'

const StarshipPageWithoutLocationHook = () => {
  const {starshipId} = useParams()
  const [starshipDetails, setStarshipDetails] = useState([])
  
  
useEffect(() => {
  const fetchStarshipDetails = async (id) => {
    const starshipData = await apiService.getStarshipData(starshipId)
    setStarshipDetails(starshipData)
  }
  fetchStarshipDetails()
})

  if (!starshipDetails.name) return <h2>Please wait...Loading Starship Details...</h2>

  return ( 
    <div className={styles.starshipDetails}>
      <h2>NAME: {starshipDetails.name}</h2>
      <h2>MODEL: {starshipDetails.model}</h2>
      <h3>MADE BY: {starshipDetails.manufacturer}</h3>
      <h3>HYPERDRIVE RATING: {starshipDetails.hyperdrive_rating}</h3>
      <Link to='/starships'><button>BACK</button></Link>
    </div>
  )
}

export default StarshipPageWithoutLocationHook