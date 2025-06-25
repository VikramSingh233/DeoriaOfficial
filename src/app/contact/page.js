// app/contact/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    reason: '',
    description: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reasons = [
    'General Inquiry',
    'Business Collaboration',
    'Report an Issue',
    'Feedback/Suggestion',
    'Advertisement',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Invalid contact number (10 digits required)';
    }
    
    if (!formData.reason) {
      newErrors.reason = 'Please select a reason';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description should be at least 20 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        contactNo: '',
        reason: '',
        description: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: error.message });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1120] via-[#0f172a] to-[#0a0e1a] text-white overflow-hidden">
      {/* 3D Floating Background Elements */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#0ea5e9]/10 blur-xl"
            initial={{
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
              x: Math.random() * 100,
              y: Math.random() * 100
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      <Sidebar />
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="text-white">Deoria Official</span>
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-[#cbd5e1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions or feedback? We'd love to hear from you
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="bg-[#1e293b]/40 backdrop-blur-lg rounded-2xl p-8 border border-[#334155]/50 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              rotateY: 3,
              rotateX: 1,
              transition: { duration: 0.3 } 
            }}
          >
            <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee]">Get in Touch</h2>
            
            <div className="space-y-8">
              <motion.div 
                className="flex items-start"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="mr-4 p-3 bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 rounded-full backdrop-blur-sm border border-[#0ea5e9]/20"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FiMapPin className="text-[#0ea5e9] text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                  <p className="text-[#94a3b8]">
                    Deoria,<br />
                    Uttar Pradesh - 274001
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="mr-4 p-3 bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 rounded-full backdrop-blur-sm border border-[#0ea5e9]/20"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <FiPhone className="text-[#0ea5e9] text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                  <p className="text-[#94a3b8]">
                    +91 8840497018<br />
                    +91 7348289229
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="mr-4 p-3 bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 rounded-full backdrop-blur-sm border border-[#0ea5e9]/20"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <FiMail className="text-[#0ea5e9] text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                  <p className="text-[#94a3b8]">
                    support@deoriaofficial.com<br />
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="bg-[#0f172a]/50 backdrop-blur-sm rounded-lg p-4 border border-[#334155]/50">
                <div className="flex justify-between py-2 border-b border-[#334155]/50">
                  <span>Monday - Friday</span>
                  <span className="text-[#0ea5e9]">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Saturday</span>
                  <span className="text-[#0ea5e9]">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-[#1e293b]/40 backdrop-blur-lg rounded-2xl p-8 border border-[#334155]/50 shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              rotateY: -3,
              rotateX: 1,
              transition: { duration: 0.3 } 
            }}
          >
            <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee]">Send Us a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  animate={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <FiCheckCircle className="text-[#10b981] text-6xl" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                <p className="text-[#94a3b8] max-w-md mx-auto">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center">
                    <FiUser className="mr-2 text-[#0ea5e9]" /> Full Name
                  </label>
                  <motion.div whileHover={{ y: -3 }} whileFocus={{ y: -3 }}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a]/50 backdrop-blur-sm border ${
                        errors.name ? 'border-red-500' : 'border-[#334155]/50'
                      } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:shadow-lg`}
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center">
                      <FiMail className="mr-2 text-[#0ea5e9]" /> Email Address
                    </label>
                    <motion.div whileHover={{ y: -3 }} whileFocus={{ y: -3 }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-[#0f172a]/50 backdrop-blur-sm border ${
                          errors.email ? 'border-red-500' : 'border-[#334155]/50'
                        } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:shadow-lg`}
                        placeholder="Enter your email"
                      />
                    </motion.div>
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="contactNo" className="block text-sm font-medium mb-2 flex items-center">
                      <FiPhone className="mr-2 text-[#0ea5e9]" /> Contact Number
                    </label>
                    <motion.div whileHover={{ y: -3 }} whileFocus={{ y: -3 }}>
                      <input
                        type="tel"
                        id="contactNo"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-[#0f172a]/50 backdrop-blur-sm border ${
                          errors.contactNo ? 'border-red-500' : 'border-[#334155]/50'
                        } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:shadow-lg`}
                        placeholder="Enter your phone number"
                      />
                    </motion.div>
                    {errors.contactNo && (
                      <p className="mt-1 text-red-500 text-sm">{errors.contactNo}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2 flex items-center">
                    <FiMessageSquare className="mr-2 text-[#0ea5e9]" /> Reason for Contact
                  </label>
                  <motion.div whileHover={{ y: -3 }} whileFocus={{ y: -3 }}>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a]/50 backdrop-blur-sm border ${
                        errors.reason ? 'border-red-500' : 'border-[#334155]/50'
                      } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:shadow-lg`}
                    >
                      <option value="">Select a reason</option>
                      {reasons.map((reason) => (
                        <option key={reason} value={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                  {errors.reason && (
                    <p className="mt-1 text-red-500 text-sm">{errors.reason}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2 flex items-center">
                    <FiMessageSquare className="mr-2 text-[#0ea5e9]" /> Description
                  </label>
                  <motion.div whileHover={{ y: -3 }} whileFocus={{ y: -3 }}>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a]/50 backdrop-blur-sm border ${
                        errors.description ? 'border-red-500' : 'border-[#334155]/50'
                      } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:shadow-lg`}
                      placeholder="Describe your inquiry or message"
                    ></textarea>
                  </motion.div>
                  {errors.description && (
                    <p className="mt-1 text-red-500 text-sm">{errors.description}</p>
                  )}
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-[#0ea5e9]/70 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] hover:from-[#0284c7] hover:to-[#0ea5e9] shadow-lg'
                    } transition-all relative overflow-hidden`}
                    whileHover={!isSubmitting ? { 
                      y: -3,
                      boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)"
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                        </>
                      )}
                    </span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] opacity-0"
                      animate={{ 
                        opacity: isSubmitting ? 0 : [0, 0.3, 0],
                        x: isSubmitting ? 0 : [-100, 300]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    />
                  </motion.button>
                  {errors.submit && (
                    <p className="mt-2 text-red-500 text-center">{errors.submit}</p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}