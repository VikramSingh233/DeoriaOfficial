// 'use client'
// import { motion } from 'framer-motion';
// import { useState, useEffect, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';
// import Sidebar from '@/components/Sidebar';
// import FeatureBox from '@/components/FeatureBox';
// import SectionCard from '@/components/SectionCard';
// import SectionCardPlace from '@/components/SectionCardPlace';
// import Footer from '@/components/Footer';
// import { useRouter } from 'next/navigation';
// import {
//   FiShoppingBag,
//   FiMap,
//   FiHeadphones,
//   FiInstagram,
//   FiArrowDown,
//   FiBook,
//   FiCalendar,
//   FiStar,
//   FiMapPin,
//   FiPhone
// } from 'react-icons/fi';


// export default function Home() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const contentRef = useRef(null);

//   const { ref: heroRef, inView: heroInView } = useInView({
//     threshold: 0.1,
//   });
//   const router = useRouter();


//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToContent = () => {
//     contentRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Dummy data for each section
//   const shops = Array(5).fill().map((_, i) => ({
//     id: i + 1,
//     title: `Shop ${i + 1}`,
//     description: `Discover unique local products at our featured shop ${i + 1} in Deoria.`
//   }));

//   const places = Array(5).fill().map((_, i) => ({
//     id: i + 1,
//     title: `Place ${i + 1}`,
//     description: `Explore the hidden gem of Deoria at this beautiful location ${i + 1}.`
//   }));
// function convertDriveUrlToPreview(url) {
//   const match = url.match(/\/file\/d\/([^/]+)\//);
//   if (match && match[1]) {
//     const fileId = match[1];
//     return `https://drive.google.com/file/d/${fileId}/preview`;
//   }
//   return null; // invalid URL
// }

//   const podcasts = [

//   {
//     id: 1,
//     title: "Rajesh Singh Dayal — Seva, Sankalp aur Sangharsh |",
//     description: `
// The Other Side of Vaibhav Mishra में हमारे खास मेहमान हैं राजेश सिंह दयाल, जिन्हें लोग प्यार से 'Medicine Man of UP' कहते हैं। From spiritual inspirations to ground-level activism, from running successful businesses to leading massive social welfare drives — this episode dives deep into the real story behind the public image.`,
//     image:convertDriveUrlToPreview("https://drive.google.com/file/d/1FRR7DBJTd4kcBZYMUKldfILUOyXcOhq2/view?usp=drivesdk"),
//     link: "https://youtu.be/xqCsYb-VOhA?si=VEUEkGiyvo1Q3xUj",
//     guest: "Rajesh Singh Dayal"
//   }


//   // {
//   //     id: 2,
//   //     title: "Podcast 2",
//   //     description: "Listen to our podcast about local products and hidden gems of Deoria.",
//   //     image: "https://via.placeholder.com/150",
//   // },
//   // {
//   //     id: 3,
//   //     title: "Podcast 3",
//   //     description: "Listen to our podcast about local products and hidden gems of Deoria.",
//   //     image: "https://via.placeholder.com/150",
//   // },

// ]

//   const socials = Array(5).fill().map((_, i) => ({
//     id: i + 1,
//     title: `Social Media ${i + 1}`,
//     description: `Connect with our community and stay updated on the latest events.`
//   }));

//   return (
//     <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4] overflow-x-hidden">
//       <Sidebar />

//       <section
//         ref={heroRef}
//         className="min-h-screen flex flex-col justify-center items-center px-4 relative"
//       >
//         <div className="text-center max-w-5xl z-10">
//           <motion.h1
//             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Discover <span className="text-[#dd7358]">Deoria</span>
//           </motion.h1>
//           <motion.h2
//             className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             Hidden Gem of Purvanchal
//           </motion.h2>

//           <motion.p
//             className="text-xl md:text-2xl max-w-2xl mx-auto text-[#c5c1b8] mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             Explore the rich culture, heritage, and beauty of Deoria district in Eastern Uttar Pradesh
//           </motion.p>
//         </div>

//         <motion.div
//           className={`absolute bottom-12 transition-opacity duration-500 ${heroInView ? 'opacity-100' : 'opacity-0'}`}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 1 }}
//           onClick={scrollToContent}
//         >
//           <motion.div
//             className="flex flex-col items-center cursor-pointer"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <span className="mb-2 text-sm">Explore More</span>
//             <FiArrowDown size={28} className="text-[#ff7e5f]" />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Content starts here */}
//       <div ref={contentRef} className="relative z-10">
//         {/* Feature Boxes Section */}
//         <section className=" py-20 px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold mb-16 text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               Explore Deoria
//             </motion.h2>

