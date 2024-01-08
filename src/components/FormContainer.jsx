import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPropertyPage from './AddPropertyPage';

const FormContainer = ({ fetchData }) => {
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    image: '',
    price: '',
    description: '',
    city: '',
  })

  const [errors, setErrors] = useState({
    image: '',
    price: '',
    description: '',
    city: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      image: '',
      price: '',
      description: '',
      city: '',
    }

    if (!property.image.trim()) {
        valid = false
        newErrors.image = 'Image URL is required.'
      }
  
      if (!property.price.trim()) {
        valid = false
        newErrors.price = 'Price is required.'
      } else if (isNaN(property.price) || +property.price <= 0) {
        valid = false
        newErrors.price = 'Please enter a valid positive number for the price.'
      }
  
      if (!property.description.trim()) {
        valid = false
        newErrors.description = 'Description is required.'
      }
  
      if (!property.city.trim()) {
        valid = false
        newErrors.city = 'City is required.'
      }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!property.image || !property.price || !property.description || !property.city) {
      alert('Fill in all fields.')
      return
    }

    if (!validateForm()) {
      return
    }

    try {
      const response = await fetch('https://robust-safe-crafter.glitch.me/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      })

      if (response.ok) {
        alert('Property added successfully!')
        fetchData();
        navigate('/');
      } else {
        alert('Failed to add property')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <AddPropertyPage
      property={property}
      errors={errors}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default FormContainer
