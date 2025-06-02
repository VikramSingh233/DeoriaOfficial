'use client'

import { motion } from 'framer-motion';

const SectionCard = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      className="bg-[#25282F] border border-[#3a3d45] rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#c5c1b8]">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
            <span className="text-sm">Author</span>
          </div>
          <span className="text-sm text-[#ff7e5f]">Read More →</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionCard;