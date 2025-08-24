import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16"> {/* Reduced from mt-32 */}
      {/* Improved Animated Floating Curved Border */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden pointer-events-none"> {/* Reduced from -top-32 */}
        <motion.div
          animate={{ 
            y: [-5, 5, -5], // Reduced movement range from [-10, 10, -10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Main Wave */}
          <motion.div
            className="absolute inset-0 w-full"
            animate={{
              filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              viewBox="0 0 1200 120" 
              className="w-full h-16" // Reduced from h-32
              preserveAspectRatio="none"
            >
              <motion.path 
                d="M0,0 L0,100 Q300,140 600,100 Q900,60 1200,100 L1200,0 Z"
                animate={{
                  d: [
                    "M0,0 L0,100 Q300,140 600,100 Q900,60 1200,100 L1200,0 Z",
                    "M0,0 L0,100 Q300,60 600,100 Q900,140 1200,100 L1200,0 Z",
                    "M0,0 L0,100 Q300,140 600,100 Q900,60 1200,100 L1200,0 Z"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>

          {/* Secondary Wave */}
          <motion.div
            className="absolute inset-0 w-full opacity-50"
            animate={{
              filter: ["blur(1px)", "blur(2px)", "blur(1px)"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <svg 
              viewBox="0 0 1200 120" 
              className="w-full h-16" // Reduced from h-32
              preserveAspectRatio="none"
            >
              <motion.path 
                d="M0,0 L0,100 Q300,60 600,100 Q900,140 1200,100 L1200,0 Z"
                animate={{
                  d: [
                    "M0,0 L0,100 Q300,60 600,100 Q900,140 1200,100 L1200,0 Z",
                    "M0,0 L0,100 Q300,140 600,100 Q900,60 1200,100 L1200,0 Z",
                    "M0,0 L0,100 Q300,60 600,100 Q900,140 1200,100 L1200,0 Z"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </svg>
          </motion.div>

          {/* Floating Particles - Adjusted positions */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400/50 rounded-full" // Reduced size from w-3 h-3
            animate={{
              y: [-10, 0, -10], // Reduced range
              x: [-5, 5, -5], // Reduced range
              scale: [1, 1.1, 1], // Reduced scale
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-purple-400/50 rounded-full" // Reduced size
            animate={{
              y: [-15, 5, -15],
              x: [10, -10, 10],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 pt-16 pb-8"> {/* Reduced padding from pt-32 pb-12 */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12"> {/* Reduced gap from 16 to 12 and mb from 16 to 12 */}
            {/* Brand Section */}
            <motion.div className="space-y-6"> {/* Reduced from space-y-8 */}
              <div className="flex items-center space-x-4"> {/* Reduced from space-x-6 */}
                <motion.div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-12 shadow-xl"> {/* Reduced from w-24 h-24 */}
                    <Zap className="w-10 h-10 text-white" /> {/* Reduced from w-12 h-12 */}
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-blue-500 rounded-3xl blur-xl opacity-40"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  >
                    Tech Titans
                  </motion.h3>
                  <p className="text-blue-400 font-medium text-lg">The Powerhouse of Innovation</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-lg">
                Empowering creativity through technology and innovation. We capture moments, design experiences, and craft stories that inspire the next generation of creators.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { 
                    icon: Instagram, 
                    color: 'bg-gradient-to-br from-pink-500 to-purple-600',
                    url: 'https://www.instagram.com/techtitanscollege'
                  },
                  { 
                    icon: Twitter, 
                    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
                    url: 'https://twitter.com/techtitanscollege'
                  },
                  { 
                    icon: Linkedin, 
                    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
                    url: 'https://www.linkedin.com/company/tech-titans-college'
                  },
                  { 
                    icon: Youtube, 
                    color: 'bg-gradient-to-br from-red-500 to-red-700',
                    url: 'https://www.youtube.com/@techtitanscollege'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="space-y-6"> {/* Reduced from space-y-8 */}
              <h4 className="text-2xl font-bold text-white mb-6">Get In Touch</h4> {/* Reduced mb from 8 */}
              <div className="space-y-6">
                {[
                  { icon: Mail, color: 'from-blue-500 to-blue-600', label: 'Email', value: 'techtitans@gmail.com' },
                  { icon: Phone, color: 'from-emerald-500 to-emerald-600', label: 'Phone', value: '+91 XXXXXXXXXX' },
                  { icon: MapPin, color: 'from-orange-500 to-orange-600', label: 'Location', value: 'New Government Polytechnic Patna-13' }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-6"
                  >
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium text-lg">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div className="border-t border-gray-800 pt-6"> {/* Reduced from pt-8 */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm flex items-center space-x-2">
                <span>© 2024 Tech Titans. Crafted with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </motion.span>
                <span>by the team</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;