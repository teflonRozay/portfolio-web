import React, { useState } from 'react';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { name, email, phone, message } = formData;
    const mailtoLink = `mailto:wilsonbanji@yahoo.com?subject=New%20Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0APhone:%20${phone}%0D%0AMessage:%20${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id='ContactForm' className='Olu'>
    <h2 className='me'>Contact Me</h2>
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />
        
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label htmlFor="phone">Phone:</label><br />
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea><br />
        
        <button type="submit">Send Message</button>
      </form>
      <div className='street'>
        <h2>Address</h2>
        <h5>Wilsonbanji@yahoo.com</h5>
        <h5>+234901378390</h5>
      </div>
    </div>
    
    </div>
  );
}

export default ContactForm;
