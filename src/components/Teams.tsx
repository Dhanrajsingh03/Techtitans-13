import React, { useState } from 'react';
import { Palette, Video, Share2, Camera, Zap, Instagram, Linkedin, Star, X, ExternalLink, LucideIcon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
type WorkItem = {
  type: 'image' | 'youtube' | 'instagram' | 'facebook' | 'google-photos';
  url: string;
  alt?: string;
  title?: string;
  thumbnail?: string;
};

type Member = {
  name: string;
  role: string;
  id: string;
  instagramUrl: string;
  linkedinUrl: string;
  portfolioUrl?: string; // New optional field for portfolio
  isHead?: boolean;
  profilePic: string;
};

type Team = {
  name: string;
  description: string;
  icon: LucideIcon;
  color: 'blue' | 'emerald' | 'orange' | 'indigo' | 'purple';
  members: Member[];
  work: WorkItem[];
};

// --- Tailwind Class Mappings ---
const colorClasses = {
  blue: { text: 'text-blue-600', bg: 'bg-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', hoverBg: 'hover:bg-blue-600', linkBg: 'bg-blue-100' },
  emerald: { text: 'text-emerald-600', bg: 'bg-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', hoverBg: 'hover:bg-emerald-600', linkBg: 'bg-emerald-100' },
  orange: { text: 'text-orange-600', bg: 'bg-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200', hoverBg: 'hover:bg-orange-600', linkBg: 'bg-orange-100' },
  indigo: { text: 'text-indigo-600', bg: 'bg-indigo-600', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200', hoverBg: 'hover:bg-indigo-600', linkBg: 'bg-indigo-100' },
  purple: { text: 'text-purple-600', bg: 'bg-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200', hoverBg: 'hover:bg-purple-600', linkBg: 'bg-purple-100' },
};

// --- Team Data ---
const teams: Team[] = [
  {
    name: 'Graphic Designing Team',
    description: 'Creating eye-catching posters, thumbnails, and visual content',
    icon: Palette,
    color: 'blue',
    members: [
      { name: 'Sumit Raj', role: 'Category Head', id: '2023-CSE-048', instagramUrl: 'https://www.instagram.com/sum1t.svg/profilecard/', linkedinUrl: 'https://www.linkedin.com/in/sumit-raj-512724322/', isHead: true, profilePic: '/images/members/sumit2.jpg' },
      { name: 'Himanshu Kumar', role: 'Designer', id: '2024-EC-040', instagramUrl: 'https://www.instagram.com/himanshukumardz', linkedinUrl: 'https://www.linkedin.com/in/himanshu-kumar', profilePic: '/images/members/himanshu.jpg' },
      { name: 'Sunny Kumar', role: 'Designer', id: '2024-CSE-054', instagramUrl: 'https://www.instagram.com/sunny_creative', linkedinUrl: 'https://www.linkedin.com/in/sunny-kumar', profilePic: '/images/members/sunny-kumar.jpg' },
      { name: 'Mansi Kumari', role: 'Designer', id: '2024-EE-007', instagramUrl: 'https://www.instagram.com/mansi_art', linkedinUrl: 'https://www.linkedin.com/in/mansi-kumari', profilePic: '/images/members/mansi-kumari.jpg' },
    ],
    work: [
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 1' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 2' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 3' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 1' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 2' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 3' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 1' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 2' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 3' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 1' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 2' },
      { type: 'image', url: 'https://www.admecindia.co.in/wp-content/uploads/2024/10/why-graphic-design-about-creativity-not-just-tools-1.jpg', alt: 'Graphic Work 3' },
    ],
  },
  {
    name: 'Video Editing Team',
    description: 'Crafting cinematic experiences that capture unforgettable moments',
    icon: Video,
    color: 'emerald',
    members: [
      { name: 'Prashant Kumar', role: 'Editor', id: '2023-CSE-038', instagramUrl: 'https://www.instagram.com/photography_by_pks', linkedinUrl: 'https://www.linkedin.com/in/prashant-kumar', isHead: true, profilePic: 'images/members/prashant.jpg' },
      { name: 'Deepa Chandra', role: 'Editor', id: '2023-EC-053', instagramUrl: 'https://www.instagram.com/deepa_edits', linkedinUrl: 'https://www.linkedin.com/in/deepa-chandra', isHead: true, profilePic: '/images/members/deepa2.jpg' },
      { name: 'Sumit Kumar', role: 'Editor', id: '2023-EE-013', instagramUrl: 'https://www.instagram.com/sumit_motion', linkedinUrl: 'https://www.linkedin.com/in/sumit-kumar-el', profilePic: '/images/members/sumit.jpg' },
      { name: 'Aaryan', role: 'Editor', id: '2024-CSE-047', instagramUrl: 'https://www.instagram.com/mugiwara_ya_7', linkedinUrl: 'https://www.linkedin.com/in/aaryan', profilePic: 'images/members/aryan.jpg' },
    ],
    work: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video Work 1' },
      { type: 'youtube', url: 'https://www.youtube.com/embed/C5vIuH_Ff0c', title: 'Video Work 2' },
    ],
  },
  {
    name: 'Social Media Management Team',
    description: 'Keeping the digital world informed and engaged',
    icon: Share2,
    color: 'orange',
    members: [
      { name: 'Angel', role: 'Category Head', id: '2023-EC-045', instagramUrl: 'https://www.instagram.com/angel_sm', linkedinUrl: 'https://www.linkedin.com/in/angel', isHead: true, profilePic: '/images/members/angel.jpg' },
      { name: 'Nitish Kumar Paswan', role: 'Manager', id: '2023-EE-027', instagramUrl: 'https://www.instagram.com/nitish_kmr.ro45', linkedinUrl: 'https://www.linkedin.com/in/nitish-paswan', profilePic: 'images/members/nitish.jpg' },
      { name: 'Prince Kushagra', role: 'Manager', id: '2024-EC-050', instagramUrl: 'https://www.instagram.com/princeranjan9819', linkedinUrl: 'https://www.linkedin.com/in/prince-kushagra-ranjan-92b314375', profilePic: '/images/members/prince.jpg' },
      { name: 'Aditya Kumar Singh', role: 'Manager', id: '2024-CE-090', instagramUrl: 'https://www.instagram.com/the_aditya_singh_rajput', linkedinUrl: 'https://www.linkedin.com/in/aditya-kumar-singh-753967378', profilePic: '/images/members/aditya.jpg' },
    ],
    work: [
      { type: 'instagram', url: 'https://www.instagram.com/p/C69mX_2yH1d/', title: 'Instagram Post dhanraj singh' },
      { type: 'facebook', url: 'https://www.facebook.com/facebook/posts/10161423450536729', title: 'Facebook Post' },
    ],
  },
  {
    name: 'Photography Team',
    description: 'Freezing memories in breathtaking frames',
    icon: Camera,
    color: 'indigo',
    members: [
      { name: 'Mritunjay Kumar', role: 'Category Head', id: '2023-EC-024', instagramUrl: 'https://www.instagram.com/mrityunjay_lens', linkedinUrl: 'https://www.linkedin.com/in/mrityunjay-kumar', isHead: true, profilePic: '/images/members/mrityunjay-kumar.jpg' },
      { name: 'Raunak Kumar Singh', role: 'Photographer', id: '2024-ECE-055', instagramUrl: 'https://www.instagram.com/abcd_rks_xyz', linkedinUrl: 'https://www.linkedin.com/in/raunak-kumar-singh', profilePic: '/images/members/raunak.jpg' },
      { name: 'Shreeyansh Kumar', role: 'Photographer', id: '2024-A-054', instagramUrl: 'https://www.instagram.com/shreeyansh_shots', linkedinUrl: 'https://www.linkedin.com/in/shreeyansh-kumar', profilePic: '/images/members/shree.jpg' },
    ],
    work: [
      { type: 'google-photos', url: 'https://photos.app.goo.gl/your-album-link', thumbnail: 'https://www.shutterstock.com/image-photo/blond-hair-girl-taking-photo-260nw-2492842415.jpg', title: 'Photo Album' },
      { type: 'image', url: 'https://i.postimg.cc/63xGLGG1/tech.jpg', alt: 'Photography Work 1' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1517457210712-87a27e779a1f?q=80&w=1528&auto=format&fit=crop', alt: 'Photography Work 2' },
    ],
  },
  {
    name: 'Technical Team',
    description: 'Managing sound, lighting, and all the tech magic behind the scenes',
    icon: Zap,
    color: 'purple',
    members: [
      { name: 'Manjeet Kumar', role: 'Category Head', id: '2023-EC-09', instagramUrl: 'https://www.instagram.com/manjeet_tech', linkedinUrl: 'https://www.linkedin.com/in/manjeet-kumar', isHead: true, profilePic: '/images/members/manjeet-kumar.jpg' },
      { name: 'Dhanraj Kumar', role: 'Category Head', id: '2023-EC-39', instagramUrl: 'https://www.instagram.com/iam_perfect.03', linkedinUrl: 'https://www.linkedin.com/in/dhanraj-kumar-490a6136a', portfolioUrl: 'https://dhanrajsinghportfolio-fca04.web.app', isHead: true, profilePic: 'https://dhanrajsinghportfolio-fca04.web.app/photo.jpg' },
      { name: 'Krishna Kanhaiya', role: 'Technical Specialist', id: '2023-EC-088', instagramUrl: 'https://www.instagram.com/krishnakanhaiya8051',portfolioUrl: 'https://krishnaofficial.netlify.app/', linkedinUrl: 'https://www.linkedin.com/in/krishna-kanhaiya', profilePic: 'images/members/krishna .jpg' },
      { name: 'Chhavi Kumari', role: 'Technical Specialist', id: '2023-C-031', instagramUrl: 'https://www.instagram.com/chhavi_tech', linkedinUrl: 'https://www.linkedin.com/in/chhavi-kumari', profilePic: '/images/members/chhavi-kumari.jpg' },
      { name: 'Umashankar Kumar', role: 'Technical Specialist', id: '2024-CSE-036', instagramUrl: 'https://www.instagram.com/umashankar_tech', linkedinUrl: 'https://www.linkedin.com/in/umashankar-kumar', profilePic: '/images/members/umashankar-kumar.jpg' },
      { name: 'Sona', role: 'Technical Specialist', id: '2023-EC-055', instagramUrl: 'https://www.instagram.com/its_sona_765', linkedinUrl: 'https://www.linkedin.com/in/sona-575927380', profilePic: '/images/members/sona.jpg' },
      { name: 'Anushka Chaudhary', role: 'Technical Specialist', id: '2024-EC-007', instagramUrl: 'https://www.instagram.com/anushka_tech', linkedinUrl: 'https://www.linkedin.com/in/anushka-chaudhary', profilePic: '/images/members/anushka-chaudhary.jpg' },
      { name: 'Taniya Kumari', role: 'Technical Specialist', id: '2024-ECE-016', instagramUrl: 'https://www.instagram.com/demyra_lilly_', linkedinUrl: 'https://www.linkedin.com/in/taniya-kumari', profilePic: '/images/members/tanya.jpg' },
      { name: 'Rachana Bharti', role: 'Technical Specialist', id: '2024-ECE-062', instagramUrl: 'https://www.instagram.com/rachana_tech', linkedinUrl: 'https://www.linkedin.com/in/rachana-bharti', profilePic: '/images/members/rachana-bharti.jpg' },
      { name: 'Priyanshu Kumar Ray', role: 'Technical Specialist', id: '2024-ECE-019', instagramUrl: 'https://www.instagram.com/priyanshu_tech', linkedinUrl: 'https://www.linkedin.com/in/priyanshu-kumar-ray', profilePic: '/images/members/priyanshu-kumar-ray.jpg' },
    ],
    work: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/your-tech-video', title: 'Technical Work 1' },
    ],
  },
];

const Teams: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const openPopup = (team: Team) => setSelectedTeam(team);
  const closePopup = () => setSelectedTeam(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            ⭐ Meet Our Teams of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate individuals working together across different specializations to create extraordinary experiences
          </p>
        </div>

        <div className="space-y-16">
          {teams.map((team: Team, teamIndex: number) => {
            const teamClasses = colorClasses[team.color];
            return (
              <div key={teamIndex} className="group">
                {/* Team Header */}
                <div className={`${teamClasses.bgColor} rounded-3xl p-8 mb-8 border-2 ${teamClasses.borderColor} flex flex-col items-center text-center md:flex-row md:justify-between md:text-left`}>
                  <div className="flex flex-col items-center md:flex-row md:space-x-4 mb-4 md:mb-0">
                    <div className={`w-16 h-16 ${teamClasses.bg} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                      <team.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{team.name}</h3>
                      <p className="text-gray-600 text-lg mt-2">{team.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                      {team.members.length} Team Members
                    </span>
                    <button
                      onClick={() => openPopup(team)}
                      className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 transform scale-100 hover:scale-105
                        bg-${team.color}-600 text-white hover:bg-${team.color}-700 focus:outline-none focus:ring-2 focus:ring-${team.color}-500 focus:ring-offset-2
                        ${team.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500' :
                        team.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' :
                        team.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500' :
                        team.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' :
                        'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'}`}
                    >
                      See Their Work
                    </button>
                  </div>
                </div>

                {/* Team Members Grid (unchanged) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {team.members.map((member: Member, memberIndex: number) => {
                    const memberClasses = colorClasses[team.color];
                    return (
                      <motion.div
                        key={memberIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: memberIndex * 0.1 }}
                        className="group/card relative"
                      >
                        {member.isHead ? (
                          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-yellow-200 overflow-hidden">
                            <div className={`${memberClasses.bgColor} p-6 relative`}>
                              <div className="absolute top-3 right-3">
                                <motion.div
                                  animate={{ rotate: [0, 10, 0] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                  className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
                                >
                                  <Star className="w-4 h-4 text-white" />
                                </motion.div>
                              </div>
                              <div className="relative w-24 h-24 mx-auto mb-4">
                                <img src={member.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transform group-hover/card:scale-110 transition-transform duration-300" onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`; }} />
                                <motion.div className="absolute inset-0 rounded-full border-2 border-yellow-200" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
                              </div>
                              <div className="text-center">
                                <span className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">Category Head</span>
                              </div>
                            </div>
                            <div className="p-6 text-center">
                              <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                              <p className={`${memberClasses.text} font-semibold text-sm mb-1`}>{member.role}</p>
                              <p className="text-gray-500 text-xs mb-4">{member.id}</p>
                              <div className="flex justify-center space-x-3">
                                <motion.a whileHover={{ scale: 1.2 }} href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                                  <Instagram className="w-4 h-4" />
                                </motion.a>
                                <motion.a whileHover={{ scale: 1.2 }} href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${memberClasses.linkBg} w-8 h-8 rounded-lg flex items-center justify-center ${memberClasses.hoverBg} hover:text-white transition-all duration-300`}>
                                  <Linkedin className="w-4 h-4" />
                                </motion.a>
                                {member.portfolioUrl && (
                                  <motion.a whileHover={{ scale: 1.2 }} href={member.portfolioUrl} target="_blank" rel="noopener noreferrer" className={`${memberClasses.linkBg} w-8 h-8 rounded-lg flex items-center justify-center ${memberClasses.hoverBg} hover:text-white transition-all duration-300`}>
                                    <Globe className="w-4 h-4" />
                                  </motion.a>
                                )}
                              </div>
                            </div>
                            <div className={`h-1 ${memberClasses.bg}`}></div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                            <div className={`${memberClasses.bgColor} p-6 relative`}>
                              {member.isHead && (<div className="absolute top-3 right-3"><div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"><Star className="w-4 h-4 text-white" /></div></div>)}
                              <div className="relative w-24 h-24 mx-auto mb-4">
                                <img src={member.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transform group-hover/card:scale-110 transition-transform duration-300" onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`; }} />
                                <motion.div className="absolute inset-0 rounded-full border-2 border-white" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                              </div>
                            </div>
                            <div className="p-6 text-center">
                              <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                              <p className={`${memberClasses.text} font-semibold text-sm mb-1`}>{member.role}</p>
                              <p className="text-gray-500 text-xs mb-4">{member.id}</p>
                              <div className="flex justify-center space-x-3">
                                <motion.a whileHover={{ scale: 1.2 }} href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                                  <Instagram className="w-4 h-4" />
                                </motion.a>
                                <motion.a whileHover={{ scale: 1.2 }} href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${memberClasses.linkBg} w-8 h-8 rounded-lg flex items-center justify-center ${memberClasses.hoverBg} hover:text-white transition-all duration-300`}>
                                  <Linkedin className="w-4 h-4" />
                                </motion.a>
                                {member.portfolioUrl && (
                                  <motion.a whileHover={{ scale: 1.2 }} href={member.portfolioUrl} target="_blank" rel="noopener noreferrer" className={`${memberClasses.linkBg} w-8 h-8 rounded-lg flex items-center justify-center ${memberClasses.hoverBg} hover:text-white transition-all duration-300`}>
                                    <Globe className="w-4 h-4" />
                                  </motion.a>
                                )}
                              </div>
                            </div>
                            <div className={`h-1 ${memberClasses.bg}`}></div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gray-50 rounded-3xl p-12 border-2 border-gray-100">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">🚀 Join the Innovation</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At Tech Titans, we don't just work—we create, innovate, and redefine digital excellence. Whether you're passionate about technology, designing, editing, photography, or social media management, this is the place for you! 🌟
            </p>
            <p className="text-lg text-gray-700 font-medium">
              Be a part of Tech Titans and contribute to making every college event extraordinary!
            </p>
          </div>
        </div>
      </div>

      {/* Popup Component */}
      <AnimatePresence>
        {selectedTeam && (
          <WorkPopup team={selectedTeam} onClose={closePopup} />
        )}
      </AnimatePresence>
    </section>
  );
};

const WorkPopup = ({ team, onClose }: { team: Team | null; onClose: () => void }) => {
  if (!team) return null;

  const renderWorkContent = (item: WorkItem, index: number) => {
    switch (item.type) {
      case 'image':
        return (
          <img
            src={item.url}
            alt={item.alt || 'Team work'}
            className="w-full h-auto rounded-lg shadow-md"
          />
        );
      case 'youtube':
        return (
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src={item.url}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'instagram':
      case 'facebook':
        return (
          <div className="w-full text-center p-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">{item.title}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={20} />
              <span>View Post</span>
            </a>
          </div>
        );
      case 'google-photos':
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full block rounded-lg overflow-hidden shadow-md group"
          >
            <img
              src={item.thumbnail}
              alt="Google Photos Album Thumbnail"
              className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">View Album</span>
            </div>
          </a>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 bg-opacity-75 z-[9999] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="relative bg-white rounded-3xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">{team.name} Work</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {team.work.length > 0 ? (
            team.work.map((item: WorkItem, index: number) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col justify-center items-center">
                {renderWorkContent(item, index)}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center p-12">
              <p className="text-gray-500 text-lg">No work examples available for this team yet.</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Teams;