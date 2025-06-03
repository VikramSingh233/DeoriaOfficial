'use client'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Sidebar from '@/components/Sidebar';
import FeatureBox from '@/components/FeatureBox';
import SectionCard from '@/components/SectionCard';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import {
  FiShoppingBag,
  FiMap,
  FiHeadphones,
  FiInstagram,
  FiArrowDown,
  FiBook,
  FiCalendar
} from 'react-icons/fi';


export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
  });
  const router = useRouter();


  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dummy data for each section
  const shops = Array(5).fill().map((_, i) => ({
    id: i + 1,
    title: `Shop ${i + 1}`,
    description: `Discover unique local products at our featured shop ${i + 1} in Deoria.`
  }));

  const places = Array(5).fill().map((_, i) => ({
    id: i + 1,
    title: `Place ${i + 1}`,
    description: `Explore the hidden gem of Deoria at this beautiful location ${i + 1}.`
  }));

  const podcasts = Array(5).fill().map((_, i) => ({
    id: i + 1,
    title: `Podcast ${i + 1}`,
    description: `Listen to fascinating stories about Deoria's culture and history.`
  }));

  const socials = Array(5).fill().map((_, i) => ({
    id: i + 1,
    title: `Social Media ${i + 1}`,
    description: `Connect with our community and stay updated on the latest events.`
  }));

  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4] overflow-x-hidden">
      <Sidebar />

      {/* Full-screen background video */}
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-[#1C1F24] opacity-80"></div>
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/deoria-official/src/assets/deoriaofficialhomevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 relative"
      >
        <div className="text-center max-w-5xl z-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover <span className="text-[#dd7358]">Deoria</span>
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hidden Gems of Purvanchal
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto text-[#c5c1b8] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore the rich culture, heritage, and beauty of Deoria district in Eastern Uttar Pradesh
          </motion.p>
        </div>

        <motion.div
          className={`absolute bottom-12 transition-opacity duration-500 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={scrollToContent}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="mb-2 text-sm">Explore More</span>
            <FiArrowDown size={28} className="text-[#ff7e5f]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Content starts here */}
      <div ref={contentRef} className="relative z-10">
        {/* Feature Boxes Section */}
        <section className=" py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Explore Deoria
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >

              <FeatureBox
                title="History"
                description="Explore Deoria's rich past"
                icon={<FiBook size={28} />}
                href="#history"
                delay={0.5}
              />
              <FeatureBox
                title="Festivals"
                description="Celebrate local traditions"
                icon={<FiCalendar size={28} />}
                href="#festivals"
                delay={0.6}
              />
              <FeatureBox
                title="Shops"
                description="Discover local shops and businesses"
                icon={<FiShoppingBag size={28} />}
                href="#shops"
                delay={0.1}
              />
              <FeatureBox
                title="Places"
                description="Explore beautiful places in Deoria"
                icon={<FiMap size={28} />}
                href="#places"
                delay={0.2}
              />
              <FeatureBox
                title="Podcasts"
                description="Listen to stories about Deoria"
                icon={<FiHeadphones size={28} />}
                href="#podcast"
                delay={0.3}
              />
              <FeatureBox
                title="Social Media"
                description="Connect with us on social platforms"
                icon={<FiInstagram size={28} />}
                href="#social"
                delay={0.4}
              />
            </motion.div>
          </div>
        </section>


        <section id="history" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Historical Heritage</h2>
                <button
                  onClick={() => router.push('/history')}
                  className="text-[#ff7e5f] hover:underline"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-lg text-[#c5c1b8] mb-6">
                      Deoria's history dates back to ancient times, mentioned in Hindu scriptures as part of the Kosala Kingdom. The region played a significant role during the Buddhist era when it served as an important center for learning and spirituality.
                    </p>
                    <p className="text-lg text-[#c5c1b8] mb-6">
                      During the medieval period, Deoria came under the rule of various dynasties including the Mughals and Awadh Nawabs. The district witnessed significant developments during the British Raj, becoming an important agricultural and trade center in Eastern Uttar Pradesh.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative h-64 rounded-xl overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="font-bold text-white">Historical Site {index + 1}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        <section id="festivals" className="py-20 px-4 bg-[#25282F]/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Cultural Festivals</h2>

              </div>

              <div className="space-y-12">
                {[
                  {
                    name: "Chhath Puja",
                    description: "The most significant festival in Deoria, celebrated with great devotion to the Sun God. People gather at riverbanks before sunrise with offerings in bamboo baskets."
                  },
                  {
                    name: "Deoria Mahotsav",
                    description: "Annual cultural festival showcasing local art, music, and dance. Features traditional crafts exhibitions and folk performances."
                  },
                  {
                    name: "Holi",
                    description: "Celebrated with unique local traditions using natural colors and special sweets. Features community gatherings and cultural programs."
                  },
                  {
                    name: "Diwali",
                    description: "Illuminated with thousands of diyas and fireworks. Special markets spring up selling traditional sweets and decorations."
                  },
                  {
                    name: "Eid-ul-Fitr",
                    description: "Celebrated with communal harmony, featuring special prayers at historical mosques and sharing of festive delicacies."
                  }
                ].map((festival, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 items-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-full md:w-1/3">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2">{festival.name}</h3>
                      <p className="text-lg text-[#c5c1b8]">{festival.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Shops Section */}
        <section id="shops" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Featured Shops</h2>
                <button
                  onClick={() => router.push('/shops')}
                  className="text-[#ff7e5f] hover:underline">View All →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {shops.map((shop, index) => (
                  <SectionCard
                    key={shop.id}
                    title={shop.title}
                    description={shop.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Places Section */}
        <section id="places" className="py-20 px-4 bg-[#25282F]/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Popular Places</h2>
                <button
                  onClick={() => router.push('/places')}
                  className="text-[#ff7e5f] hover:underline">View All →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {places.map((place, index) => (
                  <SectionCard
                    key={place.id}
                    title={place.title}
                    description={place.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section id="podcast" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Latest Podcasts</h2>
                <button
                  onClick={() => router.push('/podcasts')}
                  className="text-[#ff7e5f] hover:underline">View All →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {podcasts.map((podcast, index) => (
                  <SectionCard
                    key={podcast.id}
                    title={podcast.title}
                    description={podcast.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Media Section */}
        <section id="social" className="py-20 px-4 bg-[#25282F]/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Social Media</h2>
                <button
                  onClick={() => router.push('/social')}
                  className="text-[#ff7e5f] hover:underline">View All →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {socials.map((social, index) => (
                  <SectionCard
                    key={social.id}
                    title={social.title}
                    description={social.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Floating background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: '#ff7e5f',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      <div>

        <Footer />
      </div>
    </div>

  );
}