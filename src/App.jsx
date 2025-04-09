import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const capitalizeWords = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

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

  // Function for typing changes in site
  const handleChange = (event) => {
    setName(event.target.value);
  }

  // Search Function that searches API to populate 
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log(starshipName)
    let response = await fetch(
      `https://swapi.dev/api/starships/?search=${starshipName}`
    )
    let JSONdata = await response.json()
    console.log(JSONdata)
    setStarship(JSONdata)
  }

  return (
    <>
      <h1>Star Wars React Fetch API App</h1>
      <form onSubmit={handleSearchSubmit}> {/* This will be the search function that looks through API for starship */}
        <input type='text' onChange={handleChange}/>
        <button type='submit'>Search</button>
      </form>
      <section>
        <h2>Starships in the Star Wars Universe:</h2>
        <h3>These are single transport crafts with hyperdrive capability</h3>
        <p>Starship Count: {starships.results.length}</p>
      <section>
          {/* This will iterate through the starships state variable for all the starship cards*/}
          {starships.results.map((starship, index) => (
            <div className='starshipCard' key={index}>
              <h2>{capitalizeWords(starship.name)}</h2>
              <h3>Class: {capitalizeWords(starship.starship_class)}</h3>
              <p>Manufacturer: {starship.manufacturer}<br/>Model: {starship.model}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default App


{/*
As a user, I should see a list of starship cards when the site loads. The list should also indicate the number of results that are being displayed currently.
As a user, I should see the name, starship class, starship manufacturer, and starship model rendered in each starship card.
As a user, I should see a search bar above the list of starships. I should be able to enter in the name of a starship into the search bar, and submit my query.
As a user, when I submit a search, the starship results being displayed should update based on my query
  */}