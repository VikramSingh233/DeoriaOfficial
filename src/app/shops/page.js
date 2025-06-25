// app/shops/page.js
'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiSearch, FiPhone, FiMapPin, FiStar, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function ShopPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [shopsByCategory, setShopsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'veg', name: 'Vegetarian', icon: '🥗' },
    { id: 'nonveg', name: 'Non-Veg', icon: '🍗' },
    { id: 'hotel', name: 'Hotels', icon: '🏨' },
    { id: 'barber', name: 'Barbers', icon: '💈' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'clothing', name: 'Clothing', icon: '👕' },
    { id: 'grocery', name: 'Grocery', icon: '🛒' },
    { id: 'medical', name: 'Medical', icon: '💊' },
  ];

  const convertDriveUrlToPreview = (url) => {
    const match = url?.match(/\/file\/d\/([^/]+)\//);
    return match?.[1] ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
  };

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await fetch('/api/getbestshops');
        const data = await res.json();

        if (!data.shops || !Array.isArray(data.shops)) {
          console.error("Invalid shop data", data);
          return;
        }

        const grouped = data.shops.reduce((acc, shop) => {
          const cat = shop.category;
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(shop);
          return acc;
        }, {});

        setShopsByCategory(grouped);
      } catch (err) {
        console.error('Error fetching shops:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const filteredCategories = Object.entries(shopsByCategory)
    .filter(([categoryId, shops]) => 
      (activeCategory === 'all' || categoryId === activeCategory) &&
      (searchQuery === '' || 
        shops.some(shop => 
          shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          categoryId.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d0f14] to-[#1a1d24] text-[#fffaf4] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#dd7358] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p>Loading shops...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0f14] to-[#1a1d24] text-[#fffaf4]">
      <Sidebar />
      
      {/* 3D Hero Section */}
      <div className="relative h-80 md:h-[30rem] overflow-hidden">
        <div className="absolute inset-0">
          {/* 3D Background Elements */}
          <div className="absolute top-20 left-1/4 w-48 h-48 bg-[#dd7358] rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-[#5d8aa8] rounded-full mix-blend-soft-light opacity-15 blur-3xl"></div>
          
          {/* Floating 3D Shapes */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-12 h-12 bg-[#dd7358] rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/3 w-8 h-8 bg-[#5d8aa8] rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#dd7358]/10 to-[#1a1d24] z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff9e7d] to-[#ffd8c9]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Explore Shops in <span className="text-[#dd7358]">Deoria</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl text-[#c5c1b8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover the best local businesses in our district
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-30">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <motion.div 
              className="relative w-full md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-[#c5c1b8] text-xl" />
              </div>
              <input
                type="text"
                placeholder="Search shops, categories..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#25282fcc] backdrop-blur-sm border border-[#3a3e4680] text-white focus:outline-none focus:ring-2 focus:ring-[#dd7358] shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <select 
                className="w-full bg-[#25282fcc] backdrop-blur-sm border border-[#3a3e4680] text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd7358] shadow-lg"
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

          {/* 3D Category Tabs */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center px-5 py-3 rounded-xl transition-all shadow-lg transform ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#dd7358] to-[#c45a40] text-white shadow-[#dd735850]'
                    : 'bg-[#25282fcc] backdrop-blur-sm border border-[#3a3e4633] hover:bg-[#3a3e4680]'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: activeCategory !== category.id 
                    ? '0 10px 25px rgba(221, 115, 88, 0.3)' 
                    : '0 10px 25px rgba(221, 115, 88, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Shops by Category - 3D Cards */}
        <div className="space-y-16">
          {filteredCategories.map(([categoryId, shops]) => {
            const category = categories.find(cat => cat.id === categoryId);
            return (
              <motion.section 
                key={categoryId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                    <span className="mr-3 text-3xl">{category?.icon}</span>
                    <span className="bg-gradient-to-r from-[#ff9e7d] to-[#ffd8c9] text-transparent bg-clip-text">
                      {category?.name}
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {shops.map((shop) => (
                    <motion.div
                      key={`${shop.id ?? ''}-${shop.name}`}
                      className="bg-[#25282fcc] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#3a3e4633] shadow-2xl transform transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(221,115,88,0.25)]"
                      whileHover={{ 
                        y: -15,
                        scale: 1.03,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="h-48 relative overflow-hidden">
                        <iframe
                          src={convertDriveUrlToPreview(shop.image)}
                          className="absolute top-0 left-0 w-full h-full pointer-events-none"
                          allow="autoplay"
                          frameBorder="0"
                          scrolling="no"
                        />
                        <div className="absolute top-3 left-3 bg-[#dd7358] text-white px-3 py-1 rounded-lg flex items-center text-sm shadow-lg">
                          <FiStar className="mr-1" /> {shop.rating}
                        </div>
                        
                        {/* History Icon */}
                        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                          <img 
                            src="https://tse2.mm.bing.net/th?id=OIP.r2uSGypsy1AGBlqHXPRcYQHaHa&pid=Api&P=0&h=180" 
                            alt="History" 
                            className="w-6 h-6"
                          />
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="font-bold text-xl mb-2 text-white">{shop.name}</h3>
                        <div className="flex items-center text-[#c5c1b8] text-sm mb-3">
                          <FiMapPin className="mr-2 text-[#dd7358]" />
                          <span>{shop.location}</span>
                        </div>
                        <p className="text-[#ffb59e] text-sm mb-4">Best for: {shop.bestFor}</p>
                        
                        <div className="flex justify-between items-center mt-4 border-t border-[#3a3e4620] pt-4">
                          <div className="flex items-center">
                            <FiPhone className="mr-2 text-[#dd7358]" />
                            <span>{shop.contactNo}</span>
                          </div>
                          <button 
                            className="text-[#dd7358] hover:text-[#ff9e7d] transition-colors text-sm font-medium"
                            onClick={() => router.push(shop.watchExperience)}
                          >
                            <div className="flex items-center">
                              <span>Watch Experience</span>
                              <FiChevronRight className="ml-1" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* 3D CTA Banner */}
        <motion.div 
          className="mt-20 mb-16 bg-gradient-to-r from-[#dd7358] to-[#c45a40] rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Floating elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">List Your Business on Deoria Official</h2>
          <p className="max-w-2xl mx-auto mb-6 relative z-10">
            Get discovered by thousands of customers in Deoria. Join our platform to showcase your shop and reach more customers.
          </p>
          <motion.button 
            className="bg-white text-[#dd7358] font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Your Shop
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}