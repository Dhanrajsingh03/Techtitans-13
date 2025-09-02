import React from 'react';
import { Mail, Award, Users } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Mrs. Anushka Pradhan',
      title: 'Faculty Coordinator',
      department: 'Electronics Department',
      email: 'a.pradhan2780@gmail.com',
      image: 'images/members/anushka mam.jpg',
      specialization: 'Digital Innovation & Creative Technology'
    },
    {
      name: 'Mrs. Shweta Chaubey',
      title: 'Faculty Coordinator',
      department: 'Electrical Department',
      email: 'swetabhu47@gmail.com',
      image: 'images/members/sweta mam.jpg',
      specialization: 'Technical Systems & Event Management'
    },
    {
      name: 'Mr. Umar Farooque',
      title: 'Faculty Coordinator',
      department: 'Computer Science Department',
      email: 'umar.farooque@college.edu',
      image: 'https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg',
      specialization: 'Project Management & Innovation'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl font-black text-gray-900">Faculty Coordinators</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished faculty members who guide and inspire our creative journey with their expertise and vision
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-center relative">
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-lg mb-1">{member.title}</p>
                  <p className="text-gray-600 font-medium mb-3">{member.department}</p>
                  <p className="text-gray-500 text-sm mb-6 italic">{member.specialization}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="group/link w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Mail className="w-5 h-5 text-blue-600 group-hover/link:text-white transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-emerald-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;