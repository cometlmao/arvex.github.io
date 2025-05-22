import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Permanent HWID Spoofer',
    image: 'https://i.ibb.co/qLx4VnkF/image-2.png',
    price: 5.99,
    originalPrice: 9.99,
  },
  {
    id: 2,
    title: 'Fortnite External',
    image: 'https://i.ytimg.com/vi/1JxSckJq5Pc/maxresdefault.jpg',
    price: 8.99,
    originalPrice: 12.99,
  },
  {
    id: 3,
    title: 'Rust External',
    image: 'https://i.ytimg.com/vi/Y_gCjXcWpl8/maxresdefault.jpg',
    price: 7.99,
    originalPrice: 14.99,
  },
  {
    id: 4,
    title: 'Rocket League',
    image: 'https://i.postimg.cc/rsQcsNtx/Chat-GPT-Image-May-19-2025-05-34-32-AM.png',
    price: 6.99,
    originalPrice: 10.99,
  }
];

const FeaturedProducts = () => {
  const discordLink = "https://discord.gg/BmTt5pFcBV";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="featured-products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured Products
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              className="product-card bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-white/10"
              style={{ minHeight: '420px' }}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.div 
                className="h-48 overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div 
                      className="shimmer rounded-md"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="p-6 flex flex-col h-full" style={{ height: 'calc(100% - 12rem)' }}>
                <motion.h3 
                  className="text-2xl font-bold mb-4 flex-grow gradient-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-sm text-gray-400">Starting At</div>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-400 line-through text-base mr-2">${product.originalPrice}</span>
                    <motion.span 
                      className="text-2xl font-bold text-white"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      ${product.price}
                    </motion.span>
                  </div>
                  <motion.a 
                    href={discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-bg text-white px-4 py-2 rounded hover:opacity-90 transition-all inline-block w-full text-center"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(153, 41, 234, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Buy Now
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;