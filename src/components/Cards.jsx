const Cards = ({ data, selectedCity }) => {
  const filteredData = selectedCity !== 'All' ? data.filter((property) => property.city === selectedCity) : data

  return (
    <section className="cards">
      {filteredData.map((property, index) => (
        <div key={index} className="card">
          <img src={property.image} alt={property.description} />
          <div className="text">
            <h3>{property.city}</h3>
            <p>{property.description}</p>
            <p className="price">{property.price} Eur</p>
          </div>
        </div>
      ))}
      {filteredData.length === 0 && <p>No properties found for the selected city.</p>}
    </section>
  )
}

export default Cards
