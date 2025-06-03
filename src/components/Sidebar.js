'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiHome, FiShoppingBag, FiMap, FiHeadphones, FiMail,FiBook,FiShare2  } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const menuItems = [
    { name: '/', icon: <FiHome size={24} />, label: 'Home' },
    { name: 'history', icon: <FiBook size={24} />, label: 'History' },
    { name: 'shops', icon: <FiShoppingBag size={24} />, label: 'Shops' },
    { name: 'places', icon: <FiMap size={24} />, label: 'Places' },
    { name: 'podcasts', icon: <FiHeadphones size={24} />, label: 'Podcast' },
    { name: 'contact', icon: <FiMail size={24} />, label: 'Contact' },
    { name: 'socialmedia', icon: <FiShare2  size={24} />, label: 'Social Media' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 left-1 z-50 bg-[#25282F] p-3 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-0.5 bg-[#fffaf4] mb-1.5"></div>
        <div className="w-6 h-0.5 bg-[#fffaf4] mb-1.5"></div>
        <div className="w-6 h-0.5 bg-[#fffaf4]"></div>
      </motion.button>

      {/* Sidebar */}
      <motion.div 
        className={`fixed top-0 left-0 h-full bg-[#25282F] border-r border-[#3a3d45] z-40 flex flex-col py-6 transition-all duration-300 ${
          isOpen ? 'w-56' : 'w-0 lg:w-24'
        } overflow-hidden`}
        initial={{ width: 0 }}
        animate={{ width: isOpen ? 256 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 mb-10">
          <div className=" rounded-xl w-16 h-16" />
        </div>
        
        <div className="flex flex-col space-y-7">
          {menuItems.map((item) => (
            <motion.button
              key={item.name}
              className={`flex items-center py-3 px-4 mx-4 rounded-lg group ${
                router.pathname === `/${item.name}` 
                  ? 'bg-[#ff7e5f] text-[#1C1F24]' 
                  : 'text-[#c5c1b8] hover:bg-[#2e3138]'
              } transition-colors`}
              onClick={() => router.push(`/${item.name}`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mr-4">{item.icon}</div>
              <motion.span 
                className="font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </div>
        
        {/* <div className="mt-auto px-4">
          <div className="h-px bg-[#3a3d45] my-6"></div>
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
            <motion.div
              className="ml-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-[#c5c1b8]">johndoe@example.com</p>
            </motion.div>
          </div>
        </div> */}
      </motion.div>
    </>
  );
};

export default Sidebar;