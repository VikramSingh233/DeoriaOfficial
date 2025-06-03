// app/shops/page.js
'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiPhone, FiMapPin, FiStar, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
export default function ShopPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Shop categories
  const categories = [
    { id: 'veg', name: 'Vegetarian Restaurants', icon: '🥗' },
    { id: 'nonveg', name: 'Non-Veg Restaurants', icon: '🍗' },
    { id: 'hotel', name: 'Hotels & Lodging', icon: '🏨' },
    { id: 'barber', name: 'Barber Shops', icon: '💈' },
    { id: 'electronics', name: 'Electronic Shops', icon: '📱' },
    { id: 'clothing', name: 'Clothing Stores', icon: '👕' },
    { id: 'grocery', name: 'Grocery Stores', icon: '🛒' },
    { id: 'medical', name: 'Medical Stores', icon: '💊' },
  ];

  // Generate dummy shop data
  const generateShops = (category, count = 5) => {
    const shops = [];
    const categoryNames = {
      veg: ['Green Leaf Restaurant', 'Pure Veg Delight', 'Sattvik Bhojanalaya', 'Annapurna Veg Corner', 'Shree Krishna Veg Plaza'],
      nonveg: ['Chicken Paradise', 'Meat Master', 'Royal Non-Veg House', 'Spicy Grill Corner', 'Mutton Delight'],
      hotel: ['Deoria Grand', 'Comfort Inn', 'River View Lodge', 'City Center Hotel', 'Travelers Rest'],
      barber: ['Style Cuts', 'Gentleman Salon', 'Hair Masters', 'Trendy Looks', 'Royal Barber'],
      electronics: ['Electro World', 'Gadget Hub', 'Tech Palace', 'Digital Point', 'Smart Devices'],
      clothing: ['Fashion Hub', 'Trendy Threads', 'Ethnic Wear Center', 'Denim Palace', 'Silk & Sarees'],
      grocery: ['Daily Needs Mart', 'Super Saver Store', 'Fresh & Fine Grocers', 'Family Food Center', 'Local Bazaar'],
      medical: ['Life Care Pharmacy', 'Medi Quick', 'Health Plus', '24x7 Medicals', 'Apollo Drug Store'],
    };

    const locations = [
      'Near Bus Stand, Deoria',
      'Main Market, Deoria',
      'Raja Bazaar, Deoria',
      'Civil Lines, Deoria',
      'Station Road, Deoria',
      'Gandhi Chowk, Deoria'
    ];

    const specialties = {
      veg: ['Best Thali in Town', 'Authentic Bhojpuri Cuisine', 'Pure Desi Ghee Dishes', 'Fresh Organic Ingredients', 'Famous Litti Chokha'],
      nonveg: ['Special Mutton Curry', 'Tandoori Delights', 'Butter Chicken Special', 'Fresh Seafood', 'Spicy Kebabs'],
      hotel: ['AC Rooms Available', 'Free WiFi', '24/7 Reception', 'Restaurant on Premises', 'Travel Assistance'],
      barber: ['Beard Styling', 'Hair Coloring', 'Professional Stylists', 'Head Massage', 'Quick Service'],
      electronics: ['Mobile Repair Service', 'Genuine Accessories', 'Home Appliances', 'Competitive Prices', 'Expert Advice'],
      clothing: ['Latest Fashion Trends', 'Traditional Outfits', 'Custom Tailoring', 'Discounts on Bulk', 'Festival Specials'],
      grocery: ['Fresh Vegetables', 'Organic Products', 'Daily Essentials', 'Home Delivery', 'Competitive Prices'],
      medical: ['24/7 Availability', 'All Medicines Available', 'Doctor Consultation', 'Home Delivery', 'Discounts for Regulars'],
    };

    for (let i = 0; i < count; i++) {
      shops.push({
        id: `${category}-${i+1}`,
        name: categoryNames[category][i],
        location: locations[Math.floor(Math.random() * locations.length)],
        bestThing: specialties[category][i],
        contact: `9${Math.floor(10000000 + Math.random() * 90000000)}`,
        rating: (4 + Math.random()).toFixed(1),
        image: `/shop-${Math.floor(Math.random() * 5) + 1}.jpg`, // Placeholder image
      });
    }
    
    return shops;
  };

  // All shops data
  const allShops = {
    veg: generateShops('veg'),
    nonveg: generateShops('nonveg'),
    hotel: generateShops('hotel'),
    barber: generateShops('barber'),
    electronics: generateShops('electronics'),
    clothing: generateShops('clothing'),
    grocery: generateShops('grocery'),
    medical: generateShops('medical'),
  };

  // Filter shops based on active category and search query
  const filteredCategories = Object.entries(allShops)
    .filter(([categoryId]) => 
      activeCategory === 'all' || categoryId === activeCategory
    )
    .filter(([categoryId, shops]) => 
      searchQuery === '' || 
      shops.some(shop => 
        shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        categoryId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4]">
          <Sidebar />
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dd7358]/80 to-[#1C1F24]/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/shop-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Shops in <span className="text-[#dd7358]">Deoria</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the best local businesses in Deoria district
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
                placeholder="Search shops, categories..."
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

        {/* Shops by Category */}
        <div className="space-y-16">
          {filteredCategories.map(([categoryId, shops]) => {
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
                  <button 
                    className="text-[#dd7358] hover:underline flex items-center"
                    onClick={() => router.push(`/shops/${categoryId}`)}
                  >
                    View more <FiChevronRight className="ml-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {shops.map((shop) => (
                    <motion.div
                      key={shop.id}
                      className="bg-[#25282F] rounded-xl overflow-hidden shadow-lg border border-[#3a3e46] hover:border-[#dd7358]/50 transition-all"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-40 bg-gray-700 relative">
                        <div className="absolute top-2 right-2 bg-[#dd7358] text-white px-2 py-1 rounded-md flex items-center text-sm">
                          <FiStar className="mr-1" /> {shop.rating}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{shop.name}</h3>
                        <div className="flex items-center text-[#c5c1b8] text-sm mb-2">
                          <FiMapPin className="mr-2" />
                          <span>{shop.location}</span>
                        </div>
                        <p className="text-[#dd7358] text-sm mb-3">Best for: {shop.bestThing}</p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <FiPhone className="mr-2 text-[#dd7358]" />
                            <span>{shop.contact}</span>
                          </div>
                          <button className="text-[#dd7358] hover:underline text-sm">
                            Directions
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

        {/* Featured Shops Banner */}
        <div className="mt-20 mb-16 bg-gradient-to-r from-[#dd7358] to-[#c45a40] rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">List Your Business on Deoria Official</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Get discovered by thousands of customers in Deoria. Join our platform to showcase your shop and reach more customers.
          </p>
          <button className="bg-white text-[#dd7358] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Register Your Shop
          </button>
        </div>
      </div>
    </div>
  );
}