//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, staggerChildren: 0.1 }}
//             >

//               <FeatureBox
//                 title="History"
//                 description="Explore Deoria's rich past"
//                 icon={<FiBook size={28} />}
//                 href="#history"
//                 delay={0.5}
//               />
//               <FeatureBox
//                 title="Festivals"
//                 description="Celebrate local traditions"
//                 icon={<FiCalendar size={28} />}
//                 href="#festivals"
//                 delay={0.6}
//               />
//               <FeatureBox
//                 title="Shops"
//                 description="Discover local shops and businesses"
//                 icon={<FiShoppingBag size={28} />}
//                 href="#shops"
//                 delay={0.1}
//               />
//               <FeatureBox
//                 title="Places"
//                 description="Explore beautiful places in Deoria"
//                 icon={<FiMap size={28} />}
//                 href="#places"
//                 delay={0.2}
//               />
//               <FeatureBox
//                 title="Podcasts"
//                 description="Listen to stories about Deoria"
//                 icon={<FiHeadphones size={28} />}
//                 href="#podcast"
//                 delay={0.3}
//               />
//               <FeatureBox
//                 title="Social Media"
//                 description="Connect with us on social platforms"
//                 icon={<FiInstagram size={28} />}
//                 href="#social"
//                 delay={0.4}
//               />
//             </motion.div>
//           </div>
//         </section>


