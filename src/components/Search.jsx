const Search = (props) => {
    // Function for typing changes in site
    const handleChange = (event) => {
        props.setName(event.target.value);
    }

    // Search Function that searches API to populate 
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch(
            `https://swapi.dev/api/starships/?search=${props.starshipName}`
        )
        let JSONdata = await response.json()
        props.setStarship(JSONdata)
    }
    return(
    <form onSubmit={handleSearchSubmit}> {/* This will be the search function that looks through API for starship */}
        <input type='text' onChange={handleChange}/>
        <button type='submit'>Search</button>
    </form>
    )
}

export default Search