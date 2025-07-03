'use client'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import FeatureBox from '@/components/FeatureBox';
import Footer from '@/components/Footer';
import SectionCardPlace from '@/components/SectionCardPlace';
import SectionCard from '@/components/SectionCard';
import {
  FiShoppingBag,
  FiMap,
  FiHeadphones,
  FiInstagram,
  FiArrowDown,
  FiBook,
  FiCalendar,
  FiStar,
  FiMapPin,
  FiPhone,
  FiPlay,
  FiYoutube,
  FiMenu,
  FiX
} from 'react-icons/fi';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <>
//       <motion.div 
//         className="fixed top-0 left-0 z-50 p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <button 
//           onClick={toggleSidebar}
//           className="bg-white rounded-lg p-3 shadow-lg flex items-center justify-center"
//         >
//           {isOpen ? <FiX size={24} className="text-[#3b82f6]" /> : <FiMenu size={24} className="text-[#3b82f6]" />}
//         </button>
//       </motion.div>

//       <motion.div 
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
//         initial={{ x: '-100%' }}
//         animate={{ x: isOpen ? 0 : '-100%' }}
//         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//       >
//         <div className="p-6 border-b border-gray-200">
//           <h2 className="text-xl font-bold text-[#1e293b]">Discover Deoria</h2>
//         </div>
//         <nav className="p-4">
//           <ul className="space-y-4">
//             <li>
//               <a href="#history" className="flex items-center p-3 rounded-lg hover:bg-[#dbeafe] text-[#3b82f6]">
//                 <FiBook className="mr-3" />
//                 <span>History</span>
//               </a>
//             </li>
//             <li>
//               <a href="#festivals" className="flex items-center p-3 rounded-lg hover:bg-[#dbeafe] text-[#3b82f6]">
//                 <FiCalendar className="mr-3" />
//                 <span>Festivals</span>
//               </a>
//             </li>
//             <li>
//               <a href="#shops" className="flex items-center p-3 rounded-lg hover:bg-[#dbeafe] text-[#3b82f6]">
//                 <FiShoppingBag className="mr-3" />
//                 <span>Shops</span>
//               </a>
//             </li>
//             <li>
//               <a href="#places" className="flex items-center p-3 rounded-lg hover:bg-[#dbeafe] text-[#3b82f6]">
//                 <FiMap className="mr-3" />
//                 <span>Places</span>
//               </a>
//             </li>
//             <li>
//               <a href="#podcast" className="flex items-center p-3 rounded-lg hover:bg-[#dbeafe] text-[#3b82f6]">
//                 <FiHeadphones className="mr-3" />
//                 <span>Podcasts</span>
//               </a>
//             </li>
//             <li>
//               <a href="#videos" className="flex items-center p-3 rounded-lg hover:bg-[#dbeafe] text-[#3b82f6]">
//                 <FiYoutube className="mr-3" />
//                 <span>Videos</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </motion.div>
//     </>
//   );
// };

// FeatureBox Component


// SectionCard Component
// const SectionCard = ({ title, description, link, guest, image, delay }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-2xl border border-[#e2e8f0] shadow-md overflow-hidden"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: delay }}
//       whileHover={{ y: -10 }}
//     >
//       <div className="relative">
//         <div className="h-48 bg-gray-200" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <a href={link} className="bg-[#3b82f6] rounded-full p-4 cursor-pointer">
//             <FiPlay size={24} className="text-white" />
//           </a>
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="font-bold text-xl mb-2 text-[#1e293b]">{title}</h3>
//         <p className="text-[#4b5563] mb-4 line-clamp-3">{description}</p>
//         <div className="flex justify-between items-center">
//           <span className="text-sm text-[#64748b]">Guest: {guest}</span>
//           <a href={link} className="text-[#3b82f6] hover:text-[#1e40af] font-medium">
//             Listen Now
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // SectionCardPlace Component
// const SectionCardPlace = ({ title, description, delay }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-2xl border border-[#e2e8f0] shadow-md overflow-hidden h-full"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: delay }}
//       whileHover={{ y: -10 }}
//     >
//       <div className="h-48 bg-gray-200"></div>
//       <div className="p-6">
//         <h3 className="font-bold text-xl mb-2 text-[#1e293b]">{title}</h3>
//         <p className="text-[#4b5563] mb-4">{description}</p>
//         <button className="text-[#3b82f6] hover:text-[#1e40af] font-medium">
//           Explore Location
//         </button>
//       </div>
//     </motion.div>
//   );
// };