//         <section id="history" className="py-20 px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-center justify-between mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Historical Heritage</h2>
//                 <button
//                   onClick={() => router.push('/history')}
//                   className="text-[#ff7e5f] hover:underline cursor-pointer"
//                 >
//                   View All →
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-6">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <p className="text-lg text-[#c5c1b8] mb-6">
//                       Current area of this district was a part of ‘Koshal rajya’- a prime centre of ancient’arya culture’ surrounded by Himalaya in north, Shyandika river in south, ‘Panchal rajya’ in west & Maghadh rajya in (Bihar) east. Besides many fictions related with this area, astro-historical fossils (‘murtee’,coins,bricks, temples,Budh math etc.) are found at many places of this district, showing that there was a developed & organised society long long ago. Ancient history of the district is related with the Ramayan times when ‘Koshal Naresh’ lord Ram appointed his elder son ‘Kush’ , the king of Kushawati- which is todays Kushinagar.
//                     </p>
//                     <p className="text-lg text-[#c5c1b8] mb-6">
//                       Before Mahabharat times,this area was related with Chakravorty Samrat ‘Mahasudtsan’ & his kingdom ‘kushinagar’ was well developed & prosperous.Nearby to his rajya border was the thick area woods ‘Maha-van’. This area was under control of Maurya rulers,Gupta rulers & Bhar rulers , and then under control of Gharwal ruler ‘Govind Chandra’ from year -1114 to year- 1154. This area was under control of Avadh rulers or of Bihar Muslim rulers during Medieval times,is not very clear.
//                     </p>
//                     <p className="text-lg text-[#c5c1b8] mb-6">
//                     There was little control of oldest Delhi rulers – Sultan , Nizam or Khilji’s on this region. There is no description of this area in east war/attack/invasion scripts by muslim historians meaningby muslim invaders would have seldom visited thick wood area of this region. Many places of this district played an important role in the modern history of this district.Important ones are- Paina, Baikuntpur, Berhaj, Lar, Rudrapur, Hata, Kasia, Gauribazar, Kaptanganj, Udhopur, Tamkuhi, Basantpur Dhoosi etc.
//                     </p>
//                     <p className="text-lg text-[#c5c1b8] mb-6">
//                      Gandhiji addressed Deoria & Padrauna public meetings in 1920.Baba Raghav Das had started movement in april’ 1930 regarding ‘NamakMovement’. In 1931,there were wide movement against government & landlords in this district. Many more people joined Congress as volunteers & marched several places of the district.Sh.Purushottam Das Tondon in 1931 & Rafi Ahmad Kidwai in 1935 visited different places of this district. During Quit India Movement , as much as 580 people were sent behind the bar for different duration. Deoria District came into existence at March 16′ 1946 from Gorakhpur district.
//                     </p>
//                     <p className="text-lg text-[#c5c1b8] mb-6">
//                      The name DEORIA is derived from ‘Devaranya’ or probably ‘Devpuria’ as believed. According to official gazzettes,the district name ‘deoria’ is taken by its headquarter name ‘Deoria’ and the term deoria generally means a place where there are temples. Deoria name developed by a fossil(broken) Shiva Temple by the side of ‘kurna river’ in its northside. Kushinagar (Padrauna) district came into existence in 1994 ‘ MAY by separating north-east portion of Deoria district.
//                     </p>
                  
//                   </motion.div>
//                 </div>

// <div className="grid grid-cols-2 gap-4">
//   {[
//     {
//       name: "Sri Tirupati Balaji Mandir",
//       imageUrl: "https://edge.ixigo.com/ixi-api/img/5283bcc2411150b759000006_600x315.jpg"
//     },
//     {
//       name: "Hanuman Mandir",
//       imageUrl: "https://cdn.s3waas.gov.in/s39872ed9fc22fc182d371c3e9ed316094/uploads/bfi_thumb/2018061144-olwaon3zbt5ru1vmp6j9sc9a9eldat5y4l68mcyc96.jpg"
//     },
//     {
//       name: "Dugdheswarnath mandir",
//       imageUrl: "https://cdn.s3waas.gov.in/s39872ed9fc22fc182d371c3e9ed316094/uploads/bfi_thumb/2018061187-olwapmtujiio38fqwlz3f38su1pbfb3qxhyouvhdoq.jpg"
//     },
//     {
//       name: "Dewarahababa Kuti",
//       imageUrl: "https://cdn.s3waas.gov.in/s39872ed9fc22fc182d371c3e9ed316094/uploads/bfi_thumb/2018061168-olwapmtujiio38fqwlz3f38su1pbfb3qxhyouvhdoq.jpg"
//     },
//     {
//       name: "Historical Site 5",
//       imageUrl: "https://chaloghumane.com/wp-content/uploads/2021/08/Balaji-Mandir-Deoria.jpg"
//     },
//     {
//       name: "Historical Site 6",
//       imageUrl: "http://www.realbharat.org/wp-content/uploads/2015/12/Sarnath_Buddhist_temple_wk1.jpg"
//     },
//     {
//       name: "Historical Site 7",
//       imageUrl: "https://www.dreamtrix.com/wp-content/uploads/2022/11/Temple-in-Uttar-Pradesh-930x620.jpeg"
//     },
//     {
//       name: "Somnath mandir",
//       imageUrl: "https://4.bp.blogspot.com/-tEfGxeGpeKg/UVLmHIB2yPI/AAAAAAAAAA8/i83Md_PM2lU/s1600/Baba-somnath-mandir.jpg"
//     }
//   ].map((site, index) => (
//     <motion.div
//       key={index}
//       className="relative h-64 rounded-xl overflow-hidden"
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <img
//         src={site.imageUrl}
//         alt={site.name}
//         className="w-full h-full object-cover rounded-xl"
//       />
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//         <h3 className="font-bold text-white">{site.name}</h3>
//       </div>
//     </motion.div>
//   ))}
// </div>

//               </div>
//             </motion.div>
//           </div>
//         </section>


//         <section id="festivals" className="py-20 px-4 bg-[#25282F]/50">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-center justify-between mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Cultural Festivals</h2>

//               </div>

//              <div className="space-y-12">
//   {[
//     {
//       name: "Chhath Puja",
//       description: "The most significant festival in Deoria, celebrated with great devotion to the Sun God. People gather at riverbanks before sunrise with offerings in bamboo baskets.",
//       imageUrl: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/10/28110118/Chhath-Puja-celebrations-begins.png"
//     },
//     {
//       name: "Deoria Mahotsav",
//       description: "Annual cultural festival showcasing local art, music, and dance. Features traditional crafts exhibitions and folk performances.",
//       imageUrl: "https://www.xaviersbhatparrani.com/SliderImage/2214110210.jpeg"
//     },
//     {
//       name: "Holi",
//       description: "Celebrated with unique local traditions using natural colors and special sweets. Features community gatherings and cultural programs.",
//       imageUrl: "https://www.gktoday.in/wp-content/uploads/2023/03/holi.jpg"
//     },
//     {
//       name: "Diwali",
//       description: "Illuminated with thousands of diyas and fireworks. Special markets spring up selling traditional sweets and decorations.",
//       imageUrl: "https://storage.googleapis.com/tc46storage/2022/10/870fb52e-hero-2022-10-19t172646.373.jpg"
//     },
//     {
//       name: "Eid-ul-Fitr",
//       description: "Celebrated with communal harmony, featuring special prayers at historical mosques and sharing of festive delicacies.",
//       imageUrl: "https://hips.hearstapps.com/hmg-prod/images/eid-al-fitr-meaning-1649103496.jpg"
//     }
//   ].map((festival, index) => (
//     <motion.div
//       key={index}
//       className="flex flex-col md:flex-row gap-6 items-center"
//       initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <div className="w-full md:w-1/3">
//         <img
//           src={festival.imageUrl}
//           alt={festival.name}
//           className="rounded-xl w-full h-64 object-cover border-2 border-gray-300"
//         />
//       </div>
//       <div className="w-full md:w-2/3">
//         <h3 className="text-2xl font-bold mb-2">{festival.name}</h3>
//         <p className="text-lg text-[#c5c1b8]">{festival.description}</p>
//       </div>
//     </motion.div>
//   ))}
// </div>

//             </motion.div>
//           </div>
//         </section>


//         {/* Shops Section */}
//         <section id="shops" className="py-20 px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-center justify-between mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Featured Shops</h2>
//                 <button
//                   onClick={() => router.push('/shops')}
//                   className="text-[#ff7e5f] hover:underline cursor-pointer">View All →</button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//                                 {shops.map((shop) => (
//                                   <motion.div
//                                    key={`${shop.id ?? ''}-${shop.name}`}
//                                     className="bg-[#25282F] rounded-xl overflow-hidden shadow-lg border border-[#3a3e46] hover:border-[#dd7358]/50 transition-all"
//                                     whileHover={{ y: -5 }}
//                                   >
//                                     <div className="h-40 bg-gray-700 relative">
//                                       <div className="absolute top-2 right-2 bg-[#dd7358] text-white px-2 py-1 rounded-md flex items-center text-sm">
//                                         <FiStar className="mr-1" /> {shop.rating}
//                                       </div>
//                                     </div>
//                                     <div className="p-4">
//                                       <h3 className="font-bold text-lg mb-1">{shop.name}</h3>
//                                       <div className="flex items-center text-[#c5c1b8] text-sm mb-2">
//                                         <FiMapPin className="mr-2 " />
//                                         <span>{shop.location}</span>
                                      
//                                       </div>
//                                       <p className="text-[#dd7358] text-sm mb-3">Best for: {shop.bestFor}</p>
//                                       <div className="flex justify-between items-center mt-4">
//                                         <div className="flex items-center">
//                                           <FiPhone className="mr-2 text-[#dd7358]" />
//                                           <span>{shop.contactNo}</span>
//                                         </div>
//                                         {/* <button className="text-[#dd7358] hover:underline text-sm">
//                                           Directions
//                                         </button> */}
                                  
                                        
//                                       </div>
//                 { (shop.watchExperience) && <div 
//                 onClick={() => router.push(shop.watchExperience)} 
//                 className="flex items-center mt-3 justify-between text-gray-100 font-bold cursor-pointer hover:underline  text-center"
//               >
//                 Watch Experience
//               </div>
// }
//                                     </div>
//                                   </motion.div>
//                                 ))}
//                               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Places Section */}
//         <section id="places" className="py-20 px-4 bg-[#25282F]/50">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-center justify-between mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Popular Places</h2>
//                 <button
//                   onClick={() => router.push('/places')}
//                   className="text-[#ff7e5f] hover:underline cursor-pointer">View All →</button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {places.map((place, index) => (
//                   <SectionCardPlace
//                     key={place.id}
//                     title={place.title}
//                     description={place.description}
//                     delay={index * 0.1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Podcasts Section */}
//         <section id="podcast" className="py-20 px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-center justify-between mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Latest Podcasts</h2>
//                 <button
//                   onClick={() => router.push('/podcasts')}
//                   className="text-[#ff7e5f] hover:underline cursor-pointer ">View All →</button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {podcasts.map((podcast, index) => (
//                   <SectionCard
//                     key={podcast.id}
//                     title={podcast.title}
//                     description={podcast.description}
//                     link={podcast.link}
//                     guest={podcast.guest}
//                     image={podcast.image}
//                     delay={index * 0.1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Social Media Section */}
//         {/* <section id="social" className="py-20 px-4 bg-[#25282F]/50">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-center justify-between mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold">Social Media</h2>
//                 <button
//                   onClick={() => router.push('/social')}
//                   className="text-[#ff7e5f] hover:underline">View All →</button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {socials.map((social, index) => (
//                   <SectionCard
//                     key={social.id}
//                     title={social.title}
//                     description={social.description}
//                     delay={index * 0.1}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </section> */}
//       </div>

//       {/* Floating background elements */}
//       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full opacity-5"
//             style={{
//               width: `${Math.random() * 100 + 50}px`,
//               height: `${Math.random() * 100 + 50}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               backgroundColor: '#ff7e5f',
//             }}
//             animate={{
//               x: [0, Math.random() * 100 - 50],
//               y: [0, Math.random() * 100 - 50],
//             }}
//             transition={{
//               duration: 20 + Math.random() * 30,
//               repeat: Infinity,
//               repeatType: 'reverse',
//             }}
//           />
//         ))}
//       </div>
//       <div>

//         <Footer />
//       </div>
//     </div>

//   );
// }






'use client'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Sidebar from '@/components/Sidebar';
import FeatureBox from '@/components/FeatureBox';
import SectionCard from '@/components/SectionCard';
import SectionCardPlace from '@/components/SectionCardPlace';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
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
  FiPhone
} from 'react-icons/fi';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
function convertDriveUrlToPreview(url) {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return null; // invalid URL
}

  const podcasts = [

  {
    id: 1,
    title: "Rajesh Singh Dayal — Seva, Sankalp aur Sangharsh |",
    description: `
The Other Side of Vaibhav Mishra में हमारे खास मेहमान हैं राजेश सिंह दयाल, जिन्हें लोग प्यार से 'Medicine Man of UP' कहते हैं। From spiritual inspirations to ground-level activism, from running successful businesses to leading massive social welfare drives — this episode dives deep into the real story behind the public image.`,
    image:convertDriveUrlToPreview("https://drive.google.com/file/d/1FRR7DBJTd4kcBZYMUKldfILUOyXcOhq2/view?usp=drivesdk"),
    link: "https://youtu.be/xqCsYb-VOhA?si=VEUEkGiyvo1Q3xUj",
    guest: "Rajesh Singh Dayal"
  }


  // {
  //     id: 2,
  //     title: "Podcast 2",
  //     description: "Listen to our podcast about local products and hidden gems of Deoria.",
  //     image: "https://via.placeholder.com/150",
  // },
  // {
  //     id: 3,
  //     title: "Podcast 3",
  //     description: "Listen to our podcast about local products and hidden gems of Deoria.",
  //     image: "https://via.placeholder.com/150",
  // },

]
  // Dummy data remains the same...

  return (
    <div className="min-h-screen bg-[#0f1116] text-[#fffaf4] overflow-x-hidden">
      <Sidebar />

      {/* 3D Parallax Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: '#dd7358',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating 3D Islands */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-2xl bg-gradient-to-br from-[#dd7358]/20 to-[#ff7e5f]/10 backdrop-blur-sm border border-[#ffffff10]"
            style={{
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 10}px)`,
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, Math.random() * 10 - 5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section with 3D effect */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F24] to-[#0a0c10] opacity-90 z-0"></div>
        
        <motion.div 
          className="text-center max-w-5xl z-10"
          style={calculate3DTransform(5)}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]"
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            Discover <span className="text-[#dd7358]">Deoria</span>
          </motion.h1>
          
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -inset-4 bg-[#dd7358] rounded-full blur-xl opacity-30 z-0"></div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hidden Gem of Purvanchal
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto text-[#c5c1b8] mb-12"
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
            <div className="w-12 h-12 rounded-full bg-[#dd7358]/20 flex items-center justify-center mb-2">
              <FiArrowDown size={28} className="text-[#ff7e5f]" />
            </div>
            <span className="text-sm">Explore More</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Content starts here */}
      <div ref={contentRef} className="relative z-10">
        {/* Feature Boxes Section with 3D grid */}
        <section className="py-20 px-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ perspective: '1000px' }}>
              {[
                { title: "History", description: "Explore Deoria's rich past", icon: <FiBook size={28} />, href: "#history", delay: 0.1 },
                { title: "Festivals", description: "Celebrate local traditions", icon: <FiCalendar size={28} />, href: "#festivals", delay: 0.2 },
                { title: "Shops", description: "Discover local shops and businesses", icon: <FiShoppingBag size={28} />, href: "#shops", delay: 0.3 },
                { title: "Places", description: "Explore beautiful places in Deoria", icon: <FiMap size={28} />, href: "#places", delay: 0.4 },
                { title: "Podcasts", description: "Listen to stories about Deoria", icon: <FiHeadphones size={28} />, href: "#podcast", delay: 0.5 },
                { title: "Social Media", description: "Connect with us on social platforms", icon: <FiInstagram size={28} />, href: "#social", delay: 0.6 },
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
                    transition: { duration: 0.3 }
                  }}
                  className="transform-style-3d"
                >
                  <FeatureBox
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    href={feature.href}
                    delay={feature.delay}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section with 3D layered effect */}
        <section id="history" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1d23] to-[#0f1116] opacity-80 -z-10"></div>
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
                  className="text-[#ff7e5f] hover:underline cursor-pointer"
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
                      Current area of this district was a part of ‘Koshal rajya’- a prime centre of ancient’arya culture’ surrounded by Himalaya in north, Shyandika river in south, ‘Panchal rajya’ in west & Maghadh rajya in (Bihar) east. Besides many fictions related with this area, astro-historical fossils (‘murtee’,coins,bricks, temples,Budh math etc.) are found at many places of this district, showing that there was a developed & organised society long long ago. Ancient history of the district is related with the Ramayan times when ‘Koshal Naresh’ lord Ram appointed his elder son ‘Kush’ , the king of Kushawati- which is todays Kushinagar.
                    </p>
                    <p className="text-lg text-[#c5c1b8] mb-6">
                      Before Mahabharat times,this area was related with Chakravorty Samrat ‘Mahasudtsan’ & his kingdom ‘kushinagar’ was well developed & prosperous.Nearby to his rajya border was the thick area woods ‘Maha-van’. This area was under control of Maurya rulers,Gupta rulers & Bhar rulers , and then under control of Gharwal ruler ‘Govind Chandra’ from year -1114 to year- 1154. This area was under control of Avadh rulers or of Bihar Muslim rulers during Medieval times,is not very clear.
                    </p>
                    <p className="text-lg text-[#c5c1b8] mb-6">
                    There was little control of oldest Delhi rulers – Sultan , Nizam or Khilji’s on this region. There is no description of this area in east war/attack/invasion scripts by muslim historians meaningby muslim invaders would have seldom visited thick wood area of this region. Many places of this district played an important role in the modern history of this district.Important ones are- Paina, Baikuntpur, Berhaj, Lar, Rudrapur, Hata, Kasia, Gauribazar, Kaptanganj, Udhopur, Tamkuhi, Basantpur Dhoosi etc.
                    </p>
                    <p className="text-lg text-[#c5c1b8] mb-6">
                     Gandhiji addressed Deoria & Padrauna public meetings in 1920.Baba Raghav Das had started movement in april’ 1930 regarding ‘NamakMovement’. In 1931,there were wide movement against government & landlords in this district. Many more people joined Congress as volunteers & marched several places of the district.Sh.Purushottam Das Tondon in 1931 & Rafi Ahmad Kidwai in 1935 visited different places of this district. During Quit India Movement , as much as 580 people were sent behind the bar for different duration. Deoria District came into existence at March 16′ 1946 from Gorakhpur district.
                    </p>
                    <p className="text-lg text-[#c5c1b8] mb-6">
                     The name DEORIA is derived from ‘Devaranya’ or probably ‘Devpuria’ as believed. According to official gazzettes,the district name ‘deoria’ is taken by its headquarter name ‘Deoria’ and the term deoria generally means a place where there are temples. Deoria name developed by a fossil(broken) Shiva Temple by the side of ‘kurna river’ in its northside. Kushinagar (Padrauna) district came into existence in 1994 ‘ MAY by separating north-east portion of Deoria district.
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
    {
      name: "Historical Site 5",
      imageUrl: "https://chaloghumane.com/wp-content/uploads/2021/08/Balaji-Mandir-Deoria.jpg"
    },
    {
      name: "Historical Site 6",
      imageUrl: "http://www.realbharat.org/wp-content/uploads/2015/12/Sarnath_Buddhist_temple_wk1.jpg"
    },
    {
      name: "Historical Site 7",
      imageUrl: "https://www.dreamtrix.com/wp-content/uploads/2022/11/Temple-in-Uttar-Pradesh-930x620.jpeg"
    },
    {
      name: "Somnath mandir",
      imageUrl: "https://4.bp.blogspot.com/-tEfGxeGpeKg/UVLmHIB2yPI/AAAAAAAAAA8/i83Md_PM2lU/s1600/Baba-somnath-mandir.jpg"
    }
  ].map((site, index) => (
    <motion.div
      key={index}
      className="relative h-64 rounded-xl overflow-hidden"
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

        {/* Festivals Section with 3D cards */}
        <section id="festivals" className="py-20 px-4 bg-[#25282F]/50 relative">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 -z-10"></div>
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
    {
      name: "Diwali",
      description: "Illuminated with thousands of diyas and fireworks. Special markets spring up selling traditional sweets and decorations.",
      imageUrl: "https://storage.googleapis.com/tc46storage/2022/10/870fb52e-hero-2022-10-19t172646.373.jpg"
    },
    {
      name: "Eid-ul-Fitr",
      description: "Celebrated with communal harmony, featuring special prayers at historical mosques and sharing of festive delicacies.",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/eid-al-fitr-meaning-1649103496.jpg"
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
        <img
          src={festival.imageUrl}
          alt={festival.name}
          className="rounded-xl w-full h-64 object-cover border-2 border-gray-300"
        />
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

        {/* Shops Section with 3D floating cards */}
        <section id="shops" className="py-20 px-4 relative">
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
                  className="text-[#ff7e5f] hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative" style={{ perspective: '1200px' }}>
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
                      boxShadow: '0 25px 50px -12px rgba(221, 115, 88, 0.25)',
                      transition: { duration: 0.3 }
                    }}
                    className="transform-style-3d"
                  >
                   <div className="h-40 bg-gray-700 relative">
                                      <div className="absolute top-2 right-2 bg-[#dd7358] text-white px-2 py-1 rounded-md flex items-center text-sm">
                                        <FiStar className="mr-1" /> {shop.rating}
                                      </div>
                                    </div>
                                    <div className="p-4">
                                      <h3 className="font-bold text-lg mb-1">{shop.name}</h3>
                                      <div className="flex items-center text-[#c5c1b8] text-sm mb-2">
                                        <FiMapPin className="mr-2 " />
                                        <span>{shop.location}</span>
                                      
                                      </div>
                                      <p className="text-[#dd7358] text-sm mb-3">Best for: {shop.bestFor}</p>
                                      <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center">
                                          <FiPhone className="mr-2 text-[#dd7358]" />
                                          <span>{shop.contactNo}</span>
                                        </div>
                                        {/* <button className="text-[#dd7358] hover:underline text-sm">
                                          Directions
                                        </button> */}
                                  
                                        
                                      </div>
                { (shop.watchExperience) && <div 
                onClick={() => router.push(shop.watchExperience)} 
                className="flex items-center mt-3 justify-between text-gray-100 font-bold cursor-pointer hover:underline  text-center"
              >
                Watch Experience
              </div>
}
                                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Places Section with 3D layered effect */}
        <section id="places" className="py-20 px-4 bg-[#25282F]/50 relative">
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
                  className="text-[#ff7e5f] hover:underline cursor-pointer">View All →</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {places.map((place, index) => (
                  <SectionCardPlace
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

        {/* Podcasts Section with 3D cards */}
        <section id="podcast" className="py-20 px-4 relative">
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
                  className="text-[#ff7e5f] hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative" style={{ perspective: '1000px' }}>
                {podcasts.map((podcast, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ 
                      y: -15,
                      rotateY: 5,
                      boxShadow: '0 25px 50px -12px rgba(221, 115, 88, 0.25)',
                      transition: { duration: 0.3 }
                    }}
                    className="transform-style-3d"
                  >
                    <SectionCard
                      title={podcast.title}
                      description={podcast.description}
                      link={podcast.link}
                      guest={podcast.guest}
                      image={podcast.image}
                      delay={i * 0.1}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}