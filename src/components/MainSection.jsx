import { Link } from 'react-router-dom';

const MainSection = ({ selectedCity, handleCityButtonClick }) => {
  return (
    <main>
      <p>Filter:</p>
      <div className="filter-section">
        <div className="cities">
          <button
            className={`city-btn ${selectedCity === 'Vilnius' ? 'active' : ''}`}
            onClick={() => handleCityButtonClick('Vilnius')}
          >
            Vilnius
          </button>
          <button
            className={`city-btn ${selectedCity === 'Kaunas' ? 'active' : ''}`}
            onClick={() => handleCityButtonClick('Kaunas')}
          >
            Kaunas
          </button>
          <button
            className={`city-btn ${selectedCity === 'Klaipėda' ? 'active' : ''}`}
            onClick={() => handleCityButtonClick('Klaipėda')}
          >
            Klaipėda
          </button>
          <button
            className={`city-btn ${selectedCity === 'All' ? 'active' : ''}`}
            onClick={() => handleCityButtonClick('All')}
          >
            All
          </button>
        </div>
        <Link to="/form" className="add-property">
          Add Property +
        </Link>
      </div>
    </main>
  )
}

export default MainSection
