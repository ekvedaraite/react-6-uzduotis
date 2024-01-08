import FormField from './FormField';

const PropertyForm = ({ property, errors, handleInputChange, handleSubmit }) => {
  return (
    <form id="form" onSubmit={handleSubmit}>
      <h3>Add Property</h3>

      <FormField
        label="Img"
        type="text"
        name="image"
        placeholder="https://unsplash.com/"
        value={property.image}
        onChange={handleInputChange}
        error={errors.image}
      />

      <FormField
        label="Price, Eur"
        type="text"
        name="price"
        placeholder="50000"
        value={property.price}
        onChange={handleInputChange}
        error={errors.price}
      />

      <FormField
        label="Description"
        type="textarea"
        name="description"
        placeholder="anything you would like to say?"
        value={property.description}
        onChange={handleInputChange}
        error={errors.description}
      />

      <label htmlFor="cities"></label>
      <select
        id="cities"
        name="city"
        value={property.city}
        onChange={handleInputChange}
      >
        <option value="" disabled>Miestas</option>
        <option value="Vilnius">Vilnius</option>
        <option value="Kaunas">Kaunas</option>
        <option value="Klaipėda">Klaipėda</option>
      </select>
      <p className="error">{errors.city}</p>

      <button type="submit" className="add-property">
        Add Property +
      </button>
    </form>
  )
}

export default PropertyForm
