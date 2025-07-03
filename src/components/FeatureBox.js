'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const FeatureBox = ({ title, description, icon, href, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-[#e2e8f0] shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay, ease: "backOut" }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-6 flex flex-col items-center text-center h-full">
        <div className="w-16 h-16 rounded-full bg-[#dbeafe] flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#1e293b] mb-2">{title}</h3>
        <p className="text-[#4b5563] flex-grow">{description}</p>
        <a 
          href={href}
          className="mt-4 text-[#3b82f6] hover:text-[#1e40af] font-medium"
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
};

export default FeatureBox;