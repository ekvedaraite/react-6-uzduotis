import Nav from '../components/Nav';
import Header from '../components/Header';
import PropertyForm from './PropertyForm';

const AddPropertyPage = ({ property, errors, handleInputChange, handleSubmit }) => {
  return (
    <>
      <Header title="Add your property for sale" subtitle="Yes, you can sell where you live and cash!" />
      <Nav />
      <main id="add">
        <PropertyForm
          property={property}
          errors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  )
}

export default AddPropertyPage
