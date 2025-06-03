'use client'
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
// pages/index.js
import Head from 'next/head';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaTrophy, FaCrown, FaStar, FaArrowRight } from 'react-icons/fa';

export default function SocialHub() {
  return (
    <>


      <div className="min-h-screen bg-[#1C1F24] text-[#fffaf4] font-sans">
        <Sidebar />
        {/* Navigation */}
        <nav className="py-4 px-6 md:px-12 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold ml-5">
              <span className="text-[#dd7358]">Deoria</span>official
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#platforms" className="hover:text-[#dd7358] transition">Platforms</a>
              <a href="#content" className="hover:text-[#dd7358] transition">Content</a>
              <a href="#achievement" className="hover:text-[#dd7358] transition">Achievement</a>
              <a href="#contact" className="hover:text-[#dd7358] transition">Contact</a>
            </div>
            <div>
              <button className="bg-gradient-to-r from-[#dd7358] to-[#c25d44] px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
                Subscribe 
              </button>
            </div>
          </div>
        </nav>

                {/* Achievement Section */}
        <section id="achievement" className="py-16 px-6 md:px-12 bg-[#23272d]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#1C1F24] border border-[#dd7358] rounded-full px-6 py-2 mb-6">
                <span className="text-[#dd7358] font-medium flex items-center">
                  <FaTrophy className="mr-2" /> Pioneering Achievement
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The First to Achieve This Milestone</h2>
              <p className="text-gray-300 mb-6">
                I'm proud to announce that I've become the first creator to achieve this significant milestone in our industry. Through innovative techniques and dedication, I've broken new ground that sets a precedent for others to follow.
              </p>
              <p className="text-gray-300 mb-8">
                This achievement represents months of research, experimentation, and pushing boundaries. It's not just about being first—it's about demonstrating what's possible when you challenge conventional approaches.
              </p>
              <div className="flex flex-wrap gap-4">
                <StatCard value="1st" label="To achieve this" />
                <StatCard value="100%" label="Original approach" />
                <StatCard value="5M+" label="Followers reached" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#dd7358] rounded-2xl rotate-6 opacity-20"></div>
                <div className="relative bg-gray-800 rounded-2xl p-2">
                  <div className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-md">
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#dd7358] to-[#b45c44] flex items-center justify-center">
                          <FaStar className="text-6xl text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-4">Innovator Recognition</h3>
                      <p className="text-gray-300 text-center mb-6">
                        Awarded for pioneering new approaches in content creation and digital engagement
                      </p>
                      <div className="flex justify-center">
                        <span className="bg-[#dd7358] text-white px-4 py-2 rounded-full text-sm font-medium">
                          First Achievement Badge
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        {/* <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#23272d] border border-[#dd7358] rounded-full px-6 py-2 mb-6 animate-pulse">
                <span className="text-[#dd7358] font-medium flex items-center">
                  <FaTrophy className="mr-2" /> Pioneering Achievement
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                I'm the <span className="text-[#dd7358]">First</span> to Achieve This!
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join me on my journey across social platforms where I share exclusive content, behind-the-scenes, and innovative approaches that set me apart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#dd7358] to-[#c25d44] px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition">
                  Explore Content
                </button>
                <button className="border border-[#dd7358] text-[#dd7358] px-8 py-3 rounded-lg font-medium text-lg hover:bg-[#dd7358]/10 transition">
                  Follow Me
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#dd7358] rounded-2xl rotate-6 opacity-20 animate-pulse"></div>
                <div className="relative bg-gray-800 rounded-2xl p-2">
                  <div className="bg-gray-900 rounded-xl overflow-hidden w-80 h-80">
                    <div className="h-full bg-gradient-to-br from-[#1C1F24] to-[#2d3138] flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#dd7358] to-[#b45c44] mb-6 flex items-center justify-center">
                        <FaCrown className="text-4xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Innovator Spotlight</h3>
                      <p className="text-gray-300">Breaking new ground in digital content creation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Platforms Section */}
        <section id="platforms" className="py-16 px-6 md:px-12 bg-[#23272d]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Me</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Follow me on these platforms to stay updated with my latest content and journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PlatformCard 
                icon={<FaInstagram className="text-3xl text-white" />} 
                title="Instagram" 
                description="Visual stories, reels, and daily updates" 
                bgColor="bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
                actionText="Follow"
              />
              <PlatformCard 
                icon={<FaFacebook className="text-3xl text-white" />} 
                title="Facebook" 
                description="Community engagement and live sessions" 
                bgColor="bg-[#3b5998]"
                actionText="Like Page"
              />
              <PlatformCard 
                icon={<FaYoutube className="text-3xl text-white" />} 
                title="YouTube" 
                description="In-depth tutorials and content series" 
                bgColor="bg-[#ff0000]"
                actionText="Subscribe"
              />
              <PlatformCard 
                icon={<FaTwitter className="text-3xl text-white" />} 
                title="Twitter" 
                description="Quick updates, thoughts, and conversations" 
                bgColor="bg-[#1da1f2]"
                actionText="Follow"
              />
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section id="content" className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Explore some of my most popular and innovative content across platforms</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ContentCard 
                platform="YouTube"
                title="The Innovation Journey"
                description="Watch how I developed the unique approach that made me the first to achieve this milestone."
                icon={<FaYoutube className="text-6xl text-[#dd7358]" />}
              />
              <ContentCard 
                platform="Instagram"
                title="Behind the Scenes"
                description="Exclusive look at the creative process that led to my groundbreaking achievement."
                icon={<FaInstagram className="text-6xl text-[#dd7358]" />}
              />
              <ContentCard 
                platform="Facebook"
                title="Community Q&A"
                description="Join the conversation where I answer questions about my unique approach and achievement."
                icon={<FaFacebook className="text-6xl text-[#dd7358]" />}
              />
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1C1F24] to-[#23272d] border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join My Digital Community</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the journey as I continue to innovate and create groundbreaking content across all platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <SocialIcon icon={<FaFacebookF />} bgColor="hover:bg-[#3b5998]" />
              <SocialIcon icon={<FaInstagram />} bgColor="hover:bg-[#833ab4]" />
              <SocialIcon icon={<FaYoutube />} bgColor="hover:bg-[#ff0000]" />
              <SocialIcon icon={<FaTwitter />} bgColor="hover:bg-[#1da1f2]" />
              <SocialIcon icon={<FaLinkedin />} bgColor="hover:bg-[#0a66c2]" />
            </div>
            <button className="bg-gradient-to-r from-[#dd7358] to-[#c25d44] px-8 py-4 rounded-lg font-medium text-lg mx-auto hover:opacity-90 transition">
              Follow All Platforms
            </button>
          </div>
        </section>

        <Footer/>

        {/* Footer
        <footer id="contact" className="py-12 px-6 md:px-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  <span className="text-[#dd7358]">Social</span>Hub
                </div>
                <p className="text-gray-300 mb-6">
                  Connecting innovative content across platforms and celebrating digital achievements.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-[#dd7358] transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#dd7358] transition">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#dd7358] transition">
                    <FaYoutube />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#dd7358] transition">
                    <FaTwitter />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Platforms</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Instagram</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Facebook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">YouTube</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Twitter</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">LinkedIn</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Content</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Featured</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Tutorials</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Behind the Scenes</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Live Sessions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#dd7358] transition">Exclusive Content</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-3">
                  <li className="text-gray-300">business@example.com</li>
                  <li className="text-gray-300">+1 (123) 456-7890</li>
                  <li className="text-gray-300">Los Angeles, CA</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2023 SocialHub. All rights reserved. Proudly the first to achieve this milestone.</p>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}

// Platform Card Component
const PlatformCard = ({ icon, title, description, bgColor, actionText }) => (
  <div className="bg-[#1C1F24] rounded-xl p-8 text-center border border-gray-800 hover:border-[#dd7358]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className={`w-20 h-20 rounded-full ${bgColor} mx-auto flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300 mb-6">{description}</p>
    <a href="#" className="inline-block bg-[#2d3138] hover:bg-[#3a3f48] px-6 py-3 rounded-lg font-medium transition">
      {actionText}
    </a>
  </div>
);

// Content Card Component
const ContentCard = ({ platform, title, description, icon }) => (
  <div className="bg-gradient-to-br from-[#23272d] to-[#1a1d22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="h-48 relative overflow-hidden bg-gradient-to-r from-[#1C1F24] to-[#2d3138] flex items-center justify-center">
      {icon}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <span className="bg-[#dd7358] text-sm font-medium px-3 py-1 rounded-full">{platform}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href="#" className="text-[#dd7358] font-medium flex items-center hover:underline">
        View Content <FaArrowRight className="ml-2 text-sm" />
      </a>
    </div>
  </div>
);

// Stat Card Component
const StatCard = ({ value, label }) => (
  <div className="bg-[#1C1F24] border border-gray-800 rounded-lg px-6 py-4 min-w-[120px]">
    <div className="text-3xl font-bold text-[#dd7358]">{value}</div>
    <div className="text-gray-300 text-sm">{label}</div>
  </div>
);

// Social Icon Component
const SocialIcon = ({ icon, bgColor }) => (
  <a href="#" className={`w-14 h-14 rounded-full bg-[#2d3138] flex items-center justify-center text-xl text-white transition ${bgColor}`}>
    {icon}
  </a>
);

// Facebook F icon component (since react-icons doesn't have a separate FaFacebookF)
const FaFacebookF = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
  </svg>
);