// app/history/page.js
'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiMapPin, FiClock } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
export default function HistoryPage() {
  const router = useRouter();
  const [expandedPlace, setExpandedPlace] = useState(null);

  // Historical places data
  const historicalPlaces = [
    {
      id: 1,
      title: "Deoria Tal",
      location: "Near Bhatwari Village",
      era: "Ancient Times",
      description: "Deoria Tal is a sacred lake with mythological significance dating back to the Mahabharata era. According to legend, the Pandavas were questioned by Yaksha at this very lake during their exile. The crystal-clear waters reflect the surrounding Chaukhamba peaks and are considered holy by locals.",
      detailed: "The lake is situated at an altitude of 2,438 meters and is surrounded by lush forests. Archaeological findings around the lake suggest human activity dating back to the 2nd century BCE. The site was an important stop on ancient trade routes between the plains and the Himalayas.",
      images: 3
    },
    {
      id: 2,
      title: "Rudrapur Fort",
      location: "Rudrapur",
      era: "16th Century",
      description: "Built by the Rajput rulers in the early 16th century, Rudrapur Fort served as a strategic military outpost guarding the trade routes to Nepal. The fort withstood multiple invasions and witnessed several historical battles during Mughal expansion.",
      detailed: "The fort's architecture combines Rajput and Mughal styles, with intricate carvings still visible on its remaining walls. It features a unique water harvesting system and underground chambers that served as emergency shelters. The fort was partially destroyed during the 1857 uprising but remains an important symbol of resistance.",
      images: 2
    },
    {
      id: 3,
      title: "Ancient Buddhist Stupa",
      location: "Bhatpar Rani",
      era: "3rd Century BCE",
      description: "Discovered in 1927, this ancient stupa dates back to the Mauryan period and provides evidence of Buddhism's early spread in Eastern Uttar Pradesh. The site contains relics and inscriptions in Brahmi script.",
      detailed: "Excavations revealed a complex with multiple meditation cells and a central stupa. Archaeologists found terracotta figurines, coins from the Kushan period, and pottery shards indicating continuous habitation for centuries. The site was an important center for Buddhist learning until the 12th century.",
      images: 4
    },
    {
      id: 4,
      title: "Chandradeep Temple",
      location: "Salempur",
      era: "9th Century",
      description: "Dedicated to Lord Shiva, this temple is renowned for its unique architectural style featuring lunar symbolism. The temple complex once housed a renowned Vedic school attracting scholars from across India.",
      detailed: "The temple's main shrine is aligned such that the first rays of the full moon illuminate the Shiva lingam. Its walls feature detailed carvings depicting scenes from the Puranas. The complex includes 108 smaller shrines representing the lunar cycle. The temple was damaged during Mughal invasions but restored in the 18th century.",
      images: 3
    },
    {
      id: 5,
      title: "Colonial Era Railway Station",
      location: "Deoria Sadar",
      era: "1885",
      description: "Built during British colonial rule, this railway station was a crucial junction connecting Gorakhpur to Nepal border. The architecture features Victorian design with local materials, symbolizing colonial industrial expansion.",
      detailed: "The station played a vital role in the indigo trade and later in World War II troop movements. Its unique features include a cast-iron footbridge and original ticket counters with teak wood paneling. The station was a center of activity during the independence movement, witnessing several protests.",
      images: 2
    },
    {
      id: 6,
      title: "Baba Raghavdas Ashram",
      location: "Barhaj",
      era: "Early 18th Century",
      description: "Established by the renowned Bhakti saint Baba Raghavdas, this ashram became a center for spiritual learning and social reform. The saint composed several devotional works here that influenced regional culture.",
      detailed: "The ashram complex includes a 300-year-old banyan tree under which the saint would teach. It houses a library with ancient manuscripts and a unique temple with no doors, symbolizing openness to all. The ashram played a key role in the Bhakti movement, promoting social equality through devotional practices.",
      images: 3
    },
    {
      id: 7,
      title: "Freedom Fighters' Memorial",
      location: "Deoria City Center",
      era: "Post-Independence",
      description: "This memorial honors the brave souls from Deoria who participated in India's freedom struggle. It features sculptures depicting key moments from the Quit India Movement in the region.",
      detailed: "The memorial complex includes a museum with personal belongings of local freedom fighters, letters written from prison, and photographs of protests. The central sculpture shows farmers breaking chains, symbolizing their role in the independence movement. An eternal flame burns in memory of those who sacrificed their lives.",
      images: 2
    },
    {
      id: 8,
      title: "Ancient Stepwell",
      location: "Bhatni",
      era: "12th Century",
      description: "This intricately designed stepwell served as both a water reservoir and community gathering place. Its walls feature carvings depicting daily life from the medieval period.",
      detailed: "The stepwell descends five levels with over 100 steps, featuring carved niches where oil lamps would illuminate the structure. Architectural studies show influences from both North and South Indian styles. It remained in continuous use until the 1950s and is considered an engineering marvel of its time.",
      images: 4
    },
    {
      id: 9,
      title: "Gandhi Ashram",
      location: "Lar Road",
      era: "1934",
      description: "Established during Mahatma Gandhi's visit to earthquake-affected areas, this ashram became a center for khadi production and social reform. Gandhi stayed here for two weeks in 1934.",
      detailed: "The ashram maintains the original charkhas (spinning wheels) used by Gandhi and local villagers. It features a museum with photographs of Gandhi's visit and letters he wrote during his stay. The ashram continues to promote Gandhian principles through educational programs and khadi production.",
      images: 3
    },
    {
      id: 10,
      title: "Surya Kund",
      location: "Bhatpar Rani",
      era: "Gupta Period (4th-6th Century)",
      description: "This ancient sun temple complex features a sacred tank where water maintains constant temperature year-round. The site was an important center for astronomical studies.",
      detailed: "The complex includes alignments that mark solstices and equinoxes, showing advanced astronomical knowledge. The main temple features carvings of Surya (sun god) in his chariot. Inscriptions indicate it was a pilgrimage site for sun worshipers from as far as Persia. The water from the kund is believed to have medicinal properties.",
      images: 3
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4]">
          <Sidebar />
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F24] via-[#1C1F24]/90 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/history-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-start px-6 md:px-12 max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Historical <span className="text-[#dd7358]">Heritage</span> of Deoria
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl text-[#c5c1b8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore the rich tapestry of Deoria's past through its ancient sites and monuments
          </motion.p>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="py-8 px-4 bg-[#25282F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Journey Through Time</h2>
          <div className="flex overflow-x-auto pb-4 scrollbar-hide">
            {['Ancient (Pre-1000 CE)', 'Medieval (1000-1800 CE)', 'Colonial Era', 'Post-Independence'].map((era, index) => (
              <button
                key={index}
                className="flex-shrink-0 mx-2 px-6 py-3 bg-[#1C1F24] rounded-lg hover:bg-[#dd7358] transition-colors"
              >
                {era}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Places Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {historicalPlaces.map((place) => (
            <motion.div
              key={place.id}
              className={`bg-[#25282F] rounded-xl overflow-hidden shadow-xl border-2 ${
                expandedPlace === place.id 
                  ? 'border-[#dd7358]' 
                  : 'border-transparent hover:border-[#dd7358]/50'
              } transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Place Header */}
              <div className="p-5 border-b border-[#3a3e46]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{place.title}</h3>
                    <div className="flex items-center text-[#c5c1b8] text-sm mb-2">
                      <FiMapPin className="mr-1" />
                      <span>{place.location}</span>
                    </div>
                    <div className="flex items-center text-[#dd7358] text-sm">
                      <FiClock className="mr-1" />
                      <span>{place.era}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Place Images */}
              <div className="relative h-48 overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  <div className="bg-gray-700 border border-[#3a3e46]"></div>
                  <div className="grid grid-rows-2">
                    <div className="bg-gray-600 border border-[#3a3e46]"></div>
                    <div className="bg-gray-800 border border-[#3a3e46]"></div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm">
                  +{place.images} images
                </div>
              </div>
              
              {/* Place Description */}
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
                  
                  <button
                    className="flex items-center text-sm bg-[#dd7358] hover:bg-[#c45a40] px-3 py-1 rounded transition-colors"
                    onClick={() => router.push(`/history/${place.id}`)}
                  >
                    View details <FiArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-12 text-center">
          <button
            className="px-6 py-3 bg-[#dd7358] hover:bg-[#c45a40] rounded-lg font-medium transition-colors"
            onClick={() => router.push('/history/all')}
          >
            View All Historical Places
          </button>
        </div>
      </div>

      {/* Historical Significance Section */}
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
            <button 
              className="px-6 py-3 bg-transparent border border-[#dd7358] text-[#dd7358] hover:bg-[#dd7358]/10 rounded-lg font-medium transition-colors"
              onClick={() => router.push('/tours')}
            >
              Join a Heritage Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}