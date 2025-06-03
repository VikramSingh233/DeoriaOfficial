// app/podcasts/page.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCalendar, FiClock, FiUser, FiYoutube } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';
export default function PodcastPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Podcast categories
  const categories = [
    { id: 'all', name: 'All Podcasts' },
    { id: 'business', name: 'Business' },
    { id: 'culture', name: 'Culture' },
    { id: 'history', name: 'History' },
    { id: 'development', name: 'Development' },
    { id: 'interview', name: 'Interviews' },
  ];

  // Podcast data
  const podcasts = [
    {
      id: 1,
      title: "The Future of Business in Deoria",
      description: "Join us as we explore the evolving business landscape in Deoria and how local entrepreneurs are adapting to modern challenges.",
      guest: "Rajesh Gupta - President, Deoria Chamber of Commerce",
      date: "May 15, 2024",
      duration: "42 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "business",
      thumbnail: "/podcast-1.jpg"
    },
    {
      id: 2,
      title: "Cultural Heritage of Eastern UP",
      description: "Discover the rich cultural traditions, folk arts, and festivals that make Eastern Uttar Pradesh unique.",
      guest: "Dr. Priya Singh - Cultural Anthropologist",
      date: "May 8, 2024",
      duration: "38 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "culture",
      thumbnail: "/podcast-2.jpg"
    },
    {
      id: 3,
      title: "Historical Landmarks of Deoria District",
      description: "A journey through time exploring the ancient temples, colonial architecture, and forgotten stories of Deoria.",
      guest: "Prof. Arun Verma - Historian",
      date: "May 1, 2024",
      duration: "51 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "history",
      thumbnail: "/podcast-3.jpg"
    },
    {
      id: 4,
      title: "Infrastructure Development in Deoria",
      description: "Discussion on upcoming infrastructure projects, road networks, and urban planning initiatives in Deoria.",
      guest: "Mr. Vikas Patel - City Planner",
      date: "Apr 24, 2024",
      duration: "45 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "development",
      thumbnail: "/podcast-4.jpg"
    },
    {
      id: 5,
      title: "Interview with a Local Artist",
      description: "Meet Ritu Sharma, a talented painter whose work captures the essence of rural life in Eastern UP.",
      guest: "Ritu Sharma - Artist",
      date: "Apr 17, 2024",
      duration: "33 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "interview",
      thumbnail: "/podcast-5.jpg"
    },
    {
      id: 6,
      title: "Agriculture Innovations in the Region",
      description: "Exploring modern farming techniques and sustainable agriculture practices being adopted by Deoria farmers.",
      guest: "Dr. Sanjay Kumar - Agricultural Scientist",
      date: "Apr 10, 2024",
      duration: "47 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "business",
      thumbnail: "/podcast-6.jpg"
    },
    {
      id: 7,
      title: "Folklore and Legends of Deoria",
      description: "Uncovering the fascinating myths, legends, and folk tales passed down through generations in Deoria.",
      guest: "Mrs. Shanti Devi - Folklorist",
      date: "Apr 3, 2024",
      duration: "40 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "culture",
      thumbnail: "/podcast-7.jpg"
    },
    {
      id: 8,
      title: "Youth Entrepreneurship in Deoria",
      description: "Young entrepreneurs share their journey of starting businesses in Deoria and the challenges they overcame.",
      guest: "Amit & Neha - Founders, Deoria Craft Hub",
      date: "Mar 27, 2024",
      duration: "49 min",
      youtubeId: "dQw4w9WgXcQ",
      category: "business",
      thumbnail: "/podcast-8.jpg"
    },
  ];

  // Filter podcasts based on active category
  const filteredPodcasts = activeCategory === 'all' 
    ? podcasts 
    : podcasts.filter(podcast => podcast.category === activeCategory);

  // Function to open YouTube video
  const openYouTube = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
          <Sidebar />
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/podcast-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Deoria <span className="text-[#0ea5e9]">Official</span> Podcasts
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-[#cbd5e1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Listen to conversations with local leaders, experts, and innovators shaping Deoria's future
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#0ea5e9] text-white shadow-lg'
                    : 'bg-[#1e293b] border border-[#334155] hover:bg-[#334155]'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPodcasts.map((podcast) => (
            <motion.div 
              key={podcast.id}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl border border-[#334155] hover:border-[#0ea5e9]/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
            >
              {/* Thumbnail with Play Button */}
              <div 
                className="relative h-52 cursor-pointer group"
                onClick={() => openYouTube(podcast.youtubeId)}
              >
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#0ea5e9] w-16 h-16 rounded-full flex items-center justify-center">
                    <FiPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center text-sm text-[#94a3b8]">
                    <div className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      <span>{podcast.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Podcast Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#e2e8f0]">{podcast.title}</h3>
                  <button 
                    className="text-[#0ea5e9] hover:text-[#38bdf8]"
                    onClick={() => openYouTube(podcast.youtubeId)}
                    title="Watch on YouTube"
                  >
                    <FiYoutube className="text-2xl" />
                  </button>
                </div>
                
                <p className="text-[#94a3b8] mb-5">{podcast.description}</p>
                
                <div className="pt-4 border-t border-[#334155]">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#0ea5e9]">
                      <FiUser className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#cbd5e1] mb-1">Featured Guest</h4>
                      <p className="text-[#94a3b8] text-sm">{podcast.guest}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Episode</h2>
              <p className="text-lg text-[#e0f2fe] max-w-2xl mx-auto">
                Subscribe to our YouTube channel and get notified when new podcasts are released
              </p>
            </div>
            <button 
              className="bg-white text-[#0ea5e9] font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto"
              onClick={() => window.open('https://www.youtube.com/@DeoriaOfficial', '_blank')}
            >
              <FiYoutube className="mr-2 text-xl" /> Subscribe on YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}