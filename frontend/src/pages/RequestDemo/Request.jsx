import React, { useState } from 'react';
import axios from 'axios';
import './Request.css';

const Request = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    businessName: '',
    websiteUrl: '',
    businessType: '',
    schedulingPlatform: '',
    location: '',
    phone: '',
    marketingConsent: false,
    phoneCode: '+1'
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      marketingConsent: checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send API request using axios
      const response = await axios.post('http://localhost:5000/api/demo/dem', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError('Error submitting form. Please try again.');
      console.log(err);
      setMessage('');
    }
  };

  return (
    <div className="request-container">
      <h2>Learn more about how ZoneBook can <span className="highlight">grow</span> your business</h2>
      <p>List your fitness studio, gym, salon or spa on ZoneBook for free to start earning more today.</p>
      
      <div className="form-container">
        <h3>Ready to grow your business?</h3>
        <p>Fill out the form below to see what ZoneBook can do for your company.</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email*" 
            required 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          
          <div className="name-fields">
            <input 
              type="text" 
              placeholder="First name*" 
              required 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              placeholder="Last name*" 
              required 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </div>

          <input 
            type="text" 
            placeholder="Business name*" 
            required 
            name="businessName" 
            value={formData.businessName} 
            onChange={handleChange} 
          />

          <input 
            type="url" 
            placeholder="Website URL*" 
            required 
            name="websiteUrl" 
            value={formData.websiteUrl} 
            onChange={handleChange} 
          />
          
          <select 
            required 
            name="businessType" 
            value={formData.businessType} 
            onChange={handleChange}
          >
            <option value="" disabled>Business type*</option>
            <option value="gym">Gym</option>
            <option value="studio">Studio</option>
            <option value="salon">Salon</option>
            <option value="spa">Spa</option>
          </select>

          <select 
            required 
            name="schedulingPlatform" 
            value={formData.schedulingPlatform} 
            onChange={handleChange}
          >
            <option value="" disabled>What is your current scheduling platform?</option>
            <option value="none">None</option>
            <option value="mindbody">Mindbody</option>
            <option value="booker">Booker</option>
          </select>

          <select 
            required 
            name="location" 
            value={formData.location} 
            onChange={handleChange}
          >
            <option value="" disabled>Location*</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>

          <div className="phone-field">
            <select 
              className="country-code" 
              name="phoneCode" 
              value={formData.phoneCode} 
              onChange={handleChange}
            >
              <option value="+1">+1 United States</option>
              <option value="+44">+44 United Kingdom</option>
              <option value="+91">+91 India</option>
            </select>
            <input 
              type="text" 
              placeholder="Phone*" 
              required 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>

          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="marketing" 
              checked={formData.marketingConsent} 
              onChange={handleCheckboxChange} 
            />
            <label htmlFor="marketing">
              I agree to receive marketing and other communications from ClassPass, Mindbody, and their affiliates*
            </label>
          </div>

          <p className="disclaimer">
            You can unsubscribe from these communications at any time. For more information, please review our Terms of Use and Privacy Policy.
          </p>

          <button className="request-button" type="submit">Request a demo</button>
        </form>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Request;
