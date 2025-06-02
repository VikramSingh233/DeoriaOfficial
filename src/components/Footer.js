'use client'
// components/Footer.js
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiInstagram, 
  FiFacebook, 
  FiTwitter,
  FiYoutube,
  FiArrowUp
} from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1C1F24] border-t border-[#3a3d45] text-[#fffaf4]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Contact Info */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 bg-[#ff7e5f] mr-3"></span>
              Contact Us
            </motion.h3>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start">
                <FiMail className="text-[#ff7e5f] mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-[#c5c1b8]">contact@deoriaexplorer.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="text-[#ff7e5f] mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-[#c5c1b8]">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMapPin className="text-[#ff7e5f] mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-[#c5c1b8]">Deoria, Uttar Pradesh, India</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 bg-[#ff7e5f] mr-3"></span>
              Quick Links
            </motion.h3>
            
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Home</Link>
              <Link href="#shops" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Shops</Link>
              <Link href="#places" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Places</Link>
              <Link href="#podcast" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Podcasts</Link>
              <Link href="/contact" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Contact</Link>
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">About Us</Link>
            </motion.div>
          </div>
          
          {/* Explore Deoria */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 bg-[#ff7e5f] mr-3"></span>
              Explore Deoria
            </motion.h3>
            
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Local Events</Link>
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Cultural Heritage</Link>
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Historical Sites</Link>
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Food & Cuisine</Link>
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Travel Guides</Link>
              <Link href="#" className="block text-[#c5c1b8] hover:text-[#ff7e5f] transition-colors">Photo Gallery</Link>
            </motion.div>
          </div>
          
          {/* Newsletter */}
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 bg-[#ff7e5f] mr-3"></span>
              Newsletter
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-[#c5c1b8] mb-4">
                Subscribe to our newsletter for the latest updates on Deoria's hidden gems and events.
              </p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-[#25282F] border border-[#3a3d45] rounded-l-lg px-4 py-3 focus:outline-none focus:border-[#ff7e5f]"
                />
                <button className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-6 rounded-r-lg font-medium hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiInstagram size={20} />, name: "Instagram" },
                    { icon: <FiFacebook size={20} />, name: "Facebook" },
                    { icon: <FiTwitter size={20} />, name: "Twitter" },
                    { icon: <FiYoutube size={20} />, name: "YouTube" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="bg-[#25282F] p-3 rounded-full hover:bg-gradient-to-r hover:from-[#ff7e5f] hover:to-[#feb47b] transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-[#3a3d45] pt-8 pb-4 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#c5c1b8] text-sm">
              © {new Date().getFullYear()} Deoria Explorer. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#" className="text-[#c5c1b8] hover:text-[#ff7e5f] text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#c5c1b8] hover:text-[#ff7e5f] text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[#c5c1b8] hover:text-[#ff7e5f] text-sm transition-colors">Cookie Policy</Link>
          </motion.div>
        </div>
      </div>
      
      {/* Back to top button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-3 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;