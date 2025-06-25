// app/podcasts/page.js
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCalendar, FiClock, FiUser, FiYoutube, FiHeadphones } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';

export default function PodcastPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [podcastsByCategory, setPodcastsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All', icon: <FiHeadphones /> },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'culture', name: 'Culture', icon: '🎭' },
    { id: 'history', name: 'History', icon: '📜' },
    { id: 'development', name: 'Development', icon: '🏗️' },
    { id: 'interview', name: 'Interviews', icon: '🎙️' },
  ];

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await fetch('/api/getpodcasts');
        const data = await res.json();

        if (!data.podcasts || !Array.isArray(data.podcasts)) {
          console.error("Invalid podcast data", data);
          return;
        }

        const grouped = data.podcasts.reduce((acc, podcast) => {
          const cat = podcast.category || 'other';
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(podcast);
          return acc;
        }, {});

        setPodcastsByCategory(grouped);
      } catch (err) {
        console.error('Error fetching podcasts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  const allPodcasts = Object.values(podcastsByCategory).flat();
  const filteredPodcasts = activeCategory === 'all' 
    ? allPodcasts 
    : podcastsByCategory[activeCategory] || [];

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0d0f14] to-[#1a1d24] text-white flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p>Loading podcasts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0f14] to-[#1a1d24] text-white">
      <Sidebar />
      
      {/* 3D Hero Section with Podcast Banner */}
      <div className="relative py-24 md:py-32 px-4 overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#0ea5e9] rounded-full mix-blend-soft-light opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#7dd3fc] rounded-full mix-blend-soft-light opacity-15 blur-3xl"></div>
          
          {/* Floating 3D Shapes */}
          <motion.div 
            className="absolute top-1/3 left-1/3 w-10 h-10 bg-[#0ea5e9] rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/4 right-1/4 w-6 h-6 bg-[#7dd3fc] rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-block bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] p-1 rounded-2xl mb-8 shadow-2xl"
          >
            <div className="bg-[#0d0f14] p-6 rounded-2xl">
              {/* Podcast Banner */}
              <div className="font-bold text-center tracking-widest">
                <div className="text-4xl md:text-5xl mb-2 text-[#0ea5e9]">THE</div>
                <div className="text-5xl md:text-6xl mb-2 text-[#7dd3fc]">OTHER</div>
                <div className="text-6xl md:text-7xl mb-4 text-white">SIDE</div>
                <div className="text-xl md:text-2xl text-[#cbd5e1]">WITH VAIBHAV MISHRA</div>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] to-[#e0f2fe]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Deoria <span className="text-[#0ea5e9]">Podcasts</span>
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-[#cbd5e1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Conversations with leaders shaping Deoria's future
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16 relative z-30">
        {/* 3D Category Tabs */}
        <div className="mb-16">
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center px-5 py-3 rounded-xl transition-all shadow-lg transform ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-[#0ea5e950]'
                    : 'bg-[#25282fcc] backdrop-blur-sm border border-[#3a3e4633] hover:bg-[#3a3e4680]'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: activeCategory !== category.id 
                    ? '0 10px 25px rgba(14, 165, 233, 0.3)' 
                    : '0 10px 25px rgba(14, 165, 233, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* 3D Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPodcasts.map((podcast) => (
            <motion.div 
              key={podcast.id}
              className="bg-[#25282fcc] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#3a3e4633] shadow-2xl transform transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(14,165,233,0.25)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Thumbnail with Play Button */}
              <div 
                className="relative h-60 cursor-pointer group"
                onClick={() => openLink(podcast.link)}
              >
                <div className="bg-gradient-to-br from-[#0d2d3d] to-[#1a1d24] w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] p-1 rounded-full mb-4">
                    <div className="bg-[#0d0f14] rounded-full p-3">
                      <FiHeadphones className="text-[#0ea5e9] text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{podcast.title}</h3>
                  <p className="text-[#94a3b8] mt-2 text-sm">{podcast.guestName}</p>
                </div>
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div 
                    className="bg-[#0ea5e9] w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiPlay className="text-white text-2xl ml-1" />
                  </motion.div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex justify-center gap-6 text-sm text-[#94a3b8]">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1 text-[#0ea5e9]" />
                      <span>{podcast.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1 text-[#0ea5e9]" />
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Podcast Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#e2e8f0]">{podcast.title}</h3>
                  <motion.button 
                    className="text-[#0ea5e9] hover:text-[#38bdf8]"
                    onClick={() => openLink(podcast.link)}
                    title="Watch"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiYoutube className="text-2xl" />
                  </motion.button>
                </div>
                
                <p className="text-[#94a3b8] mb-5">{podcast.description}</p>
                
                <div className="pt-4 border-t border-[#334155]">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#0ea5e9]">
                      <FiUser className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#cbd5e1] mb-1">Featured Guest: {podcast.guestName}</h4>
                      <p className="text-[#94a3b8] text-sm">{podcast.guestDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Subscribe Banner */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-2xl p-8 md:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Episode</h2>
              <p className="text-lg text-[#e0f2fe] max-w-2xl mx-auto">
                Subscribe to our YouTube channel for new podcast releases
              </p>
            </div>
            <motion.button 
              className="bg-white text-[#0ea5e9] font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto shadow-lg"
              onClick={() => window.open('https://www.youtube.com/@DeoriaOfficial', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiYoutube className="mr-2 text-xl" /> Subscribe on YouTube
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}