

'use client'
// import { useSearchParams } from 'next/navigation';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const TicketCard = () => {
  const [isOpen, setIsOpen] = useState(false);
      useEffect(() => {
    const script = document.createElement('script');
    script.src ="https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_QqboHc9oXaLBN9");
    script.async = true;

    const form = document.getElementById("razorpay-form");
    form.appendChild(script);
  }, []);
  const ticket = {
    image: 'https://tse4.mm.bing.net/th/id/OIP._uryzMiyeYrZ62qtFKefAwHaE8?pid=Api&P=0&h=180',
    title: '✨ Dandiya night 2025',
    description: 'Join us for a night of lights, music, and memories under the stars.',
    details: `📍 Venue: Neon Grounds, Deoria
🕘 Time: 9PM - 4AM
🎧 Artists: DJ Zeno, ElectroPulse, NightWhale
🍹 Bars, Food Trucks, VIP Lounge & More`,
    price: '₹1',
  };

  return (
    <motion.div
      className="max-w-md w-full p-5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg space-y-3 relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Image src={ticket.image} alt="ticket" width={400} height={200} className="rounded-xl" />
      <h2 className="text-2xl font-bold text-white">{ticket.title}</h2>
      <p className="text-gray-200">{ticket.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{ticket.price}</span>
        <button
          onClick={() => setIsOpen(true)}
          className="text-pink-400 hover:text-pink-300 underline text-sm"
        >
          View More
        </button>
      </div>
      <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-xl transition duration-300 shadow-md">
        <form id="razorpay-form"></form>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl w-96 text-white relative">
            <button
              className="absolute top-2 right-3 text-white hover:text-red-400 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-2">{ticket.title} - Details</h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">{ticket.details}</pre>
          </div>
        </div>
      )}
    </motion.div>
  );
};


const TicketDownload = () => {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const name = searchParams.get('name')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')

  const [canDownload, setCanDownload] = useState(false)

  useEffect(() => {
    if (success === 'true' && name && email && phone) {
      setCanDownload(true)
    }
  }, [success, name, email, phone])

  const handleDownload = () => {
    const content = `
🎟️ Ticket Confirmation

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

📅 Event: Midnight Beats Festival 2025
📍 Venue: Neon Grounds, Deoria
🕘 Time: 9PM - 4AM
🎧 Artists: DJ Zeno, ElectroPulse, NightWhale

✅ Payment Status: Confirmed
    `.trim()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ticket.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!canDownload) return null

  return (
    <div className="mt-8 p-4 bg-white/20 backdrop-blur rounded-xl border border-white/30 text-white space-y-3">
      <h3 className="text-xl font-bold text-white">🎉 Your ticket is ready!</h3>
      <p>Thank you for your purchase, <strong>{name}</strong>.</p>
      <p>Your ticket contains all event details. Click below to download it.</p>
      <button
        onClick={handleDownload}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
      >
        Download Ticket 🎟️
      </button>
    </div>
  )
}

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col items-center justify-start px-4 py-8 space-y-6">
      {/* 3D Canvas background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <mesh rotation={[0.6, 0.8, 0.2]}>
            <icosahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial color="#ff00cc" wireframe />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      {/* Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎟️ Event Tickets — DeoriaOfficial
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        className="max-w-2xl text-center text-gray-300 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        This page is proudly managed by <span className="text-pink-400 font-medium">DeoriaOfficial</span> 💫.
        <br />
        Stay tuned for amazing events organized in Deoria! Grab your tickets below and be part of the unforgettable experiences we’re curating for the community.
      </motion.p>
      <TicketDownload />

      {/* Ticket Card */}
      <TicketCard />
    </div>
  );
}
