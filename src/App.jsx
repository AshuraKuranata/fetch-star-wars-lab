import { useState, useEffect } from 'react'
import './App.css'
import StarshipList from './components/StarshipList.jsx'
import Search from './components/Search.jsx'

function App() {
  // State variables and state setter functions 
  const [starships, setStarship] = useState({results: []})
  const [starshipName, setName] = useState('')
  const [currentURL, setURL] = useState('https://swapi.dev/api/starships/')

  useEffect(() => {
    const getData = async (url) => {
      let response = await fetch(url)
      let JSONdata = await response.json()
      console.log(JSONdata)
      setStarship(JSONdata)
    }
    getData(currentURL)
  }, [currentURL])

  // Change View
  const handleView = (direction) => {
    const targetURL = direction === 'next' ? starships.next : starships.previous
    if (targetURL) {
      setURL(targetURL)
    }
  }

  return (
    <>
      <h1>Star Wars React Fetch API App</h1>
      <Search starshipName={starshipName} starships={starships} setStarship={setStarship} setName={setName}/>
      <section>
        <h2>Starships in the Star Wars Universe:</h2>
        <h3>These are single transport crafts with hyperdrive capability<br/>Starship Count: {starships.results.length}</h3>
        <div className='btnBox'>
          {starships.previous && (
            <button id='changeView' onClick={() => handleView('previous')}>Previous</button>
          )}
          {starships.next && (
            <button id='changeView' onClick={() => handleView('next')}>Next</button>
          )}
        </div>
        {starships.results.length !== 0
        ?<StarshipList starships={starships}/>
        : <h2>No Ships Found<br/>Update Search Parameters</h2>
        }
      </section>
    </>
  )
}

export default App