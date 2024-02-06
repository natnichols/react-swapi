// npm modules
import { Link } from 'react-router-dom'

// css
import styles from './Starship.module.css'

const Starship = ({ starship }) => {
  return ( 
    <div className={styles.starshipCard}>
      <h2>{starship.name}</h2>
      <div className={styles.linkContainer}>
        <Link to='/starships/details' state={{starship}}><button>useLocation</button></Link>
        <Link to={`/starships/${starship.url.match(/\d+/)}`}><button>useParams</button></Link>
      </div>
    </div>
  )
}

export default Starship