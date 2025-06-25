'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiArrowRight, FiMapPin, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function HistoryPage() {
  const router = useRouter();
  const [expandedPlace, setExpandedPlace] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const res = await fetch('/api/gethistory');
        const data = await res.json();
        if (data.success) {
          setHistories(data.data);
        } else {
          console.error('Failed to load histories');
        }
      } catch (err) {
        console.error('Error fetching histories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistories();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-[#1C1F24] flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-t-4 border-[#dd7358] border-r-4 border-l-4 border-b-4 border-transparent rounded-full"
      />
    </div>
  );

  const openModal = (images, index) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((currentIndex - 1 + currentImages.length) % currentImages.length);

  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % currentImages.length);

  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4] overflow-x-hidden">
      <Sidebar />

      {/* Hero Section with 3D effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('/history-bg.jpg')] bg-cover bg-center opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F24] via-[#1C1F24]/90 to-transparent z-10"></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <motion.img 
              src="https://tse3.mm.bing.net/th?id=OIP.-7npaivMwOIaG3JlZW5dMAHaGA&pid=Api&P=0&h=180" 
              alt="History Icon"
              className="w-24 h-24 mr-6 rounded-full border-4 border-[#dd7358] shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div>
              <motion.h1 className="text-4xl md:text-6xl font-bold mb-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Historical <span className="text-[#dd7358]">Heritage</span> 
              </motion.h1>
              <motion.div className="w-full h-1 bg-[#dd7358] mb-4"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>
          </div>
          
          <motion.p className="text-xl md:text-2xl max-w-3xl text-[#c5c1b8]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Explore the rich tapestry of Deoria's past through its ancient sites and monuments
          </motion.p>
          
          <motion.div 
            className="mt-8 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-[#dd7358] rounded-lg blur opacity-75"></div>
              <button 
                onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
                className="relative px-6 py-3 bg-[#1C1F24] rounded-lg font-medium hover:bg-[#25282F] transition-all flex items-center"
              >
                Explore Heritage Sites <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating 3D elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-[#dd7358]/20"
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
          className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-[#dd7358]/10 border border-[#dd7358]/30"
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

      {/* Historical Places Grid with 3D cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {histories.map((place) => (
            <motion.div 
              key={place.id}
              className={`bg-[#25282F] rounded-xl overflow-hidden shadow-2xl border-2 transform-style-3d transition-all duration-500 ${
                expandedPlace === place.id 
                  ? 'border-[#dd7358] shadow-[0_25px_50px_-12px_rgba(221,115,88,0.3)]' 
                  : 'border-transparent hover:border-[#dd7358]/50'
              }`}
              initial={{ opacity: 0, y: 30, rotateY: -5 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -10,
                rotateY: 2,
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="p-5 border-b border-[#3a3e46]">
                <h3 className="text-xl font-bold mb-1">{place.title}</h3>
                <div className="flex items-center text-[#c5c1b8] text-sm">
                  <FiMapPin className="mr-1" />
                  <span>{place.location}</span>
                </div>
              </div>

              <div 
                className="relative h-48 overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openModal(place.images, 0)}
              >
                <div className="grid grid-cols-2 h-full gap-0.5">
                  <motion.img 
                    src={place.images[0]} 
                    alt="Main image" 
                    className="w-full h-full object-cover border border-[#3a3e46]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="grid grid-rows-2 gap-0.5">
                    {place.images[1] && (
                      <motion.img 
                        src={place.images[1]} 
                        alt="Top right image" 
                        className="w-full h-full object-cover border border-[#3a3e46]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                    )}
                    {place.images[2] && (
                      <motion.img 
                        src={place.images[2]} 
                        alt="Bottom right image" 
                        className="w-full h-full object-cover border border-[#3a3e46]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm text-white backdrop-blur-sm">
                  +{place.images.length} images
                </div>
                
                {/* 3D hover effect layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <p className="text-[#c5c1b8] mb-4">
                  {expandedPlace === place.id ? place.detailed : place.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    className="text-[#dd7358] hover:underline flex items-center text-sm group"
                    onClick={() => setExpandedPlace(expandedPlace === place.id ? null : place.id)}
                  >
                    {expandedPlace === place.id ? "Show less" : "Read more"}
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      <FiArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal with 3D effect */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer z-20"
            onClick={closeModal}
            whileHover={{ scale: 1.2 }}
          >
            <FiX />
          </motion.div>
          
          <motion.div 
            className="absolute left-4 text-white text-3xl cursor-pointer z-20"
            onClick={prevImage}
            whileHover={{ scale: 1.2 }}
          >
            <FiChevronLeft />
          </motion.div>
          
          <motion.img 
            src={currentImages[currentIndex]} 
            alt="Popup image" 
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl z-10"
            initial={{ scale: 0.8, rotateY: 30 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ type: "spring", damping: 15 }}
          />
          
          <motion.div 
            className="absolute right-4 text-white text-3xl cursor-pointer z-20"
            onClick={nextImage}
            whileHover={{ scale: 1.2 }}
          >
            <FiChevronRight />
          </motion.div>
          
          <div className="absolute bottom-8 text-white z-20">
            {currentIndex + 1} / {currentImages.length}
          </div>
        </motion.div>
      )}

      {/* Historical Timeline with 3D depth */}
      <div className="bg-gradient-to-b from-[#1C1F24] to-[#0e1013] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Deoria Through the Ages
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#dd7358] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#1C1F24] p-6 rounded-xl border border-[#3a3e46] shadow-lg transform-style-3d"
              initial={{ opacity: 0, y: 40, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(221,115,88,0.1)' }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#dd7358]">Ancient Period</h3>
              <p className="text-[#c5c1b8]">
                Deoria's history traces back to the Vedic period when it was part of the Kosala Kingdom.
                Archaeological finds indicate settlements dating to 1000 BCE. The region flourished under
                Buddhist influence during the Mauryan Empire.
              </p>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-[#dd7358] to-transparent opacity-30" />
            </motion.div>

            <motion.div
              className="bg-[#1C1F24] p-6 rounded-xl border border-[#3a3e46] shadow-lg transform-style-3d"
              initial={{ opacity: 0, y: 40, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(221,115,88,0.1)' }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#dd7358]">Medieval Era</h3>
              <p className="text-[#c5c1b8]">
                During medieval times, Deoria was ruled by various dynasties including the Palas,
                Senas, and later the Mughals. The region became an important agricultural and
                trading center, with several temples and forts constructed during this period.
              </p>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-[#dd7358] to-transparent opacity-30" />
            </motion.div>

            <motion.div
              className="bg-[#1C1F24] p-6 rounded-xl border border-[#3a3e46] shadow-lg transform-style-3d"
              initial={{ opacity: 0, y: 40, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(221,115,88,0.1)' }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#dd7358]">Modern History</h3>
              <p className="text-[#c5c1b8]">
                Deoria played a significant role in India's independence movement. The district
                witnessed active participation in the Non-Cooperation Movement and Quit India Movement.
                Post-independence, Deoria has developed into an important agricultural and educational hub.
              </p>
              <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-[#dd7358] to-transparent opacity-30" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action with 3D button */}
      <div className="py-16 px-4 bg-[#1C1F24]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Preserving Our Heritage
          </motion.h2>
          <motion.p 
            className="text-xl text-[#c5c1b8] mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Help us document and preserve Deoria's historical treasures for future generations.
            Share your stories, photographs, or historical artifacts with our research team.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              onClick={() => router.push("/contact")}
              className="px-6 py-3 rounded-lg font-medium transition-all transform-style-3d"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(145deg, #dd7358, #b85c46)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.23)'
              }}
            >
              Contribute Historical Materials
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating history icon at bottom */}
      <motion.div 
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#25282F] border-2 border-[#dd7358] flex items-center justify-center shadow-lg cursor-pointer z-30"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <img 
          src="https://tse3.mm.bing.net/th?id=OIP.-7npaivMwOIaG3JlZW5dMAHaGA&pid=Api&P=0&h=180" 
          alt="History Icon" 
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