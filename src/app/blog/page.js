'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/getblog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          throw new Error('Failed to load blog data');
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (e) => {
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#0a0e1a] py-12">
        {/* Floating background elements */}
        <div className="fixed inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#0ea5e9]/10 blur-xl"
              initial={{
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                x: Math.random() * 100,
                y: Math.random() * 100
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-10 bg-[#1e293b]/50 rounded w-1/3 mx-auto mb-6"></div>
            <div className="h-16 bg-[#1e293b]/50 rounded w-2/3 mx-auto"></div>
          </div>
          
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="bg-[#1e293b]/40 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-8 overflow-hidden border border-[#334155]/50"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#1e293b]/70 rounded-full w-14 h-14"></div>
                <div className="ml-4 space-y-2">
                  <div className="h-4 bg-[#1e293b]/50 rounded w-32"></div>
                  <div className="h-3 bg-[#1e293b]/50 rounded w-48"></div>
                </div>
              </div>
              <div className="h-6 bg-[#1e293b]/50 rounded w-3/4 mb-4"></div>
              <div className="space-y-3 mb-6">
                <div className="h-4 bg-[#1e293b]/50 rounded"></div>
                <div className="h-4 bg-[#1e293b]/50 rounded w-5/6"></div>
                <div className="h-4 bg-[#1e293b]/50 rounded w-4/6"></div>
              </div>
              <div className="bg-[#1e293b]/50 rounded-xl w-full aspect-video"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c1120] to-[#0a0e1a] relative">
        {/* Floating background elements */}
        <div className="fixed inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#0ea5e9]/10 blur-xl"
              initial={{
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                x: Math.random() * 100,
                y: Math.random() * 100
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
              }}
            />
          ))}
        </div>
        
        <div className="text-center p-8 bg-[#1e293b]/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#334155]/50 max-w-md relative z-10">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Error Loading Content</h2>
          <p className="text-[#94a3b8] mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Deoria Official Blog</title>
        <meta name="description" content="Latest updates and insights from Deoria Official" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Floating background elements */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#0ea5e9]/10 blur-xl"
            initial={{
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
              x: Math.random() * 100,
              y: Math.random() * 100
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>
      
      <Sidebar />
      
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <img 
              src={lightboxImage}
              alt="Enlarged post content"
              className="max-h-full max-w-full object-contain animate-fadeIn rounded-xl shadow-2xl border border-[#334155]/50"
            />
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-[#0c1120] to-[#0a0e1a] py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Deoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Insights</span>
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
              Latest updates, stories, and announcements from our team
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </header>

          <div className="space-y-10">
            {posts.map((post) => (
              <motion.article 
                key={post._id}
                className="bg-[#1e293b]/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-[#334155]/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  rotateZ: 0.5,
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full p-1 shadow-lg">
                      <div className="bg-gray-200 border-2 border-white rounded-full w-12 h-12" />
                    </div>
                    <div className="ml-4">
                      <h2 className="font-bold text-white">Deoria Official</h2>
                      <div className="flex items-center text-sm text-[#94a3b8]">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(post.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                    {post.title}
                  </h3>

                  <div className="prose prose-lg max-w-none text-[#cbd5e1] mb-8">
                    <p className="leading-relaxed">{post.content}</p>
                  </div>

                  <div className="mt-6">
                    {post.imageUrl && (
                      <div className="relative rounded-xl overflow-hidden cursor-zoom-in border border-[#334155]/50">
                        <div className="bg-[#0f172a]/50 aspect-video flex items-center justify-center">
                          <motion.img
                            src={post.imageUrl}
                            alt={post.title}
                            className="object-cover w-full h-full transition-transform duration-300"
                            onClick={() => openLightbox(post.imageUrl)}
                            whileHover={{ scale: 1.05 }}
                          />
                          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center backdrop-blur-sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                            </svg>
                            Click to enlarge
                          </div>
                        </div>
                      </div>
                    )}

                    {post.videoUrl && (
                      <div className="relative rounded-xl overflow-hidden border border-[#334155]/50 mt-6">
                        <div className="bg-gray-900 aspect-video flex items-center justify-center">
                          <iframe
                            className="w-full h-full"
                            src={post.videoUrl}
                            title="Embedded Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;