// import React, { useState } from 'react';
// import axios from 'axios';
// import './Update.css';

// const Update = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         businessEmail: '',
//         companyName: '',
//         agree: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/update/submit', formData);
//             alert('Form submitted successfully!');
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             alert('Failed to submit form.');
//         }
//     };

//     return (
//         <div className="update-container">
//             <div className="update-hero">
//                 <img src="/assets/Update-main.png" alt="Hero" className="hero-image" />
//                 <h1>4 Steps for Communicating a New Compensation Plan to Employees</h1>
//                 <p>Compensation is often a challenging topic to discuss in the workplace...</p>
//             </div>
//             <form className="update-form" onSubmit={handleSubmit}>
//                 <h2>Stay in the loop with email updates</h2>
//                 <div className="input-group">
//                     <input
//                         type="text"
//                         name="firstName"
//                         placeholder="First name"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         name="lastName"
//                         placeholder="Last name"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="input-group">
//                     <input
//                         type="email"
//                         name="businessEmail"
//                         placeholder="Business email"
//                         value={formData.businessEmail}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         name="companyName"
//                         placeholder="Company name"
//                         value={formData.companyName}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <label className="checkbox-group">
//                     <input
//                         type="checkbox"
//                         name="agree"
//                         checked={formData.agree}
//                         onChange={handleChange}
//                     />
//                     I agree to receive marketing and other communications from ZoneBook and its group companies.
//                 </label>
//                 <p className="unsubscribe-text">
//                     You can unsubscribe from these communications at any time. For more information, please review our
//                     <a href="#"> Terms of Use </a> and <a href="#"> Privacy Policy </a>.
//                 </p>
//                 <button type="submit">Submit</button>
//             </form>
//             <div className="case-studies">
//                 <div className="case-study-card">
//                     <img src="/assets/study1.jpg" alt="Case Study 1" />
//                     <p>ZoneBook makes wellness engaging and accessible...</p>
//                 </div>
//                 <div className="case-study-card">
//                     <img src="/assets/study2.jpg" alt="Case Study 2" />
//                     <p>6 Tips to Navigating Corporate Wellness Program Approval...</p>
//                 </div>
//                 <div className="case-study-card">
//                     <img src="/assets/study3.jpg" alt="Case Study 3" />
//                     <p>ZoneBook improves wellness program engagement...</p>
//                 </div>
//                 <div className="case-study-card">
//                     <img src="/assets/study4.jpg" alt="Case Study 4" />
//                     <p>ZoneBook offers flexibility to global consulting firm...</p>
//                 </div>
//                 <div className="case-study-card">
//                     <img src="/assets/study5.jpg" alt="Case Study 5" />
//                     <p>Housing Works transitions to ZoneBook after wellness stipend...</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Update;
