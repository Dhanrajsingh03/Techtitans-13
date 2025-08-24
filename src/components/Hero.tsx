import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Zap, Share2, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-2 sm:top-20 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.7, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-[96px] right-2 sm:top-40 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-24 left-1/3 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.7, 0.6],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-10 right-2 sm:bottom-20 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-6xl w-full mx-auto px-4 sm:px-8 py-16 sm:py-20 justify-center">
          {/* Animated Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-12 w-full flex flex-col items-center"
          >
            <div className="flex flex-col items-center justify-center w-full mb-8">
              {/* Responsive layout: vertical on mobile/tablet, horizontal with balanced gap on laptop/desktop */}
              <div className="flex flex-col items-center justify-center w-full gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-">
                {/* Rotating Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative flex-shrink-0 mb-4 lg:mb-0"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-2xl flex items-center justify-center"
                    style={{ willChange: 'transform' }}
                  >
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2"
                    style={{ willChange: 'transform' }}
                  >
                    <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-500" />
                  </motion.div>
                </motion.div>

                {/* Tech Titans Title */}
                {/* Tech Titans Title */}
                <div className="flex flex-col items-center justify-center w-full">
                  <h1 className="whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight sm:leading-none text-center">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mr-2"
                    >
                      Tech
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-blue-600"
                    >
                      Titans
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-base sm:text-lg lg:text-xl text-gray-600 font-medium mt-2"
                  >
                    The Powerhouse of Innovation & Creativity! 🎬📸
                  </motion.p>
                </div>

              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 border-2 border-gray-100 mx-auto max-w-2xl"
            >
              <p className="text-lg sm:text-2xl font-bold text-blue-600 mb-2 sm:mb-4">
                "Empowering Creativity, Fueling Innovation, Capturing Moments."
              </p>
            </motion.div>
          </motion.div>

          {/* Animated Feature Icons */}
          <div className="w-full mb-12 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 w-full">
              {[
                { icon: Palette, label: 'Graphic Design', color: 'bg-blue-600', count: '4 Members' },
                { icon: Video, label: 'Video Editing', color: 'bg-emerald-600', count: '4 Members' },
                { icon: Share2, label: 'Social Media', color: 'bg-orange-600', count: '4 Members' },
                { icon: Camera, label: 'Photography', color: 'bg-indigo-600', count: '3 Members' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + (index * 0.1) }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-9 h-9 sm:w-12 sm:h-12 ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-gray-900 font-bold text-xs sm:text-sm mb-1">{item.label}</h4>
                    <p className="text-gray-500 text-[11px] sm:text-xs">{item.count}</p>
                  </div>
                </motion.div>
              ))}

              {/* Technical card: always center in its line for all views */}
              <motion.div
                key="Technical"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ y: -8 }}
                className="
        group
        col-span-2 flex justify-center
        sm:col-span-1 sm:justify-center
        md:col-span-1 md:justify-center
      "
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full flex flex-col items-center min-w-0">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-gray-900 font-bold text-xs sm:text-sm mb-1 text-center">Technical</h4>
                  <p className="text-gray-500 text-[11px] sm:text-xs text-center">10 Members</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-12 sm:mb-16 w-full flex justify-center">
            <button
              className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 sm:space-x-3"
              onClick={() => {
                const form = document.getElementById('JoinForm');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              type="button"
            >
              <span className="text-base sm:text-lg">Join the Innovation</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Principal Section */}
          <div className="bg-gray-50 rounded-xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-100 w-full max-w-xl mx-auto">
            <p className="text-gray-600 text-xs sm:text-sm mb-2">Under the inspiring leadership of</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dr. Chandra Shekhar Singh</h3>
            <p className="text-blue-600 font-semibold text-base sm:text-lg">Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;