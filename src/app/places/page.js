'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiSearch, FiPhone, FiMapPin, FiStar, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function PlacesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [placessByCategory, setPlacesByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  // places categories
  const categories = [
    { id: 'temple', name: 'Temples', icon: '🛕' },
    { id: 'park', name: 'Parks', icon: '🌳' },
    { id: 'historical', name: 'Historical Sites', icon: '🏺' },
    { id: 'waterpark', name: 'Water Parks', icon: '💧' },
    { id: 'lake', name: 'Lakes & Rivers', icon: '🏞️' },
    { id: 'museum', name: 'Museums', icon: '🏛️' },
    { id: 'garden', name: 'Gardens', icon: '🌷' },
    { id: 'other', name: 'Other Attractions', icon: '📍' },
  ];

  const convertDriveUrlToPreview = (url) => {
    const match = url?.match(/\/file\/d\/([^/]+)\//);
    return match?.[1] ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await fetch('/api/getbestplaces');
        const data = await res.json();

        if (!data.places || !Array.isArray(data.places)) {
          console.error("Invalid places data", data);
          return;
        }

        const grouped = data.places.reduce((acc, place) => {
          const cat = place.category;
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(place);
          return acc;
        }, {});

        setPlacesByCategory(grouped);
      } catch (err) {
        console.error('Error fetching places:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1C1F24] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-[#dd7358] border-r-4 border-l-4 border-b-4 border-transparent rounded-full"
        />
      </div>
    );
  }

  // Filter places based on active category and search query
  const filteredCategories = Object.entries(placessByCategory)
    .filter(([categoryId, places]) => 
      (activeCategory === 'all' || categoryId === activeCategory) &&
      (searchQuery === '' || 
       places.some(place => 
         place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         categoryId.toLowerCase().includes(searchQuery.toLowerCase())
       )
      )
    );

  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4] overflow-x-hidden">
      <Sidebar />

      {/* Hero Section with 3D effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('/places-bg.jpg')] bg-cover bg-center opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F24] via-[#1C1F24]/90 to-transparent z-10"></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
          <div className="flex flex-col items-center mb-8">
            <motion.img 
              src="https://tse2.mm.bing.net/th?id=OIP.0TXKcI8cPvz5yJCUPav_aAHaGK&pid=Api&P=0&h=180" 
              alt="Places Icon"
              className="w-24 h-24 mb-6 rounded-full border-4 border-[#dd7358] shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore <span className="text-[#dd7358]">Deoria's</span> Attractions
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-[#dd7358] mb-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl text-[#c5c1b8] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover temples, parks, historical sites, and more in beautiful Deoria
          </motion.p>
          
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-[#dd7358] rounded-lg blur opacity-75"></div>
              <button 
                onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                className="relative px-6 py-3 bg-[#1C1F24] rounded-lg font-medium hover:bg-[#25282F] transition-all flex items-center"
              >
                Explore Places <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating 3D elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#dd7358]/20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-[#dd7358]/10 border border-[#dd7358]/30"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <motion.div 
              className="relative w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400 text-xl" />
              </div>
              <input
                type="text"
                placeholder="Search places, categories..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#25282F] border border-[#3a3e46] text-white focus:outline-none focus:ring-2 focus:ring-[#dd7358] shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <select 
                className="w-full bg-[#25282F] border border-[#3a3e46] text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd7358] shadow-lg"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full transition-all transform-style-3d ${
                  activeCategory === category.id
                    ? 'bg-[#dd7358] text-white shadow-lg'
                    : 'bg-[#25282F] hover:bg-[#3a3e46] shadow-md'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Places by Category */}
        <div className="space-y-16">
          {filteredCategories.map(([categoryId, places]) => {
            const category = categories.find(cat => cat.id === categoryId);
            return (
              <motion.section 
                key={categoryId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="perspective-1000"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                    <span className="mr-3 text-3xl">{category?.icon}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category?.name}
                    </motion.span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {places.map((place) => (
                    <motion.div
                      key={place.id + place.name}
                      className="bg-[#25282F] rounded-xl overflow-hidden shadow-2xl border border-[#3a3e46] hover:border-[#dd7358]/50 transition-all transform-style-3d w-72"
                      initial={{ opacity: 0, y: 20, rotateY: -5 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ 
                        y: -8,
                        rotateY: 3,
                        boxShadow: '0 20px 25px -5px rgba(221,115,88,0.3)'
                      }}
                    >
                      <div className="h-48  relative overflow-hidden group">
                        <iframe
                          src={convertDriveUrlToPreview(place.image)}
                          className=" object-cover h-full pointer-events-none"
                         
                        />
                        <div className="absolute top-2 right-2 bg-[#dd7358] text-white px-2 py-1 rounded-md flex items-center text-sm shadow-lg">
                          <FiStar className="mr-1" /> {place.rating}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                        <div className="flex items-center text-[#c5c1b8] text-sm mb-3">
                          <FiMapPin className="mr-2 text-[#dd7358]" />
                          <span>{place.location}</span>
                        </div>
                        <p className="text-[#dd7358] text-sm mb-3">Best for: {place.bestFor}</p>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <FiPhone className="mr-2 text-[#dd7358]" />
                            <span>{place.contactNo}</span>
                          </div>
                        </div>
                        
                        {place.watchExperience && 
                          <motion.div 
                            onClick={() => router.push(place.watchExperience)} 
                            className="flex items-center mt-3 justify-between text-gray-100 font-bold cursor-pointer hover:text-[#dd7358] transition-colors group"
                            whileHover={{ x: 5 }}
                          >
                            Watch Experience
                            <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        }
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Featured places Banner */}
        <motion.div 
          className="mt-20 mb-16 bg-gradient-to-r from-[#dd7358] to-[#c45a40] rounded-2xl p-8 text-center transform-style-3d"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -5,
            rotateY: 1,
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)'
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">List Your Business on Deoria Official</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Get discovered by thousands of customers in Deoria. Join our platform to showcase your place and reach more customers.
          </p>
          <motion.button 
            onClick={() => router.push('/contact')} 
            className="bg-white text-[#dd7358] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Your Place
          </motion.button>
        </motion.div>
      </div>

      {/* Floating places icon at bottom */}
      <motion.div 
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#25282F] border-2 border-[#dd7358] flex items-center justify-center shadow-lg cursor-pointer z-30"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <img 
          src="https://tse2.mm.bing.net/th?id=OIP.0TXKcI8cPvz5yJCUPav_aAHaGK&pid=Api&P=0&h=180" 
          alt="Places Icon" 
          className="w-10 h-10"
        />
      </motion.div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .shadow-3d {
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5), 
                      0 10px 30px -10px rgba(221,115,88,0.2);
        }
      `}</style>
    </div>
  );
}