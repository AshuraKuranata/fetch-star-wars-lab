const StarshipList = (props) => {
    const capitalizeWords = (str) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    return (
        <section className="starshipBox">
            {/* This will iterate through the starships state variable for all the starship cards*/}
            {props.starships.results.map((starship, index) => (
                <div className='starshipCard' key={index}>
                <h2>{capitalizeWords(starship.name)}</h2>
                <h3>Class: {capitalizeWords(starship.starship_class)}</h3>
                <p>Manufacturer: {starship.manufacturer}<br/>Model: {starship.model}</p>
                </div>
            ))}
        </section>
    )
}

export default StarshipList