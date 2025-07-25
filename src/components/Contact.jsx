import React, { useState } from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
const MotionNav = motion.contact;
const Contact = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate message success
    setToast({ show: true, message: 'Message sent successfully!', type: 'success' });

    // Hide toast after 3 seconds
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Contact Me</h2>

      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          <label>Name</label>
        </div>

        <div className="form-group">
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          <label>Email</label>
        </div>

        <div className="form-group">
          <textarea name="message" required rows="5" value={formData.message} onChange={handleChange}></textarea>
          <label>Message</label>
        </div>

        <button type="submit" className="submit-btn">
          <Send size={18} /> Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;

