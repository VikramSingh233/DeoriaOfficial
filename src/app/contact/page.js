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
    
    // Clear error when user starts typing
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        contactNo: '',
        reason: '',
        description: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        <Sidebar />
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="text-[#0ea5e9]">Deoria Official</span>
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
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="bg-[#1e293b] rounded-2xl p-8 border border-[#334155] shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-[#0ea5e9]">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-[#0ea5e9]/10 rounded-full">
                  <FiMapPin className="text-[#0ea5e9] text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                  <p className="text-[#94a3b8]">
                    District Administration Office,<br />
                    Civil Lines, Deoria,<br />
                    Uttar Pradesh - 274001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-[#0ea5e9]/10 rounded-full">
                  <FiPhone className="text-[#0ea5e9] text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                  <p className="text-[#94a3b8]">
                    +91 987 654 3210<br />
                    +91 123 456 7890
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-[#0ea5e9]/10 rounded-full">
                  <FiMail className="text-[#0ea5e9] text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email Address</h3>
                  <p className="text-[#94a3b8]">
                    contact@deoriaofficial.com<br />
                    support@deoriaofficial.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="bg-[#0f172a] rounded-lg p-4 border border-[#334155]">
                <div className="flex justify-between py-2 border-b border-[#334155]">
                  <span>Monday - Friday</span>
                  <span className="text-[#0ea5e9]">9:00 AM - 6:00 PM</span>
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
            className="bg-[#1e293b] rounded-2xl p-8 border border-[#334155] shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-[#0ea5e9]">Send Us a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex justify-center mb-6">
                  <FiCheckCircle className="text-[#10b981] text-6xl" />
                </div>
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border ${
                      errors.name ? 'border-red-500' : 'border-[#334155]'
                    } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center">
                      <FiMail className="mr-2 text-[#0ea5e9]" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border ${
                        errors.email ? 'border-red-500' : 'border-[#334155]'
                      } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="contactNo" className="block text-sm font-medium mb-2 flex items-center">
                      <FiPhone className="mr-2 text-[#0ea5e9]" /> Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contactNo"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border ${
                        errors.contactNo ? 'border-red-500' : 'border-[#334155]'
                      } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]`}
                      placeholder="Enter your phone number"
                    />
                    {errors.contactNo && (
                      <p className="mt-1 text-red-500 text-sm">{errors.contactNo}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2 flex items-center">
                    <FiMessageSquare className="mr-2 text-[#0ea5e9]" /> Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border ${
                      errors.reason ? 'border-red-500' : 'border-[#334155]'
                    } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]`}
                  >
                    <option value="">Select a reason</option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                  {errors.reason && (
                    <p className="mt-1 text-red-500 text-sm">{errors.reason}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2 flex items-center">
                    <FiMessageSquare className="mr-2 text-[#0ea5e9]" /> Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg bg-[#0f172a] border ${
                      errors.description ? 'border-red-500' : 'border-[#334155]'
                    } text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]`}
                    placeholder="Describe your inquiry or message"
                  ></textarea>
                  {errors.description && (
                    <p className="mt-1 text-red-500 text-sm">{errors.description}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-[#0ea5e9]/70 cursor-not-allowed'
                        : 'bg-[#0ea5e9] hover:bg-[#0284c7]'
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div 
          className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-xl border border-[#334155]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6 border-b border-[#334155]">
            <h2 className="text-xl font-bold flex items-center">
              <FiMapPin className="mr-2 text-[#0ea5e9]" /> Our Location on Map
            </h2>
          </div>
          <div className="h-96 w-full bg-gray-800 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <p className="text-[#94a3b8]">Interactive Map Here</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}