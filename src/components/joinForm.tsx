import React, { useState } from 'react';
import { Send, Zap, UserCircle, Mail, Building2, Target, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Other'];
  const interests = ['Graphic Design', 'Video Editing', 'Photography', 'Technical Team', 'Content Creation'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full mx-4"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center transform rotate-12 mx-auto mb-6"
          >
            <Zap className="w-10 h-10 text-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center text-gray-900 mb-3"
          >
            Application Sent!
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-center"
          >
            Thanks for your interest. We'll get back to you soon!
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-600 text-lg">
            Be part of our innovative tech community
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="md:flex">
            {/* Left Side - Info */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-4/12 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white relative overflow-hidden"
            >
              {/* Background Animation */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.2, 0.3]
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
                  <ul className="space-y-3">
                    {[
                      'Work on innovative projects',
                      'Learn from experts',
                      'Access to new tech',
                      'Growth opportunities'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
                        <span className="text-sm text-blue-50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-500/30 rounded-xl p-4">
                  <h3 className="text-sm font-semibold mb-2">Current Openings:</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:w-8/12 p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                {/* Form fields with hover animations */}
                {[
                  { icon: UserCircle, placeholder: "Full Name", type: "text", value: formData.fullName, field: "fullName" },
                  { icon: Mail, placeholder: "Email Address", type: "email", value: formData.email, field: "email" },
                  { icon: Building2, placeholder: "Department", type: "select", value: formData.department, field: "department", options: departments },
                  { icon: Target, placeholder: "Interest", type: "select", value: formData.interest, field: "interest", options: interests },
                  { icon: MessageSquare, placeholder: "Message", type: "textarea", value: formData.message, field: "message" }
                ].map((field, index) => (
                  <motion.div
                    key={field.placeholder}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <field.icon className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    {field.type !== 'textarea' ? (
                      field.type === 'select' ? (
                        <select
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                          value={field.value}
                          onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options && field.options.map((option: string) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300"
                          value={field.value}
                          onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                          placeholder={field.placeholder}
                        />
                      )
                    ) : (
                      <textarea
                        required
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        value={field.value}
                        onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm font-medium"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinForm;