'use client'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
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
  FiX,
  FiCompass
} from 'react-icons/fi';

// 3D Card Components
const FeatureBox = ({ title, description, icon, href, delay }) => {
  return (
    <motion.a
      href={href}
      className="group relative block h-full w-full"
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "backOut" }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: 2,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="transform-style-3d h-full w-full rounded-2xl bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl">
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-4">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] opacity-10 blur-xl transition-all duration-300 group-hover:opacity-20"></div>
      </div>
    </motion.a>
  );
};

const SectionCard = ({ title, description, link, guest, image, delay }) => {
  return (
    <motion.div
      className="group relative h-full w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="transform-style-3d h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="relative">
           <div className="h-64 overflow-hidden scrollbar-hide bg-gray-200" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden object-fill">
         <iframe
  src={image}
  className="w-full h-60 rounded-xl"
  allow="autoplay"
  
/>
        </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <a href={link} className="transform-style-3d rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-4 shadow-xl transition-all hover:scale-110 hover:from-[#0ea5e9] hover:to-[#0284c7]">
              <FiPlay size={24} className="text-white" />
            </a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
          <p className="mb-4 text-gray-600 line-clamp-3">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Guest: {guest}</span>
            <a href={link} className="text-sm font-medium text-[#0ea5e9] hover:text-[#0284c7]">
              Listen Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SectionCardPlace = ({ title, description, delay,image }) => {
  return (
    <motion.div
      className="group relative h-full w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="transform-style-3d h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl">
  {/* Video thumbnail */}
  <div className="relative h-48 w-full">
    <img
      src={image} 
      alt="Video Thumbnail"
      className="h-full w-full object-cover"
    />
    
    {/* Optional Play Button Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-4 shadow-xl transition-all hover:scale-110">
        <FiPlay size={24} className="text-white" />
      </div>
    </div>
  </div>

  {/* Card Content */}
  <div className="p-6">
    <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
    <p className="mb-4 text-gray-600">{description}</p>
    <button className="flex items-center text-sm font-medium text-[#0ea5e9] hover:text-[#0284c7]">
      <FiCompass className="mr-2" />
      Explore Location
    </button>
  </div>
</div>

    </motion.div>
  );
};

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
      watchExperience: "/shop-experience/deoria-handicrafts",
      image:"https://cdn.pixabay.com/photo/2025/06/23/18/09/blossom-9676411_1280.jpg"
    },
    {
      id: 2,
      name: "Spice Bazaar",
      description: "Authentic local spices and herbs",
      rating: 4.6,
      location: "Market Road",
      bestFor: "Spices and condiments",
      contactNo: "+91 9876543211",
      image:"https://cdn.pixabay.com/photo/2025/06/23/18/09/blossom-9676411_1280.jpg"
    },
    {
      id: 3,
      name: "Silk Emporium",
      description: "Traditional Banarasi silk sarees",
      rating: 4.9,
      location: "Gandhi Road",
      bestFor: "Silk fabrics",
      contactNo: "+91 9876543212",
      image:"https://cdn.pixabay.com/photo/2025/06/23/18/09/blossom-9676411_1280.jpg"
    },
    {
      id: 4,
      name: "Clay Pottery",
      description: "Handcrafted pottery items",
      rating: 4.7,
      location: "Potter's Colony",
      bestFor: "Pottery and ceramics",
      contactNo: "+91 9876543213",
      image:"https://cdn.pixabay.com/photo/2025/06/23/18/09/blossom-9676411_1280.jpg"
    },
    {
      id: 5,
      name: "Sweet Delights",
      description: "Traditional Indian sweets",
      rating: 4.5,
      location: "Sweet Market",
      bestFor: "Desserts and sweets",
      contactNo: "+91 9876543214",
      image:"https://cdn.pixabay.com/photo/2025/06/23/18/09/blossom-9676411_1280.jpg"
    }
  ];

  const places = [
    {
      id: 1,
      title: "Sri Tirupati Balaji Mandir",
      description: "Beautiful temple with South Indian architecture",
      image:"https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-103106.jpg"
    },
    {
      id: 2,
      title: "Ramkola Temple",
      description: "Ancient temple complex with historical significance",
          image:"https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-103106.jpg"
    },
    {
      id: 3,
      title: "Deoria Lake",
      description: "Scenic lake perfect for evening walks",
          image:"https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-103106.jpg"
    },
    {
      id: 4,
      title: "Gorakhnath Temple",
      description: "Spiritual center attracting devotees from all over",
          image:"https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-103106.jpg"
    },
    {
      id: 5,
      title: "Bhatni Junction",
      description: "Historical railway station with colonial architecture",
          image:"https://img.freepik.com/premium-photo/great-picture-image-will-make-your-work-more-beautiful_987032-103106.jpg"
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
      thumbnail: "https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg",
      url: "https://www.youtube.com/watch?v=abcdefghijk"
    },
    {
      id: 2,
      title: "Festivals of Purvanchal",
      description: "Celebrating the vibrant festivals of Eastern UP",
      thumbnail: "https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg",
      url: "https://www.youtube.com/watch?v=lmnopqrstuv"
    },
    {
      id: 3,
      title: "Culinary Delights",
      description: "Exploring the unique cuisine of Deoria district",
      thumbnail: "https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg",
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
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff] text-gray-800 overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Floating Navigation */}
      {/* <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={toggleSidebar}
          className="transform-style-3d flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:shadow-2xl"
        >
          {isSidebarOpen ? <FiX size={24} className="text-[#0ea5e9]" /> : <FiMenu size={24} className="text-[#0ea5e9]" />}
        </button>
      </div> */}

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: '#0ea5e9',
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

        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20">
          <motion.div 
            className="relative z-10 w-full max-w-5xl text-center"
            style={calculate3DTransform(10)}
          >
            <motion.h1
              className="text-5xl font-bold md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 40, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
            >
              <span className="block bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] bg-clip-text text-transparent">
                Discover
              </span>
              <span className="mt-2 block bg-gradient-to-r from-[#0284c7] to-[#075985] bg-clip-text text-transparent">
                Deoria
              </span>
            </motion.h1>
            
            <motion.div
              className="relative mt-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] opacity-10 blur-xl"></div>
              <motion.h2
                className="relative text-3xl font-bold text-gray-800 md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Hidden Gem of Purvanchal
              </motion.h2>
            </motion.div>

            <motion.p
              className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Explore the rich culture, heritage, and beauty of Deoria district in Eastern Uttar Pradesh
            </motion.p>
   
            <motion.div
              className={`mt-16 transition-opacity duration-500 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={scrollToContent}
              style={calculate3DTransform(10)}
            >
              <motion.div
                className="flex cursor-pointer flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] shadow-lg">
                  <FiArrowDown size={28} className="text-white" />
                </div>
                <span className="text-sm text-gray-600">Explore More</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content starts here */}
      <div ref={contentRef} className="relative z-10 pb-20">
        {/* Feature Boxes Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              className="mb-16 text-center text-3xl font-bold text-gray-800 md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Explore Deoria
            </motion.h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" style={{ perspective: '1000px' }}>
              {[
                { title: "History", description: "Explore Deoria's rich past", icon: <FiBook size={28} className="text-[#0ea5e9]" />, href: "#history", delay: 0.1 },
                { title: "Festivals", description: "Celebrate local traditions", icon: <FiCalendar size={28} className="text-[#0ea5e9]" />, href: "#festivals", delay: 0.2 },
                { title: "Shops", description: "Discover local shops", icon: <FiShoppingBag size={28} className="text-[#0ea5e9]" />, href: "#shops", delay: 0.3 },
                { title: "Places", description: "Explore beautiful places", icon: <FiMap size={28} className="text-[#0ea5e9]" />, href: "#places", delay: 0.4 },
                { title: "Podcasts", description: "Listen to stories", icon: <FiHeadphones size={28} className="text-[#0ea5e9]" />, href: "#podcast", delay: 0.5 },
                { title: "Videos", description: "Watch visual journeys", icon: <FiYoutube size={28} className="text-[#0ea5e9]" />, href: "#videos", delay: 0.6 },
              ].map((feature, i) => (
                <FeatureBox key={i} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Historical Heritage</h2>
                <button
                  onClick={() => router.push('/history')}
                  className="flex items-center text-lg font-medium text-[#0ea5e9] hover:text-[#0284c7]"
                >
                  View All <FiArrowDown className="ml-2 rotate-90" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-lg text-gray-600">
                      Deoria's history dates back to ancient times when it was part of the Kosala kingdom. The region has witnessed the rise and fall of several dynasties, including the Mauryas, Guptas, and Mughals. Deoria was officially established as a district in 1946, carved out from Gorakhpur district.
                    </p>
                  </motion.div>
                  
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
                        className="relative h-64 overflow-hidden rounded-xl border border-gray-200 shadow-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <img
                          src={site.imageUrl}
                          alt={site.name}
                          className="h-full w-full rounded-xl object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="font-bold text-white">{site.name}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-8">
                    <div className="relative z-10">
                      <h3 className="mb-4 text-2xl font-bold text-gray-800">Historical Timeline</h3>
                      
                      <div className="space-y-6">
                        {[
                          { year: "Ancient Era", event: "Part of Kosala Kingdom" },
                          { year: "Medieval Period", event: "Under Mughal Administration" },
                          { year: "1946", event: "Deoria established as a district" },
                          { year: "Present", event: "Cultural hub of Purvanchal" },
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="flex"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="mr-4 flex flex-col items-center">
                              <div className="h-4 w-4 rounded-full bg-[#0ea5e9]"></div>
                              <div className="h-full w-0.5 bg-gradient-to-b from-[#0ea5e9] to-transparent"></div>
                            </div>
                            <div className="pb-8">
                              <div className="mb-1 text-lg font-semibold text-[#0ea5e9]">{item.year}</div>
                              <div className="text-gray-600">{item.event}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] opacity-10"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Festivals Section */}
        <section id="festivals" className="py-24 bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">Cultural Festivals</h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    className="transform-style-3d overflow-hidden rounded-2xl bg-white shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative h-64">
                      <img
                        src={festival.imageUrl}
                        alt={festival.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-2xl font-bold text-gray-800">{festival.name}</h3>
                      <p className="text-gray-600">{festival.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shops Section */}
        <section id="shops" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Featured Shops</h2>
                <button
                  onClick={() => router.push('/shops')}
                  className="flex items-center text-lg font-medium text-[#0ea5e9] hover:text-[#0284c7]"
                >
                  View All <FiArrowDown className="ml-2 rotate-90" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1200px' }}>
                {shops.map((shop, i) => (
                  <motion.div
                    key={i}
                    className="transform-style-3d overflow-hidden rounded-2xl bg-white shadow-xl"
                    initial={{ opacity: 0, y: 30, rotateY: 15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                    }}
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
  {/* Thumbnail image */}
  <img
    src={shop.image} // Replace with your video thumbnail
    alt="Shop Thumbnail"
    className="h-full w-full object-cover"
  />

  {/* Rating badge in top-right corner */}
  <div className="absolute top-4 right-4 flex items-center rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-3 py-1 text-sm text-white shadow-md">
    <FiStar className="mr-1" /> {shop.rating}
  </div>
</div>

                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold text-gray-800">{shop.name}</h3>
                      <p className="mb-4 text-gray-600">{shop.description}</p>
                      <div className="mb-3 flex items-center text-sm text-gray-500">
                        <FiMapPin className="mr-2 text-[#0ea5e9]" />
                        <span>{shop.location}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <FiPhone className="mr-2 text-[#0ea5e9]" />
                          <span>{shop.contactNo}</span>
                        </div>
                        <button className="text-sm font-medium text-[#0ea5e9] hover:text-[#0284c7]">
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
        <section id="places" className="py-24 bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Popular Places</h2>
                <button
                  onClick={() => router.push('/places')}
                  className="flex items-center text-lg font-medium text-[#0ea5e9] hover:text-[#0284c7]"
                >
                  View All <FiArrowDown className="ml-2 rotate-90" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {places.map((place, index) => (
                  <SectionCardPlace
                    key={place.id}
                    title={place.title}
                    description={place.description}
                    image={place.image}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Podcasts Section */}
        <section id="podcast" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Latest Podcasts</h2>
                <button
                  onClick={() => router.push('/podcasts')}
                  className="flex items-center text-lg font-medium text-[#0ea5e9] hover:text-[#0284c7]"
                >
                  View All <FiArrowDown className="ml-2 rotate-90" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
        <section id="videos" className="py-24 bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Explore Deoria</h2>
                <button
                  onClick={() => router.push('/videos')}
                  className="flex items-center text-lg font-medium text-[#0ea5e9] hover:text-[#0284c7]"
                >
                  View All <FiArrowDown className="ml-2 rotate-90" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {videos.map((video, i) => (
                  <motion.div
                    key={i}
                    className="transform-style-3d overflow-hidden rounded-2xl bg-white shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => openVideo(video.url)}
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
  {/* Video thumbnail as background */}
  <img
    src={video.thumbnail}
    alt="Video Thumbnail"
    className="h-full w-full object-cover"
  />

  {/* Play button overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="transform-style-3d rounded-full bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] p-4 shadow-xl transition-all hover:scale-110">
      <FiPlay size={24} className="text-white" />
    </div>
  </div>
</div>

                    <div className="p-5">
                      <h3 className="mb-2 text-lg font-bold text-gray-800">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-lg text-white"
            >
              Close
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-800">
              <iframe 
                src={activeVideo.replace("watch?v=", "embed/")}
                className="h-full w-full"
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