import React, { useState } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  comments: "",
  email: "",
  agreeToTerms: false,
  age: "",
  favColor: ""
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here if needed
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 col-md-4">
    
      {/* Input fields */}
      <input type="text" name="firstName" className="form-control mb-2" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" className="form-control mb-2" onChange={handleChange} value={formData.lastName} />
      <input type="email" name="email" className="form-control mb-2" onChange={handleChange} value={formData.email} />
      <textarea name="comments" className="form-control mb-2" onChange={handleChange} value={formData.comments} />

      {/* Checkbox */}
      <input type="checkbox" name="agreeToTerms" className="form-check-input mb-3" onChange={handleChange} checked={formData.agreeToTerms} />
      Click

      {/* Radio buttons */}
      {[{ value: "23", label: "Option 1" }, { value: "20", label: "Option 2" }, { value: "18", label: "Option 3" }].map(option => (
        <div className="form-check" key={option.value}>
          <input type="radio" className="form-check-input" name="age" value={option.value} checked={formData.age === option.value} onChange={handleChange} />
          {option.label}
        </div>
      ))}

      {/* Select */}
      <select className="form-select m-2" name="favColor" onChange={handleChange} value={formData.favColor}>
        <option value="">- choose -</option>
        <option value="white">white</option>
        <option value="green">green</option>
        <option value="black">black</option>
      </select>

      {/* Submit button */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default App;
