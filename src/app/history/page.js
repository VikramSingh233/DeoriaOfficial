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
  // This would come from your database:
// const historicalPlaces = [
//     {
//       id: 1,
//       title: "Hanuman Mandir",
//       location: "Raghav Nagar Deoria",
//       description: "Hanuman Mandir in Deoria is a wonderful place to spend time with your loved ones. It’s not just a great site to go sightseeing, but it’s also a great place to indulge in some self-indulgence. Hanuman Mandir is one of Deoria’s’siddh’ sites and is located in Raghav Nagar.",
//       detailed: "Hanuman Mandir in Deoria is a wonderful place to spend time with your loved ones. It’s not just a great site to go sightseeing, but it’s also a great place to indulge in some self-indulgence. Hanuman Mandir is one of Deoria’s’siddh’ sites and is located in Raghav Nagar. Every Tuesday, a big number of followers may be seen. It is surrounded by a large pond where you may witness a variety of fish. The Hanuman Mandir in Deoria is a great place to unwind and rejuvenate after a long week. Discover intriguing themes, fantastic designs, beautiful landscapes, hilarious characters, ambient music, props, and items available in nearby stores- all in one spot.",
//       images: [
//         "https://example.com/image1.jpg",
//         "https://example.com/image2.jpg",
//         "https://example.com/image3.jpg"
//       ]
//     },
//     {
//       id: 2,
//       title: "Dugdheswar Mandir",
//       location: "Rudrapur",

//       description: "Dugdheswar Mandir is a popular pilgrimage site in the north-east. It is one of the old historical ‘Shiv’ temples located around 2 kilometres north of Rudrapur. There are various different kinds of assumptions regarding this Mandir. It is also assumed that this Mandir was founded by Rudrapur Maharaja, where he previously worked.",
//       detailed: "Dugdheswar Mandir is a popular pilgrimage site in the north-east. It is one of the old historical ‘Shiv’ temples located around 2 kilometres north of Rudrapur. There are various different kinds of assumptions regarding this Mandir. It is also assumed that this Mandir was founded by Rudrapur Maharaja, where he previously worked. This Mandir is located near the 20 Acer Area. Discover fascinating themes and stunning natural designs here. This is the Dugdheshwar Nath (Lord Shiva) temple in Rudrapur, Deoria District, Uttar Pradesh, India.",
//       images: [
//         "https://example.com/image1.jpg",
//         "https://example.com/image2.jpg",
//         "https://example.com/image3.jpg"
//       ]
//     },
//     {
//       id: 3,
//       title: "Deoraha Baba Ashram",
//       location: "Bharhaj",
//       // era: "3rd Century BCE",
//       description: "Deoraha Baba AAshram is located in the village of Mayil on the banks of the Saryu River in the barhaj Tehsil of Deoria. Deoraha baba, the holy ascetic and hermit, was one of India’s greatest Yogis. He was the 11th after Ramanuja Achrya, who blessed and taught numerous saints, yogis, priests, rich and poor people. Baba Devraha (died 19 May 1990)",
//       detailed: "Deoraha Baba AAshram is located in the village of Mayil on the banks of the Saryu River in the barhaj Tehsil of Deoria. Deoraha baba, the holy ascetic and hermit, was one of India’s greatest Yogis. He was the 11th after Ramanuja Achrya, who blessed and taught numerous saints, yogis, priests, rich and poor people. Baba Devraha (died 19 May 1990)",
//       images: [
//         "https://example.com/image1.jpg",
//         "https://example.com/image2.jpg",
//         "https://example.com/image3.jpg"
//       ]
//     },
//     {
//       id: 4,
//       title: "Durga Mandir",
//       location: "Kasia Road",
//       // era: "9th Century",
//       description: "A ‘Durga Mandir’ can be found on Kasia Road, near SOMNATH MANDIR in Deoria. It is a Goddess DURGA Temple where it is assumed that everything you wish for would come true. DEORAHI MANDIR, Deoria is an ideal location for spending quality time with your loved ones. Enjoy the Blessings and Attractions of this well-known Temple.",
//       detailed: "A ‘Durga Mandir’ can be found on Kasia Road, near SOMNATH MANDIR in Deoria. It is a Goddess DURGA Temple where it is assumed that everything you wish for would come true. DEORAHI MANDIR, Deoria is an ideal location for spending quality time with your loved ones. Enjoy the Blessings and Attractions of this well-known Temple. With so much to entice your senses and provide you with the ultimate leisure, get drenched in the spirit of adventure that you get to enjoy at DEORAHI MANDIR, Deoria.",
//       images: [
//         "https://example.com/image1.jpg",
//         "https://example.com/image2.jpg",
//         "https://example.com/image3.jpg"
//       ]
//     },

