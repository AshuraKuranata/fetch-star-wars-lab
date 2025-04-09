import { useState, useEffect } from 'react'
import './App.css'
import StarshipList from './components/StarshipList.jsx'
import Search from './components/Search.jsx'

function App() {

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(
        `https://swapi.dev/api/starships/`
      )
      let JSONdata = await response.json()
      console.log(JSONdata)
      setStarship(JSONdata)
    }
    getData()
  }, [])

  // State variables and state setter functions 
  const [starships, setStarship] = useState({results: []})
  const [starshipName, setName] = useState('')

  return (
    <>
      <h1>Star Wars React Fetch API App</h1>
      <Search starshipName={starshipName} starships={starships} setStarship={setStarship} setName={setName}/>
      <section>
        <h2>Starships in the Star Wars Universe:</h2>
        <h3>These are single transport crafts with hyperdrive capability<br/>Starship Count: {starships.results.length}</h3>
      <StarshipList starships={starships}/>
      </section>
    </>
  )
}

export default App