import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Heart,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16">
      {/* Top Wave */}
      {/* <div className="absolute -top-16 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 120" className="w-full h-16" preserveAspectRatio="none">
          <path
            d="M0,0 L0,100 Q300,140 600,100 Q900,60 1200,100 L1200,0 Z"
            className="fill-gray-900"
          />
        </svg>
      </div> */}

      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-12">

            {/* Left - Brand Section */}
            <div className="space-y-6 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">Tech Titans</h3>
                  <p className="text-blue-400 text-sm sm:text-base">The Powerhouse of Innovation</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Empowering creativity through technology and innovation. We capture
                moments, design experiences, and craft stories that inspire the next
                generation of creators.
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-3">
                {[
                  {
                    icon: Instagram,
                    color: 'bg-gradient-to-br from-pink-500 to-purple-600',
                    url: 'https://www.instagram.com/techtitanscollege',
                  },
                  {
                    icon: Twitter,
                    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
                    url: 'https://twitter.com/techtitanscollege',
                  },
                  {
                    icon: Linkedin,
                    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
                    url: 'https://www.linkedin.com/company/tech-titans-college',
                  },
                  {
                    icon: Youtube,
                    color: 'bg-gradient-to-br from-red-500 to-red-700',
                    url: 'https://www.youtube.com/@techtitanscollege',
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 sm:w-11 sm:h-11 ${social.color} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right - Contact Section */}
            {/* Get In Touch Section */}
            {/* Get In Touch Section */}
            {/* Get In Touch Section */}
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-lg sm:text-xl font-bold mb-6">Get In Touch</h4>

              {/* Inline Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-12">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-base">techtitans@gmail.com</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-base">+91 XXXXXXXXXX</p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-base">NGP Patna-13</p>
                </div>
              </div>
            </div>



          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-1">
              © 2024 Tech Titans. Crafted with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              by the team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
