// components/Contact.jsx
import React, { useState } from 'react';

const ContactInfoItem = ({ icon, title, value }) => (
  <div className="flex items-start">
    <div className="bg-blue-100 p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const FormInput = ({ id, name, label, type = 'text', value, onChange, placeholder, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const FormTextarea = ({ id, name, label, value, onChange, placeholder, required = false, rows = 5 }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      required={required}
    ></textarea>
  </div>
);

const contactDetails = [
  { icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>, title: 'Email', value: 'aryanraghuvanshi91@gmail.com' },
  { icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>, title: 'Phone', value: '+91 8875987224' },
  { icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>, title: 'Jaipur,Rajasthan', value: 'Available for remote work' }
];

const formInputs = [
  { id: 'firstName', name: 'firstName', label: 'First Name', placeholder: 'Your Name' },
  { id: 'lastName', name: 'lastName', label: 'Last Name', placeholder: 'Last Name' },
  { id: 'email', name: 'email', label: 'Email', type: 'email', placeholder: 'exanpmle@example.com' },
  { id: 'subject', name: 'subject', label: 'Subject', placeholder: 'Project inquiry' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Let's discuss your next project or opportunity
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <ContactInfoItem key={index} {...detail} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              <p className="text-gray-600 mb-6">Send me a message and I'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {formInputs.slice(0, 2).map(input => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={formData[input.name]}
                      onChange={handleChange}
                      required
                    />
                  ))}
                </div>
                
                {formInputs.slice(2).map(input => (
                  <div className="mb-6" key={input.id}>
                    <FormInput
                      {...input}
                      value={formData[input.name]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}
                
                <div className="mb-6">
                  <FormTextarea
                    id="message"
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;