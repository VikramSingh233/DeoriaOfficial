'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const FeatureBox = ({ title, description, icon, href, delay = 0 }) => {
  return (
    <motion.div
      className="bg-[#25282F] border border-[#3a3d45] rounded-2xl p-6 shadow-2xl hover:shadow-xl transition-shadow cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Link href={href} passHref>
        <div>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] p-3 rounded-lg">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
          <p className="text-[#c5c1b8] text-center">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureBox;