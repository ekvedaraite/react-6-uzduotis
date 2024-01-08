const FormField = ({ label, type, name, placeholder, value, onChange, error }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className="error">{error}</p>
    </>
  )
}

export default FormField
