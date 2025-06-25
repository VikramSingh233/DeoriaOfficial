'use client'
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Head from 'next/head';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaTrophy, FaCrown, FaStar, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function SocialHub() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = (x - centerX) / 25;
    const rotateX = (centerY - y) / 25;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1115] to-[#1a1d24] text-[#fffaf4] font-sans overflow-hidden">
      <Sidebar />
      {/* Navigation */}
      <nav className="py-4 px-10 md:px-16 backdrop-blur-lg bg-[#1a1d24]/70 border-b border-[#ffffff15] sticky top-0 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-[#dd7358] to-[#c25d44] p-2 rounded-lg">
              <div className="bg-[#0f1115] p-1 rounded-md">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#dd7358] to-[#c25d44]"></div>
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-[#dd7358]">Deoria</span>official
            </div>
          </div>
          <div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/deoria_official/" target="_blank" className="w-10 h-10 rounded-full bg-[#1a1d24] border border-[#ffffff15] flex items-center justify-center hover:bg-[#dd7358] transition-all">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.youtube.com/@VAIBHAV.MISHRA21" target="_blank" className="w-10 h-10 rounded-full bg-[#1a1d24] border border-[#ffffff15] flex items-center justify-center hover:bg-[#ff0000] transition-all">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#dd7358]/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Achievement Section */}
      <section id="achievement" className="py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#dd7358] to-[#c25d44] rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-[#1a1d24] to-[#1a1d24]/50 backdrop-blur-lg border border-[#ffffff15] rounded-2xl p-8 shadow-2xl">
              <div className="inline-block bg-gradient-to-r from-[#dd7358] to-[#c25d44] rounded-full px-6 py-2 mb-6">
                <span className="text-white font-medium flex items-center">
                  <FaTrophy className="mr-2" /> Representing Deoria
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vaibhav Mishra</h2>
              <p className="text-gray-300 mb-6">
                Starting something new in a place like Deoria has never been easy — especially when it comes to promoting businesses online. I noticed that many local shops, food stalls, and service providers had great potential but lacked the digital presence needed to grow. That's what inspired me to create this platform dedicated to showcasing and supporting local businesses in Deoria.
              </p>
              <p className="text-gray-300 mb-8">
                My goal has always been to give these entrepreneurs a voice and help them reach new customers through social media. With limited resources and no big backing, I started by simply highlighting what I saw around me — from small eateries to hidden gems in the market.
              </p>
              <div className="flex flex-wrap gap-4">
                <StatCard value="1st" label="To achieve this" />
                <StatCard value="100%" label="Original approach" />
                <StatCard value="85k+" label="Followers reached" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div 
              className="relative transition-transform duration-500"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#dd7358] to-[#c25d44] rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-[#1a1d24] to-[#1a1d24]/50 backdrop-blur-lg border border-[#ffffff15] rounded-2xl p-1 overflow-hidden">
                <div className="bg-gradient-to-br from-[#0f1115] to-[#1a1d24] rounded-xl overflow-hidden w-full max-w-md">
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#dd7358] to-[#c25d44] rounded-full blur-lg opacity-50"></div>
                        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#1a1d24] to-[#0f1115] border border-[#ffffff15] flex items-center justify-center">
                          <div className="bg-gradient-to-br from-[#dd7358] to-[#c25d44] p-2 rounded-full">
                            <FaCrown className="text-4xl text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">Digital Pioneer</h3>
                    <p className="text-gray-300 text-center mb-6">
                      Creating opportunities for local businesses through digital innovation
                    </p>
                    <div className="flex justify-center">
                      <span className="bg-gradient-to-r from-[#dd7358] to-[#c25d44] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Deoria's Digital Advocate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Follow on these platforms to stay updated with the latest content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PlatformCard 
              icon={<FaInstagram className="text-3xl text-white" />} 
              title="Instagram" 
              description="Visual stories, reels, and daily updates" 
              bgColor="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
              actionText="Follow"
              link="https://www.instagram.com/deoria_official/"
            />
            <PlatformCard 
              icon={<FaYoutube className="text-3xl text-white" />} 
              title="YouTube" 
              description="In-depth tutorials and content series" 
              bgColor="bg-[#ff0000]"
              actionText="Subscribe"
              link="https://www.youtube.com/@VAIBHAV.MISHRA21"
            />
          </div>
        </div>
      </section>

      {/* Content Showcase */}
      <section id="content" className="py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Explore some of the most popular content across platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContentCard 
              platform="YouTube"
              title="Meghalaya Honeymoon Murder: Sonam Raghuvanshi Love, Betrayal & Blood | Raja's Shocking Death Mystery"
              image="https://i.ytimg.com/vi/oNZHqUTWESk/hqdefault.jpg"
              description="This documentary-style crime story dives deep into the brutal murder of Raja Raghuvanshi, a newlywed husband whose honeymoon in Meghalaya's Sohra turned into a blood-soaked nightmare."
              icon={<FaYoutube className="text-6xl text-[#dd7358]" />}
              link="https://youtu.be/oNZHqUTWESk?si=nHQDRvYlse49NKZM"
            />
            <ContentCard 
              platform="YouTube"
              title="Kya Deoria Me Banega ISRO Ka Station? Ft. Shashank Mani | The Other Side With Vaibhav Mishra"
              description="We explore the visionary journey of Shashank Mani, founder of the world's longest rail journey, and his vision for Deoria's development."
              icon={<FaYoutube className="text-6xl text-[#dd7358]" />}
              link="https://youtu.be/WMSdOeagID8?si=kax5PKgsl_xLy59o"
              image="https://i.ytimg.com/vi/WMSdOeagID8/hqdefault.jpg"
            />
            <ContentCard 
              platform="YouTube"
              title="Rajesh Singh Dayal — Seva, Sankalp aur Sangharsh | The Other Side of Vaibhav Mishra"
              description="From spiritual inspirations to ground-level activism, this episode dives deep into the real story behind Rajesh Singh Dayal, known as 'Medicine Man of UP'."
              image="https://i.ytimg.com/an_webp/xqCsYb-VOhA/mqdefault_6s.webp"
              icon={<FaYoutube className="text-6xl text-[#dd7358]" />}
              link="https://youtu.be/xqCsYb-VOhA?si=L8quWLVjlZpHX7sQ"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#dd7358] to-[#c25d44] rounded-2xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-br from-[#1a1d24] to-[#1a1d24]/50 backdrop-blur-lg border border-[#ffffff15] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Digital Community</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the journey as we continue to innovate and create groundbreaking content for Deoria.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <SocialIcon icon={<FaInstagram />} bgColor="hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]" link="https://www.instagram.com/deoria_official/" />
              <SocialIcon icon={<FaYoutube />} bgColor="hover:bg-[#ff0000]" link="https://www.youtube.com/@VAIBHAV.MISHRA21" />
            </div>
            <a 
              href="https://www.instagram.com/deoria_official/" 
              target="_blank"
              className="inline-block bg-gradient-to-r from-[#dd7358] to-[#c25d44] px-8 py-4 rounded-lg font-medium text-lg mx-auto hover:opacity-90 transition hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Follow Now
            </a>
          </div>
        </div>
      </section>

      <Footer/>
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        .tilt-card {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        
        .hover-3d:hover {
          transform: translateY(-5px) perspective(1000px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 25px 50px -12px rgba(221, 115, 88, 0.25);
        }
      `}</style>
    </div>
  );
}

// Platform Card Component
const PlatformCard = ({ icon, title, description, bgColor, actionText, link }) => (
  <a 
    href={link} 
    target="_blank"
    className="tilt-card hover-3d bg-gradient-to-br from-[#1a1d24] to-[#1a1d24]/50 backdrop-blur-lg border border-[#ffffff15] rounded-2xl p-8 text-center shadow-xl transition-all duration-300"
  >
    <div className={`w-20 h-20 rounded-full ${bgColor} mx-auto flex items-center justify-center mb-6 shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <div className="inline-block bg-gradient-to-r from-[#1a1d24] to-[#0f1115] border border-[#ffffff15] px-6 py-3 rounded-lg font-medium transition hover:bg-[#dd7358]">
      {actionText}
    </div>
  </a>
);

// Content Card Component
const ContentCard = ({ platform, title, description, icon, image, link }) => (
  <a 
    href={link} 
    target="_blank"
    className="tilt-card hover-3d bg-gradient-to-br from-[#1a1d24] to-[#1a1d24]/50 backdrop-blur-lg border border-[#ffffff15] rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
  >
    <div className="h-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent z-10"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <span className="bg-gradient-to-r from-[#dd7358] to-[#c25d44] text-sm font-medium px-3 py-1 rounded-full">
          {platform}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
      <div className="text-[#dd7358] font-medium flex items-center group">
        <span className="group-hover:underline">View Content</span>
        <FaArrowRight className="ml-2 text-sm transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </a>
);

// Stat Card Component
const StatCard = ({ value, label }) => (
  <div className="bg-gradient-to-br from-[#1a1d24] to-[#0f1115] border border-[#ffffff15] rounded-xl px-6 py-4 min-w-[120px]">
    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#dd7358] to-[#c25d44]">
      {value}
    </div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);

// Social Icon Component
const SocialIcon = ({ icon, bgColor, link }) => (
  <a 
    href={link} 
    target="_blank"
    className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1d24] to-[#0f1115] border border-[#ffffff15] flex items-center justify-center text-xl text-white transition-all duration-300 ${bgColor} hover:scale-110 shadow-lg`}
  >
    {icon}
  </a>
);