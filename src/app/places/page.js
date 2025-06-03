// app/places/page.js
'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiPhone, FiMapPin, FiStar, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
export default function PlacesPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Place categories
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

  // Generate dummy place data
  const generatePlaces = (category, count = 4) => {
    const places = [];
    const categoryNames = {
      temple: ['Chandrika Devi Temple', 'Devi Patan Temple', 'Hanuman Garhi', 'Shiv Mandir', 'Ram Janki Temple'],
      park: ['Gandhi Park', 'Children\'s Park', 'City Central Park', 'Riverside Garden', 'Deoria Eco Park'],
      historical: ['Raja Bazaar Fort Ruins', 'British Era Clock Tower', 'Ancient Stepwell', 'Colonial Courthouse', 'Freedom Fighter Memorial'],
      waterpark: ['Aqua Splash Water Park', 'Deoria Fun World', 'Water Kingdom', 'Monsoon Resort', 'Splashdown Deoria'],
      lake: ['Ramgarh Tal', 'Rapti River Front', 'Deoria Lake', 'Moti Jheel', 'Surya Kund'],
      museum: ['Deoria Heritage Museum', 'Folk Art Gallery', 'Archaeological Museum', 'Textile Museum', 'Agricultural Museum'],
      garden: ['Rose Garden', 'Botanical Garden', 'Butterfly Park', 'Medicinal Plant Garden', 'Municipal Garden'],
      other: ['Deoria Haat', 'Craft Village', 'Sunset Point', 'Adventure Zone', 'Cultural Center'],
    };

    const locations = [
      'Near Bus Stand, Deoria',
      'Main Market, Deoria',
      'Raja Bazaar, Deoria',
      'Civil Lines, Deoria',
      'Station Road, Deoria',
      'Gandhi Chowk, Deoria',
      'Ramgarh Road, Deoria',
      'Rapti River Bank, Deoria'
    ];

    const descriptions = {
      temple: [
        'Ancient temple dedicated to Goddess Chandrika with intricate carvings',
        'One of the 51 Shakti Peethas with significant religious importance',
        'Famous temple complex with panoramic views of the city',
        'Peaceful riverside temple known for its evening aarti',
        'Historic temple with beautiful architecture and spiritual ambiance'
      ],
      park: [
        'Well-maintained park with walking paths and children\'s play area',
        'Green oasis in the city center with musical fountain shows',
        'Riverside park perfect for picnics and evening strolls',
        'Ecological park with diverse flora and nature trails',
        'Family-friendly park with open spaces and recreational facilities'
      ],
      historical: [
        'Remnants of an ancient fort with fascinating history',
        'Iconic colonial-era structure in the heart of the city',
        'Ancient water conservation structure with architectural significance',
        'Heritage building showcasing colonial architecture',
        'Memorial dedicated to local freedom fighters'
      ],
      waterpark: [
        'Exciting water slides and wave pools for all ages',
        'Family entertainment center with water attractions',
        'Large aquatic park with multiple pools and slides',
        'Resort-style water park with accommodation options',
        'Thrilling water rides and lazy river experience'
      ],
      lake: [
        'Serene lake perfect for boating and bird watching',
        'Beautiful riverfront with sunset views',
        'Urban lake with walking trails and picnic spots',
        'Natural spring-fed pond with religious significance',
        'Ancient water reservoir with historical importance'
      ],
      museum: [
        'Showcasing the rich cultural heritage of Eastern UP',
        'Exhibition of traditional crafts and folk art',
        'Collection of archaeological finds from the region',
        'Display of traditional weaving techniques and textiles',
        'Museum highlighting agricultural history and innovations'
      ],
      garden: [
        'Thousands of rose varieties in a beautifully landscaped setting',
        'Educational garden with plant species from across India',
        'Enclosed garden habitat for various butterfly species',
        'Collection of medicinal plants with informational displays',
        'Well-maintained public garden with seasonal flower displays'
      ],
      other: [
        'Traditional market showcasing local crafts and produce',
        'Village preserving traditional crafts and offering workshops',
        'Popular viewpoint for spectacular sunset vistas',
        'Outdoor activity center with zip-lining and rock climbing',
        'Venue for cultural performances and local art exhibitions'
      ],
    };

    const contacts = [
      null,
      null,
      '9876543210',
      '8765432109',
      '7654321098',
      '6543210987',
      '5432109876',
      null
    ];

    for (let i = 0; i < count; i++) {
      places.push({
        id: `${category}-${i+1}`,
        name: categoryNames[category][i],
        location: locations[Math.floor(Math.random() * locations.length)],
        description: descriptions[category][i],
        contact: contacts[Math.floor(Math.random() * contacts.length)],
        rating: (4 + Math.random()).toFixed(1),
        image: `/place-${Math.floor(Math.random() * 5) + 1}.jpg`, // Placeholder image
      });
    }
    
    return places;
  };

  // All places data
  const allPlaces = {
    temple: generatePlaces('temple'),
    park: generatePlaces('park'),
    historical: generatePlaces('historical'),
    waterpark: generatePlaces('waterpark'),
    lake: generatePlaces('lake'),
    museum: generatePlaces('museum'),
    garden: generatePlaces('garden'),
    other: generatePlaces('other'),
  };

  // Filter places based on active category and search query
  const filteredCategories = Object.entries(allPlaces)
    .filter(([categoryId]) => 
      activeCategory === 'all' || categoryId === activeCategory
    )
    .filter(([categoryId, places]) => 
      searchQuery === '' || 
      places.some(place => 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        categoryId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc]">
          <Sidebar />
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/80 to-[#0f172a]/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/places-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore <span className="text-[#0ea5e9]">Deoria's</span> Attractions
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
                placeholder="Search places, categories..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1e293b] border border-[#334155] text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select 
                className="w-full bg-[#1e293b] border border-[#334155] text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]"
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
                    ? 'bg-[#0ea5e9] text-white'
                    : 'bg-[#1e293b] hover:bg-[#334155]'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Places by Category */}
        <div className="space-y-16">
          {filteredCategories.map(([categoryId, places]) => {
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
                    <span className="mr-3 text-2xl">{category?.icon}</span>
                    {category?.name}
                  </h2>
                  <button 
                    className="text-[#0ea5e9] hover:underline flex items-center"
                    onClick={() => router.push(`/places/${categoryId}`)}
                  >
                    View more <FiChevronRight className="ml-1" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {places.map((place) => (
                    <motion.div
                      key={place.id}
                      className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl border border-[#334155] hover:border-[#0ea5e9]/50 transition-all flex flex-col"
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-52 relative overflow-hidden">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                        <div className="absolute top-2 right-2 bg-[#0ea5e9] text-white px-2 py-1 rounded-md flex items-center text-sm">
                          <FiStar className="mr-1" /> {place.rating}
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-bold text-xl mb-2 text-[#e2e8f0]">{place.name}</h3>
                        <div className="flex items-center text-[#94a3b8] text-sm mb-3">
                          <FiMapPin className="mr-2 text-[#0ea5e9]" />
                          <span>{place.location}</span>
                        </div>
                        <p className="text-[#cbd5e1] mb-4 flex-1">{place.description}</p>
                        
                        <div className="mt-auto pt-4 border-t border-[#334155]">
                          {place.contact ? (
                            <div className="flex items-center">
                              <FiPhone className="mr-2 text-[#0ea5e9]" />
                              <span className="text-[#94a3b8]">{place.contact}</span>
                            </div>
                          ) : (
                            <p className="text-[#94a3b8] text-sm">Contact information not available</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Featured Places Banner */}
        <div className="mt-20 mb-16 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Favorite Places</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Know a hidden gem in Deoria? Help us discover more amazing places by sharing your recommendations with our community.
          </p>
          <button className="bg-white text-[#0ea5e9] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Suggest a Place
          </button>
        </div>
      </div>
    </div>
  );
}