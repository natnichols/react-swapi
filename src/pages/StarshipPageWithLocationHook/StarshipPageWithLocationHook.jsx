// npm modules
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"

// css
import styles from './StarshipPageWithLocationHook.module.css'

const StarshipPageWithLocationHook = () => {
  const location = useLocation()
  const [starshipDetails, setStarshipDetails] = useState(location.state.starship)
  
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

export default StarshipPageWithLocationHook