export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
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

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate 3D transform based on mouse position
  const calculate3DTransform = (depth = 20) => {
    return {
      transform: `perspective(1000px) rotateX(${mousePosition.y * depth}deg) rotateY(${-mousePosition.x * depth}deg)`
    };
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const shops = [
    {
      id: 1,
      name: "Deoria Handicrafts",
      description: "Traditional crafts and souvenirs",
      rating: 4.8,
      location: "City Center",
      bestFor: "Handmade products",
      contactNo: "+91 9876543210",
      watchExperience: "/shop-experience/deoria-handicrafts"
    },
    {
      id: 2,
      name: "Spice Bazaar",
      description: "Authentic local spices and herbs",
      rating: 4.6,
      location: "Market Road",
      bestFor: "Spices and condiments",
      contactNo: "+91 9876543211"
    },
    {
      id: 3,
      name: "Silk Emporium",
      description: "Traditional Banarasi silk sarees",
      rating: 4.9,
      location: "Gandhi Road",
      bestFor: "Silk fabrics",
      contactNo: "+91 9876543212"
    },
    {
      id: 4,
      name: "Clay Pottery",
      description: "Handcrafted pottery items",
      rating: 4.7,
      location: "Potter's Colony",
      bestFor: "Pottery and ceramics",
      contactNo: "+91 9876543213"
    },
    {
      id: 5,
      name: "Sweet Delights",
      description: "Traditional Indian sweets",
      rating: 4.5,
      location: "Sweet Market",
      bestFor: "Desserts and sweets",
      contactNo: "+91 9876543214"
    }
  ];

  const places = [
    {
      id: 1,
      title: "Sri Tirupati Balaji Mandir",
      description: "Beautiful temple with South Indian architecture"
    },
    {
      id: 2,
      title: "Ramkola Temple",
      description: "Ancient temple complex with historical significance"
    },
    {
      id: 3,
      title: "Deoria Lake",
      description: "Scenic lake perfect for evening walks"
    },
    {
      id: 4,
      title: "Gorakhnath Temple",
      description: "Spiritual center attracting devotees from all over"
    },
    {
      id: 5,
      title: "Bhatni Junction",
      description: "Historical railway station with colonial architecture"
    }
  ];

  function convertDriveUrlToPreview(url) {
    const match = url.match(/\/file\/d\/([^/]+)\//);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return null;
  }

  const podcasts = [
    {
      id: 1,
      title: "Rajesh Singh Dayal — Seva, Sankalp aur Sangharsh",
      description: "The Other Side of Vaibhav Mishra में हमारे खास मेहमान हैं राजेश सिंह दयाल, जिन्हें लोग प्यार से 'Medicine Man of UP' कहते हैं। From spiritual inspirations to ground-level activism, from running successful businesses to leading massive social welfare drives — this episode dives deep into the real story behind the public image.",
      image: convertDriveUrlToPreview("https://drive.google.com/file/d/1FRR7DBJTd4kcBZYMUKldfILUOyXcOhq2/view?usp=drivesdk"),
      link: "https://youtu.be/xqCsYb-VOhA?si=VEUEkGiyvo1Q3xUj",
      guest: "Rajesh Singh Dayal"
    },
    {
      id: 2,
      title: "Cultural Heritage of Deoria",
      description: "Exploring the rich traditions and cultural practices that make Deoria unique in the Purvanchal region of Uttar Pradesh.",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      link: "https://example.com/podcast2",
      guest: "Cultural Expert"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Discovering Deoria",
      description: "A visual journey through Deoria's cultural heritage",
      thumbnail: "https://img.youtube.com/vi/abcdefghijk/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=abcdefghijk"
    },
    {
      id: 2,
      title: "Festivals of Purvanchal",
      description: "Celebrating the vibrant festivals of Eastern UP",
      thumbnail: "https://img.youtube.com/vi/lmnopqrstuv/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=lmnopqrstuv"
    },
    {
      id: 3,
      title: "Culinary Delights",
      description: "Exploring the unique cuisine of Deoria district",
      thumbnail: "https://img.youtube.com/vi/wxyz1234567/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=wxyz1234567"
    }
  ];

  const openVideo = (url) => {
    setActiveVideo(url);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] text-[#212529] overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f1f3f5] z-0"></div>
        
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: '#3b82f6',
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

        <motion.div 
          className="text-center max-w-5xl z-10 px-4"
          style={calculate3DTransform(5)}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#3b82f6]"
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            Discover <span className="text-[#1e40af]">Deoria</span>
          </motion.h1>
          
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-[#3b82f6] rounded-full blur-xl opacity-20 z-0"></div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 relative z-10 text-[#1e293b]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hidden Gem of Purvanchal
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto text-[#4b5563] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore the rich culture, heritage, and beauty of Deoria district in Eastern Uttar Pradesh
          </motion.p>
   
        </motion.div>

        <motion.div
          className={`absolute bottom-12 transition-opacity duration-500 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={scrollToContent}
          style={calculate3DTransform(10)}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 flex items-center justify-center mb-2">
              <FiArrowDown size={28} className="text-[#3b82f6]" />
            </div>
            <span className="text-sm text-[#4b5563]">Explore More</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Content starts here */}
      <div ref={contentRef} className="relative z-10 pb-20">
        {/* Feature Boxes Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#1e293b]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Explore Deoria
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ perspective: '1000px' }}>
              {[
                { title: "History", description: "Explore Deoria's rich past", icon: <FiBook size={28} className="text-[#3b82f6]" />, href: "#history", delay: 0.1 },
                { title: "Festivals", description: "Celebrate local traditions", icon: <FiCalendar size={28} className="text-[#3b82f6]" />, href: "#festivals", delay: 0.2 },
                { title: "Shops", description: "Discover local shops", icon: <FiShoppingBag size={28} className="text-[#3b82f6]" />, href: "#shops", delay: 0.3 },
                { title: "Places", description: "Explore beautiful places", icon: <FiMap size={28} className="text-[#3b82f6]" />, href: "#places", delay: 0.4 },
                { title: "Podcasts", description: "Listen to stories", icon: <FiHeadphones size={28} className="text-[#3b82f6]" />, href: "#podcast", delay: 0.5 },
                { title: "Videos", description: "Watch visual journeys", icon: <FiYoutube size={28} className="text-[#3b82f6]" />, href: "#videos", delay: 0.6 },
            
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: feature.delay, ease: "backOut" }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    rotateX: 2,
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)',
                    transition: { duration: 0.3 }
                  }}
                  className="transform-style-3d bg-white rounded-2xl border border-[#e2e8f0] shadow-lg overflow-hidden"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-[#dbeafe] flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1e293b] mb-2">{feature.title}</h3>
                    <p className="text-[#4b5563] flex-grow">{feature.description}</p>
                    <a 
                      href={feature.href}
                      className="mt-4 text-[#3b82f6] hover:text-[#1e40af] font-medium"
                    >
                      Explore
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Historical Heritage</h2>
                <button
                  onClick={() => router.push('/history')}
                  className="text-[#3b82f6] hover:underline cursor-pointer"
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
                    <p className="text-lg text-[#4b5563] mb-6">
                      Deoria's history dates back to ancient times when it was part of the Kosala kingdom. The region has witnessed the rise and fall of several dynasties, including the Mauryas, Guptas, and Mughals. Deoria was officially established as a district in 1946, carved out from Gorakhpur district.
                    </p>
                    <p className="text-lg text-[#4b5563] mb-6">
                      The name "Deoria" is believed to have originated from "Devaranya" or "Devpuria", meaning a place of temples. This is evident from the numerous ancient temples scattered across the district, each with its own unique history and architectural style.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Sri Tirupati Balaji Mandir",
                      imageUrl: "https://edge.ixigo.com/ixi-api/img/5283bcc2411150b759000006_600x315.jpg"
                    },
                    {
                      name: "Hanuman Mandir",
                      imageUrl: "https://cdn.s3waas.gov.in/s39872ed9fc22fc182d371c3e9ed316094/uploads/bfi_thumb/2018061144-olwaon3zbt5ru1vmp6j9sc9a9eldat5y4l68mcyc96.jpg"
                    },
                    {
                      name: "Dugdheswarnath mandir",
                      imageUrl: "https://cdn.s3waas.gov.in/s39872ed9fc22fc182d371c3e9ed316094/uploads/bfi_thumb/2018061187-olwapmtujiio38fqwlz3f38su1pbfb3qxhyouvhdoq.jpg"
                    },
                    {
                      name: "Dewarahababa Kuti",
                      imageUrl: "https://cdn.s3waas.gov.in/s39872ed9fc22fc182d371c3e9ed316094/uploads/bfi_thumb/2018061168-olwapmtujiio38fqwlz3f38su1pbfb3qxhyouvhdoq.jpg"
                    },
                  ].map((site, index) => (
                    <motion.div
                      key={index}
                      className="relative h-64 rounded-xl overflow-hidden border border-[#e2e8f0] shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <img
                        src={site.imageUrl}
                        alt={site.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="font-bold text-white">{site.name}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Festivals Section */}
        <section id="festivals" className="py-20 px-4 bg-[#f1f5f9]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-12">Cultural Festivals</h2>

              <div className="space-y-12">
                {[
                  {
                    name: "Chhath Puja",
                    description: "The most significant festival in Deoria, celebrated with great devotion to the Sun God. People gather at riverbanks before sunrise with offerings in bamboo baskets.",
                    imageUrl: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/10/28110118/Chhath-Puja-celebrations-begins.png"
                  },
                  {
                    name: "Deoria Mahotsav",
                    description: "Annual cultural festival showcasing local art, music, and dance. Features traditional crafts exhibitions and folk performances.",
                    imageUrl: "https://www.xaviersbhatparrani.com/SliderImage/2214110210.jpeg"
                  },
                  {
                    name: "Holi",
                    description: "Celebrated with unique local traditions using natural colors and special sweets. Features community gatherings and cultural programs.",
                    imageUrl: "https://www.gktoday.in/wp-content/uploads/2023/03/holi.jpg"
                  },
                ].map((festival, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-md"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-full md:w-1/3">
                      <div className="relative rounded-xl overflow-hidden border border-[#e2e8f0] shadow-md">
                        <img
                          src={festival.imageUrl}
                          alt={festival.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-[#1e293b]">{festival.name}</h3>
                      <p className="text-lg text-[#4b5563]">{festival.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shops Section */}
        <section id="shops" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Featured Shops</h2>
                <button
                  onClick={() => router.push('/shops')}
                  className="text-[#3b82f6] hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative" style={{ perspective: '1200px' }}>
                {shops.map((shop, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateY: 15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                      boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)',
                      transition: { duration: 0.3 }
                    }}
                    className="transform-style-3d bg-white rounded-2xl border border-[#e2e8f0] shadow-md overflow-hidden"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute top-4 right-4 bg-[#3b82f6] text-white px-3 py-1 rounded-full flex items-center text-sm">
                        <FiStar className="mr-1" /> {shop.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-1 text-[#1e293b]">{shop.name}</h3>
                      <p className="text-[#4b5563] mb-4">{shop.description}</p>
                      <div className="flex items-center text-[#64748b] text-sm mb-3">
                        <FiMapPin className="mr-2 text-[#3b82f6]" />
                        <span>{shop.location}</span>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <FiPhone className="mr-2 text-[#3b82f6]" />
                          <span>{shop.contactNo}</span>
                        </div>
                        <button className="text-[#3b82f6] hover:text-[#1e40af] font-medium">
                          Directions
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Places Section */}
        <section id="places" className="py-20 px-4 bg-[#f1f5f9]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Popular Places</h2>
                <button
                  onClick={() => router.push('/places')}
                  className="text-[#3b82f6] hover:underline cursor-pointer">View All →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {places.map((place, index) => (
                  <motion.div
                    key={place.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-md overflow-hidden h-full">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-[#1e293b]">{place.title}</h3>
                        <p className="text-[#4b5563] mb-4">{place.description}</p>
                        <button className="text-[#3b82f6] hover:text-[#1e40af] font-medium">
                          Explore Location
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section id="podcast" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Latest Podcasts</h2>
                <button
                  onClick={() => router.push('/podcasts')}
                  className="text-[#3b82f6] hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {podcasts.map((podcast, i) => (
                  <SectionCard
                    key={i}
                    title={podcast.title}
                    description={podcast.description}
                    link={podcast.link}
                    guest={podcast.guest}
                    image={podcast.image}
                    delay={i * 0.15}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section id="videos" className="py-20 px-4 bg-[#f1f5f9]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">Explore Deoria</h2>
                <button
                  onClick={() => router.push('/videos')}
                  className="text-[#3b82f6] hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((video, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl border border-[#e2e8f0] shadow-md overflow-hidden cursor-pointer"
                    onClick={() => openVideo(video.url)}
                  >
                    <div className="relative">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-[#3b82f6] rounded-full p-3">
                          <FiPlay size={24} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-2 text-[#1e293b]">{video.title}</h3>
                      <p className="text-[#4b5563]">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-lg"
            >
              Close
            </button>
            <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
              <iframe 
                src={activeVideo.replace("watch?v=", "embed/")}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}