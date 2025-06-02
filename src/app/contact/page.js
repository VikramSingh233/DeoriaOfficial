"use client";

// pages/contact.js
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please select a reason';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', reason: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 2000);
    }
  };

  // Animation for page load
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4]">
      <Head>
        <title>Contact Us | Modern Design</title>
        <meta name="description" content="Get in touch with our team" />
      </Head>
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto text-[#c5c1b8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-[#25282F] rounded-2xl p-8 shadow-2xl border border-[#3a3d45]">
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <motion.circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        stroke="#4ade80" 
                        strokeWidth="5" 
                        fill="none"
                        strokeDasharray="283"
                        strokeDashoffset="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1 }}
                      />
                      <motion.path 
                        d="M30,50 L45,65 L70,35" 
                        stroke="#4ade80" 
                        strokeWidth="5" 
                        fill="none"
                        strokeDasharray="60"
                        strokeDashoffset="60"
                        initial={{ strokeDashoffset: 60 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      />
                    </svg>
                  </div>
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.3 }}
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p 
                    className="text-[#c5c1b8]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  >
                    Thank you for reaching out. We'll get back to you shortly.
                  </motion.p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#c5c1b8]">
                        Full Name *
                      </label>
                      <motion.div 
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#1C1F24] rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-[#3a3d45]'
                          } focus:border-[#ff7e5f] focus:outline-none transition-colors`}
                          placeholder="John Doe"
                        />
                      </motion.div>
                      {errors.name && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#c5c1b8]">
                        Contact Number *
                      </label>
                      <motion.div 
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-[#1C1F24] rounded-lg border ${
                            errors.phone ? 'border-red-500' : 'border-[#3a3d45]'
                          } focus:border-[#ff7e5f] focus:outline-none transition-colors`}
                          placeholder="(123) 456-7890"
                        />
                      </motion.div>
                      {errors.phone && (
                        <motion.p 
                          className="text-red-400 text-sm mt-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-[#c5c1b8]">
                      Reason for Contacting *
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[#1C1F24] rounded-lg border ${
                          errors.reason ? 'border-red-500' : 'border-[#3a3d45]'
                        } focus:border-[#ff7e5f] focus:outline-none transition-colors appearance-none`}
                      >
                        <option value="">Select a reason</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Support Request">Support Request</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </motion.div>
                    {errors.reason && (
                      <motion.p 
                        className="text-red-400 text-sm mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.reason}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-medium mb-2 text-[#c5c1b8]">
                      Your Message *
                    </label>
                    <motion.div 
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-3 bg-[#1C1F24] rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-[#3a3d45]'
                        } focus:border-[#ff7e5f] focus:outline-none transition-colors resize-none`}
                        placeholder="Type your message here..."
                      ></textarea>
                    </motion.div>
                    {errors.message && (
                      <motion.p 
                        className="text-red-400 text-sm mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-3 ${
                      isSubmitting 
                        ? 'bg-[#ff7e5f] cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] hover:from-[#feb47b] hover:to-[#ff7e5f]'
                    } transition-all duration-300 shadow-lg hover:shadow-xl`}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-[#25282F] rounded-2xl p-8 h-full shadow-2xl border border-[#3a3d45]">
              <h2 className="text-2xl font-bold mb-8">Other Ways to Reach Us</h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="bg-[#ff7e5f] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-[#c5c1b8]">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="bg-[#ff7e5f] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-[#c5c1b8]">contact@example.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="bg-[#ff7e5f] p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-[#c5c1b8]">
                      123 Innovation Street<br />
                      Tech City, TC 10001<br />
                      United States
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="bg-[#1C1F24] p-3 rounded-full hover:bg-[#ff7e5f] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 100 + 100}px`,
              height: `${Math.random() * 100 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: '#ff7e5f',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;