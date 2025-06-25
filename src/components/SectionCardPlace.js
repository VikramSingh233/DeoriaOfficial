'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const SectionCardPlace = ({ title, description,image, delay = 0 }) => {
  return (
    <motion.div
      className="bg-[#25282F] border border-[#3a3d45] rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* <Image className="bg-gray-200 border-2 border-dashed w-full h-48" /> */}
<img
  className="bg-gray-200 border-2 border-dashed w-full h-48"
  src={image || "https://via.placeholder.com/100"}
  alt="Placeholder"
  width={100}
  height={100}
/>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#c5c1b8]">{description}</p>
       
        
      </div>
    </motion.div>
  );
};

export default SectionCardPlace;