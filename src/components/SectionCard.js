'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const SectionCard = ({ title, description,guest,link,image, delay = 0 }) => {

  
  return (
//     <motion.div
//       className="bg-[#25282F] border border-[#3a3d45] rounded-2xl overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//     >
//       {/* <Image className="bg-gray-200 border-2 border-dashed w-full h-48" /> */}
// <iframe
//   src={image}
//   className="w-full h-60 rounded-xl"
//   allow="autoplay"
  
// />




//       <div className="p-5">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-[#c5c1b8]">{description}</p>
//         <div className="mt-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
//             <span className="text-sm">{guest}</span>
//           </div>
//           {/* <span className="text-sm text-[#ff7e5f]">Read More →</span> */}
//           <a href={link} target="_blank" className="text-sm text-[#ff7e5f]">Watch now</a>
//         </div>
//       </div>
//     </motion.div>


 <motion.div
      className="bg-white rounded-2xl border border-[#e2e8f0] shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -10 }}
    >
      <div className="relative">
        <div className="h-48 bg-gray-200" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden object-fill">
         <iframe
  src={image}
  className="w-full h-60 rounded-xl"
  allow="autoplay"
  
/>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-[#1e293b]">{title}</h3>
        <p className="text-[#4b5563] mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#64748b]">Guest: {guest}</span>
          <a href={link} target='_blank' className="text-[#3b82f6] hover:text-[#1e40af] font-medium">
            Listen Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionCard;