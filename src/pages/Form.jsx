// Form.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

const Form = ({ fetchData }) => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    image: '',
    price: '',
    description: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://robust-safe-crafter.glitch.me/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });

      if (response.ok) {
        alert('Property added successfully!');
        // Fetch updated data after successful submission
        fetchData();

        // Log a message to confirm that navigate('/') is being called
        console.log('Navigating back to the home page...');

        // Navigate to the home page using useNavigate
        navigate('/');
      } else {
        alert('Failed to add property');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <h1>Add your property for sale</h1>
          <p>Yes, you can sell where you live and cash!</p>
        </div>
      </header>
      <Nav />
      <main id="add">
        <form id="form" onSubmit={handleSubmit}>
          <h3>Add Property</h3>

          <label htmlFor="image">Img (Image URL)</label>
          <input
            id="image"
            type="text"
            name="image"
            placeholder="https://unsplash.com/photos/brown-wooden-framed-yellow-padded-chair-_HqHX3LBN18"
            value={property.image}
            onChange={handleInputChange}
          />

          <label htmlFor="price">Price, Eur</label>
          <input
            id="price"
            type="text"
            name="price"
            placeholder="50000"
            value={property.price}
            onChange={handleInputChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="10"
            name="description"
            placeholder="anything you would like to say?"
            value={property.description}
            onChange={handleInputChange}
          ></textarea>

          <label htmlFor="cities">City</label>
          <select
            id="cities"
            name="city"
            value={property.city}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select a city</option>
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
            <option value="Klaipėda">Klaipėda</option>
          </select>

          <button type="submit" className="add-property">
            Add Property +
          </button>
        </form>
      </main>
    </>
  );
};

export default Form;
