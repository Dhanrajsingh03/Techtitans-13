import React from 'react';
import { Palette, Video, Share2, Camera, Zap, Instagram, Twitter, Linkedin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Teams = () => {
  const teams = [
    {
      name: 'Graphic Designing Team',
      description: 'Creating eye-catching posters, thumbnails, and visual content',
      icon: Palette,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-600',
      members: [
        { 
          name: 'Sumit Raj', 
          role: 'Category Head', 
          id: '2023-CSE-048', 
          instagram: '@sumit_raj', 
          twitter: '@sumitraj_gfx', 
          linkedin: 'sumit-raj',
          isHead: true,
          profilePic: '/images/members/sumit-raj.jpg'
        },
        { 
          name: 'Himanshu Kumar', 
          role: 'Designer', 
          id: '2024-EC-040', 
          instagram: '@himanshu_designs', 
          twitter: '@himanshu_ee', 
          linkedin: 'himanshu-kumar',
          profilePic: '/images/members/himanshu-kumar.jpg'
        },
        { 
          name: 'Sunny Kumar', 
          role: 'Designer', 
          id: '2024-CSE-054', 
          instagram: '@sunny_creative', 
          twitter: '@sunny_me', 
          linkedin: 'sunny-kumar',
          profilePic: '/images/members/sunny-kumar.jpg'
        },
        { 
          name: 'Mansi Kumari', 
          role: 'Designer', 
          id: '2024-EE-007', 
          instagram: '@mansi_art', 
          twitter: '@mansi_ece', 
          linkedin: 'mansi-kumari',
          profilePic: '/images/members/mansi-kumari.jpg'
        }
      ]
    },
    {
      name: 'Video Editing Team',
      description: 'Crafting cinematic experiences that capture unforgettable moments',
      icon: Video,
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      iconBg: 'bg-emerald-600',
      members: [
        { 
          name: 'Prashant Kumar', 
          role: 'Editor', 
          id: '2023-CSE-038', 
          instagram: '@prashant_cuts', 
          twitter: '@prashant_cs', 
          linkedin: 'prashant-kumar',
          isHead: true,
          profilePic: '/images/members/prashant-kumar.jpg'
        },
        { 
          name: 'Deepa Chandra', 
          role: 'Editor', 
          id: '2023-EC-053', 
          instagram: '@deepa_edits', 
          twitter: '@deepa_ec', 
          linkedin: 'deepa-chandra',
           isHead: true,
          profilePic: '/images/members/deepa-chandra.jpg'
        },
        { 
          name: 'Sumit Kumar', 
          role: 'Editor', 
          id: '2023-EE-013', 
          instagram: '@sumit_motion', 
          twitter: '@sumit_el', 
          linkedin: 'sumit-kumar-el',
          profilePic: '/images/members/sumit-kumar-el.jpg'
        },
        { 
          name: 'Aaryan', 
          role: 'Editor', 
          id: '2024-CSE-047', 
          instagram: '@aaryan_video', 
          twitter: '@aaryan_cse', 
          linkedin: 'aaryan',
          profilePic: '/images/members/aaryan.jpg'
        }
      ]
    },
    {
      name: 'Social Media Management Team',
      description: 'Keeping the digital world informed and engaged',
      icon: Share2,
      color: 'orange',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-600',
      members: [
        { 
          name: 'Angel', 
          role: 'Category Head', 
          id: '2023-EC-045', 
          instagram: '@angel_sm', 
          twitter: '@angel_ec', 
          linkedin: 'angel',
          isHead: true,
          profilePic: '/images/members/angel.jpg'
        },
        { 
          name: 'Nitish Kumar Paswan', 
          role: 'Manager', 
          id: '2023-EE-027', 
          instagram: '@nitish_social', 
          twitter: '@nitish_ee', 
          linkedin: 'nitish-paswan',
          profilePic: '/images/members/nitish-paswan.jpg'
        },
        { 
          name: 'Prince Kushagra', 
          role: 'Manager', 
          id: '2024-EC-050', 
          instagram: '@prince_sm', 
          twitter: '@prince_ec', 
          linkedin: 'prince-kushagra',
          profilePic: '/images/members/prince-kushagra.jpg'
        },
        { 
          name: 'Aditya Kumar Singh', 
          role: 'Manager', 
          id: '2024-CE-090', 
          instagram: '@aditya_sm', 
          twitter: '@aditya_ce', 
          linkedin: 'aditya-kumar-singh',
          profilePic: '/images/members/aditya-kumar-singh.jpg'
        }
      ]
    },
    {
      name: 'Photography Team',
      description: 'Freezing memories in breathtaking frames',
      icon: Camera,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      iconBg: 'bg-indigo-600',
      members: [
        { 
          name: 'Mritunjay Kumar', 
          role: 'Category Head', 
          id: '2023-EC-024', 
          instagram: '@mrityunjay_lens', 
          twitter: '@mrityunjay_ec', 
          linkedin: 'mrityunjay-kumar',
          isHead: true,
          profilePic: '/images/members/mrityunjay-kumar.jpg'
        },
        { 
          name: 'Raunak Kumar Singh', 
          role: 'Photographer', 
          id: '2024-ECE-055', 
          instagram: '@raunak_clicks', 
          twitter: '@raunak_ece', 
          linkedin: 'raunak-kumar-singh',
          profilePic: '/images/members/raunak-kumar-singh.jpg'
        },
        { 
          name: 'Shreeyansh Kumar', 
          role: 'Photographer', 
          id: '2024-A-054', 
          instagram: '@shreeyansh_shots', 
          twitter: '@shreeyansh_arch', 
          linkedin: 'shreeyansh-kumar',
          profilePic: '/images/members/shreeyansh-kumar.jpg'
        }
      ]
    },
    {
      name: 'Technical Team',
      description: 'Managing sound, lighting, and all the tech magic behind the scenes',
      icon: Zap,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-600',
      members: [
        { 
          name: 'Manjeet Kumar', 
          role: 'Category Head', 
          id: '2023-EC-09', 
          instagram: '@manjeet_tech', 
          twitter: '@manjeet_ec', 
          linkedin: 'manjeet-kumar',
          isHead: true,
          profilePic: '/images/members/manjeet-kumar.jpg'
        },
          { 
          name: 'Dhanraj Kumar', 
          role: 'Category Head', 
          id: '2023-EC-39', 
          instagram: '@dhanraj_tech', 
          twitter: '@dhanraj_ec', 
          linkedin: 'dhanraj-kumar',
          isHead: true,
          profilePic: 'https://cozyo.in/assets/Dhanraj-Ql0UMMOo.jpg'
        },
        { 
          name: 'Krishna Kanhaiya', 
          role: 'Technical Specialist', 
          id: '2023-EC-088', 
          instagram: '@krishna_tech', 
          twitter: '@krishna_ee', 
          linkedin: 'krishna-kanhaiya',
          profilePic: '/images/members/krishna-kanhaiya.jpg'
        },
        { 
          name: 'Chhavi Kumari', 
          role: 'Technical Specialist', 
          id: '2023-C-031', 
          instagram: '@chhavi_tech', 
          twitter: '@chhavi_c', 
          linkedin: 'chhavi-kumari',
          profilePic: '/images/members/chhavi-kumari.jpg'
        },
        { 
          name: 'Umashankar Kumar', 
          role: 'Technical Specialist', 
          id: '2024-CSE-036', 
          instagram: '@umashankar_tech', 
          twitter: '@umashankar_cse', 
          linkedin: 'umashankar-kumar',
          profilePic: '/images/members/umashankar-kumar.jpg'
        },
        { 
          name: 'Sona', 
          role: 'Technical Specialist', 
          id: '2023-EC-055', 
          instagram: '@sona_tech', 
          twitter: '@sona_ee', 
          linkedin: 'sona-ee',
          profilePic: '/images/members/sona-ee.jpg'
        },
        { 
          name: 'Anushka Chaudhary', 
          role: 'Technical Specialist', 
          id: '2024-EC-007', 
          instagram: '@anushka_tech', 
          twitter: '@anushka_ec', 
          linkedin: 'anushka-chaudhary',
          profilePic: '/images/members/anushka-chaudhary.jpg'
        },
        { 
          name: 'Taniya Kumari', 
          role: 'Technical Specialist', 
          id: '2024-ECE-016', 
          instagram: '@taniya_tech', 
          twitter: '@taniya_ece', 
          linkedin: 'taniya-kumari',
          profilePic: '/images/members/taniya-kumari.jpg'
        },
        { 
          name: 'Rachana Bharti', 
          role: 'Technical Specialist', 
          id: '2024-ECE-062', 
          instagram: '@rachana_tech', 
          twitter: '@rachana_ece', 
          linkedin: 'rachana-bharti',
          profilePic: '/images/members/rachana-bharti.jpg'
        },
        { 
          name: 'Priyanshu Kumar Ray', 
          role: 'Technical Specialist', 
          id: '2024-ECE-019', 
          instagram: '@priyanshu_tech', 
          twitter: '@priyanshu_ece', 
          linkedin: 'priyanshu-kumar-ray',
          profilePic: '/images/members/priyanshu-kumar-ray.jpg'
        }
      ]
    }
  ];

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
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className="group">
              {/* Team Header */}
              <div className={`${team.bgColor} rounded-3xl p-8 mb-8 border-2 ${team.borderColor}`}>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className={`w-16 h-16 ${team.iconBg} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <team.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-900">{team.name}</h3>
                    <p className="text-gray-600 text-lg mt-2">{team.description}</p>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-gray-700 font-medium">
                    {team.members.length} Team Members
                  </span>
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {team.members.map((member, memberIndex) => (
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
                        {/* Member Header */}
                        <div className={`${team.bgColor} p-6 relative`}>
                          <div className="absolute top-3 right-3">
                            <motion.div
                              animate={{ rotate: [0, 10, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
                            >
                              <Star className="w-4 h-4 text-white" />
                            </motion.div>
                          </div>
                          
                          {/* Profile Picture */}
                          <div className="relative w-24 h-24 mx-auto mb-4">
                            <img
                              src={member.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transform group-hover/card:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-yellow-200"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </div>

                          {/* Category Head Badge */}
                          <div className="text-center">
                            <span className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                              Category Head
                            </span>
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="p-6 text-center">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                          <p className={`text-${team.color}-600 font-semibold text-sm mb-1`}>{member.role}</p>
                          <p className="text-gray-500 text-xs mb-4">{member.id}</p>

                          {/* Social Links */}
                          <div className="flex justify-center space-x-3">
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              href={`https://instagram.com/${member.instagram.substring(1)}`}
                              className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300"
                            >
                              <Instagram className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              href={`https://twitter.com/${member.twitter.substring(1)}`}
                              className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                              <Twitter className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              href={`https://linkedin.com/in/${member.linkedin}`}
                              className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all duration-300"
                            >
                              <Linkedin className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="h-1 bg-yellow-500"></div>
                      </div>
                    ) : (
                      // Regular Member Card
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                        <div className={`${team.bgColor} p-6 relative`}>
                          {member.isHead && (
                            <div className="absolute top-3 right-3">
                              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                <Star className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                          
                          <div className="relative w-24 h-24 mx-auto mb-4">
                            <img
                              src={member.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transform group-hover/card:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-white"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                        <div className="p-6 text-center">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                          <p className={`text-${team.color}-600 font-semibold text-sm mb-1`}>{member.role}</p>
                          <p className="text-gray-500 text-xs mb-4">{member.id}</p>
                          <div className="flex justify-center space-x-3">
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              href={`https://instagram.com/${member.instagram.substring(1)}`}
                              className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300"
                            >
                              <Instagram className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              href={`https://twitter.com/${member.twitter.substring(1)}`}
                              className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                              <Twitter className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              href={`https://linkedin.com/in/${member.linkedin}`}
                              className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all duration-300"
                            >
                              <Linkedin className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </div>
                        <div className={`h-1 bg-${team.color}-600`}></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Teams;