//   ];


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

  if (loading) return <p>Loading...</p>;
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
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4]">
      <Sidebar />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F24] via-[#1C1F24]/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/history-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-12 max-w-6xl mx-auto">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Historical <span className="text-[#dd7358]">Heritage</span> of Deoria
          </motion.h1>
          <motion.p className="text-xl md:text-2xl max-w-3xl text-[#c5c1b8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore the rich tapestry of Deoria's past through its ancient sites and monuments
          </motion.p>
        </div>
      </div>

      {/* Historical Places Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {histories.map((place) => (
            <motion.div key={place.id}
              className={`bg-[#25282F] rounded-xl overflow-hidden shadow-xl border-2 ${expandedPlace === place.id ? 'border-[#dd7358]' : 'border-transparent hover:border-[#dd7358]/50'} transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-5 border-b border-[#3a3e46]">
                <h3 className="text-xl font-bold mb-1">{place.title}</h3>
                <div className="flex items-center text-[#c5c1b8] text-sm">
                  <FiMapPin className="mr-1" />
                  <span>{place.location}</span>
                </div>
              </div>

              <div className="relative h-48 overflow-hidden rounded-xl cursor-pointer" onClick={() => openModal(place.images, 0)}>
                <div className="grid grid-cols-2 h-full gap-0.5">
                  <img src={place.images[0]} alt="Main image" className="w-full h-full object-cover border border-[#3a3e46]" />
                  <div className="grid grid-rows-2 gap-0.5">
                    {place.images[1] && <img src={place.images[1]} alt="Top right image" className="w-full h-full object-cover border border-[#3a3e46]" />}
                    {place.images[2] && <img src={place.images[2]} alt="Bottom right image" className="w-full h-full object-cover border border-[#3a3e46]" />}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm text-white">
                  +{place.images.length} images
                </div>
              </div>

              <div className="p-5">
                <p className="text-[#c5c1b8] mb-4">
                  {expandedPlace === place.id ? place.detailed : place.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    className="text-[#dd7358] hover:underline flex items-center text-sm"
                    onClick={() => setExpandedPlace(expandedPlace === place.id ? null : place.id)}
                  >
                    {expandedPlace === place.id ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
            <FiX />
          </button>
          <button className="absolute left-4 text-white text-3xl" onClick={prevImage}>
            <FiChevronLeft />
          </button>
          <img src={currentImages[currentIndex]} alt="Popup image" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg" />
          <button className="absolute right-4 text-white text-3xl" onClick={nextImage}>
            <FiChevronRight />
          </button>
        </div>
      )}

       <div className="bg-[#25282F] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Deoria Through the Ages</h2>
            <div className="w-24 h-1 bg-[#dd7358] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#1C1F24] p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#dd7358]">Ancient Period</h3>
              <p className="text-[#c5c1b8]">
                Deoria's history traces back to the Vedic period when it was part of the Kosala Kingdom.
                Archaeological finds indicate settlements dating to 1000 BCE. The region flourished under
                Buddhist influence during the Mauryan Empire.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1C1F24] p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#dd7358]">Medieval Era</h3>
              <p className="text-[#c5c1b8]">
                During medieval times, Deoria was ruled by various dynasties including the Palas,
                Senas, and later the Mughals. The region became an important agricultural and
                trading center, with several temples and forts constructed during this period.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1C1F24] p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-[#dd7358]">Modern History</h3>
              <p className="text-[#c5c1b8]">
                Deoria played a significant role in India's independence movement. The district
                witnessed active participation in the Non-Cooperation Movement and Quit India Movement.
                Post-independence, Deoria has developed into an important agricultural and educational hub.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Preserving Our Heritage</h2>
          <p className="text-xl text-[#c5c1b8] mb-8 max-w-3xl mx-auto">
            Help us document and preserve Deoria's historical treasures for future generations.
            Share your stories, photographs, or historical artifacts with our research team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-[#dd7358] hover:bg-[#c45a40] rounded-lg font-medium transition-colors">
              Contribute Historical Materials
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}




     