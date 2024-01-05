import { Link } from "react-router-dom"
const MainSection = () => {
  return (
    <main>
    <p>Filter:</p>
    <div className="filter-section">
        <div className="cities">
            <button className="city-btn active">Vilnius</button>
            <button className="city-btn">Kaunas</button>
            <button className="city-btn">Klaipėda</button>
            <button className="city-btn">All</button>
        </div>
        <Link to="/form" className="add-property">Add Property +</Link>
    </div>
</main>
  )
}

export default MainSection