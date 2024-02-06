const BASE_URL = 'https://swapi.dev/api/starships'

export async function getAllStarships() {
  try {
    const res = await fetch(`${BASE_URL}`)
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function getStarshipData(starshipId) {
  try {
    const res = await fetch(`${BASE_URL}/${starshipId}`)
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}