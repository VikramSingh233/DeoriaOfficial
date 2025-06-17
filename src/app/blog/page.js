'use client'
// pages/blog/index.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import AdminBlogForm from '@/components/AdminBlogForm';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Check admin status (in real app, use authentication)
  useEffect(() => {
    // Replace with actual admin check (e.g., token verification)
    const checkAdmin = async () => {
      // const adminStatus = localStorage.getItem('isAdmin') === 'true';
      setIsAdmin(true);
    };
    checkAdmin();
  }, []);

  // Fetch blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      // Replace with actual API call
      const mockPosts = [
        {
          id: '1',
          title: 'The Future of Web Development',
          content: 'Exploring upcoming trends in modern web frameworks...',
          author: 'DeoriaOfficial',
          createdAt: new Date('2023-10-15'),
          imageUrl: '/tech-banner.jpg',
          videoUrl: null,
          excerpt: 'How Next.js is revolutionizing the industry'
        },
        // More posts...
      ];
      setPosts(mockPosts);
    };
    fetchPosts();
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([{ ...newPost, author: 'DeoriaOfficial', createdAt: new Date() }, ...posts]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Official Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Insights and updates from Deoria Technologies
          </p>
        </motion.div>

        {isAdmin && (
          <div className="mb-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center"
            >
              {showForm ? 'Cancel' : 'Create New Post'} 
              <span className="ml-2">+</span>
            </motion.button>
          </div>
        )}

        {showForm && <AdminBlogForm onSubmit={handleNewPost} />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-12"
        >
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200"
    >
      {post.imageUrl && (
        <div className="h-64 overflow-hidden">
          <motion.img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
            DO
          </div>
          <div className="ml-3">
            <p className="font-semibold text-gray-900">DeoriaOfficial</p>
            <time className="text-sm text-gray-500">
              {format(new Date(post.createdAt), 'MMM dd, yyyy - hh:mm a')}
            </time>
          </div>
        </div>

        <motion.h2 
          className="text-2xl font-bold text-gray-900 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {post.title}
        </motion.h2>
        
        {post.excerpt && (
          <p className="text-lg text-gray-700 mb-4 italic border-l-4 border-indigo-500 pl-4 py-1">
            {post.excerpt}
          </p>
        )}

        <div 
          className="prose prose-lg max-w-none text-gray-700 mb-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.videoUrl && (
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <video 
              controls 
              className="w-full rounded-lg"
              poster="/video-thumbnail.jpg"
            >
              <source src={post.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center">
          <div className="flex space-x-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Technology
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Update
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPage;