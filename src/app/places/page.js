// app/placess/page.js
'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiPhone, FiMapPin, FiStar, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
  import { useEffect } from 'react';
export default function placesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
const [placessByCategory, setplacessByCategory] = useState({});
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




useEffect(() => {
  const fetchplaces = async () => {
    try {
    const res = await fetch('/api/getbestplaces');
const data = await res.json();

if (!data.places || !Array.isArray(data.places)) {
  console.error("Invalid places data", data);
  return;
}

const grouped = data.places.reduce((acc, places) => {
  const cat = places.category;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(places);
  return acc;
}, {});

      console.log("Grouped placess by category:", grouped);
      setplacessByCategory(grouped);
    } catch (err) {
      console.error('Error fetching placess:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchplaces();
}, []);


  // Filter placess based on active category and search query
const filteredCategories = Object.entries(placessByCategory)
  .filter(([categoryId, places]) => 
    (activeCategory === 'all' || categoryId === activeCategory) &&
    (searchQuery === '' || 
     places.some(places => 
       places.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       categoryId.toLowerCase().includes(searchQuery.toLowerCase())
     )
    )
  );

  if (loading) {
  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4] flex justify-center items-center">
      <p>Loading places...</p>
    </div>
  )
}



  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4]">
          <Sidebar />
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dd7358]/80 to-[#1C1F24]/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/places-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore <span className="text-[#dd7358]">Deoria's</span> Attractions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover temples, parks, historical sites, and more in beautiful Deoria
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400 text-xl" />
              </div>
              <input
                type="text"
                placeholder="Search placess, categories..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#25282F] border border-[#3a3e46] text-white focus:outline-none focus:ring-2 focus:ring-[#dd7358]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select 
                className="w-full bg-[#25282F] border border-[#3a3e46] text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd7358]"
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
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#dd7358] text-white'
                    : 'bg-[#25282F] hover:bg-[#3a3e46]'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* placess by Category */}
        <div className="space-y-16">
          {filteredCategories.map(([categoryId, placess]) => {
            const category = categories.find(cat => cat.id === categoryId);
            return (
              <motion.section 
                key={categoryId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                    <span className="mr-3">{category?.icon}</span>
                    {category?.name}
                  </h2>
               
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {placess.map((places) => (
                    <motion.div
                     key={places.id + places.name}
                      className="bg-[#25282F] rounded-xl overflow-hidden shadow-lg border border-[#3a3e46] hover:border-[#dd7358]/50 transition-all"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-40 bg-gray-700 relative">
                        <div className="absolute top-2 right-2 bg-[#dd7358] text-white px-2 py-1 rounded-md flex items-center text-sm">
                          <FiStar className="mr-1" /> {places.rating}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{places.name}</h3>
                        <div className="flex items-center text-[#c5c1b8] text-sm mb-2">
                          <FiMapPin className="mr-2 " />
                          <span>{places.location}</span>
                        
                        </div>
                        <p className="text-[#dd7358] text-sm mb-3">Best for: {places.bestFor}</p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <FiPhone className="mr-2 text-[#dd7358]" />
                            <span>{places.contactNo}</span>
                          </div>
                          <button className="text-[#dd7358] hover:underline text-sm">
                            Directions
                          </button>
                    
                          
                        </div>
  <div 
  onClick={() => router.push(places.watchExperience)} 
  className="flex items-center mt-3 justify-between text-gray-100 font-bold cursor-pointer hover:underline  text-center"
>
  Watch Experience
</div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Featured placess Banner */}
        <div className="mt-20 mb-16 bg-gradient-to-r from-[#dd7358] to-[#c45a40] rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">List Your Business on Deoria Official</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Get discovered by thousands of customers in Deoria. Join our platform to showcase your places and reach more customers.
          </p>
          <button className="bg-white text-[#dd7358] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Register Your places
          </button>
        </div>
      </div>
    </div>
  );
}