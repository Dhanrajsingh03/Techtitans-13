import React, { useState, useEffect } from "react";
import {
  Send,
  Zap,
  UserCircle,
  Mail,
  Building2,
  Target,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// Responsive departments/interests
const departments = [
  "Computer Science",
  "Electronics",
  "Civil",
  "Electrical",
  "Mechanical",
  "Other",
];
const interests = [
  "Graphic Design",
  "Video Editing",
  "Photography",
  "Technical Team",
  "Content Creation",
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const inputVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const avatarColors = [
  "bg-gradient-to-br from-pink-400 via-blue-400 to-indigo-500",
  "bg-gradient-to-br from-blue-400 via-teal-400 to-green-400",
  "bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400",
];

// Responsive: detect window size for confetti
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

const JoinForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [avatarColor] = useState(
    avatarColors[Math.floor(Math.random() * avatarColors.length)]
  );
  const { width, height } = useWindowSize();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "applications"), {
        fullName: formData.fullName,
        email: formData.email,
        department: formData.department,
        interest: formData.interest,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      });
      setSubmitSuccess(true);
    } catch (error) {
      alert("Error submitting your application. Please try again.");
      console.error("Firestore Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-10 via-white to-pink-10 relative overflow-hidden">
        <Confetti
          width={width}
          height={height}
          numberOfPieces={120}
          recycle={false}
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full mx-2 sm:mx-4 border border-blue-100"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 ${avatarColor} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
          >
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 sm:mb-3"
          >
            Application Sent!
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-center text-sm sm:text-base"
          >
            Thanks for your interest. We'll get back to you soon!
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-10 via-white to-pink-10 py-8 sm:py-12 px-2 sm:px-4">
      <div className="max-w-3xl sm:max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex justify-center items-center mb-4 sm:mb-6">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`w-12 h-12 sm:w-16 sm:h-16 ${avatarColor} rounded-full flex items-center justify-center shadow-lg`}
            >
              <UserCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-1 sm:mb-2 tracking-tight drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-2">
            Be part of our <span className="font-semibold text-blue-500">innovative tech community</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {interests.map((interest, idx) => (
              <span
                key={interest}
                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-blue-100 bg-white/70 text-blue-600`}
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-blue-100"
        >
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-4/12 bg-gradient-to-br from-blue-400 to-pink-300 p-6 sm:p-10 text-white relative overflow-hidden flex flex-col justify-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.2, 0.3],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-0 right-0 w-40 sm:w-96 h-40 sm:h-96 bg-pink-300 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"
              />
              <div className="relative z-10">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 drop-shadow-lg">Why Join Us?</h2>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Work on innovative projects",
                      "Learn from industry experts",
                      "Access to cutting-edge tech",
                      "Growth & leadership opportunities",
                      "Creative, friendly environment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Sparkles className="text-yellow-300 w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                        <span className="text-xs sm:text-sm text-pink-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-2 sm:p-4 shadow-lg">
                  <h3 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Open Teams:</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-white/10 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs text-blue-50 border border-white/30"
                      >
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
              className="md:w-8/12 p-4 sm:p-10"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-8 max-w-lg sm:max-w-2xl mx-auto"
                autoComplete="off"
              >
                {[
                  {
                    icon: UserCircle,
                    placeholder: "Full Name",
                    type: "text",
                    value: formData.fullName,
                    field: "fullName",
                  },
                  {
                    icon: Mail,
                    placeholder: "Email Address",
                    type: "email",
                    value: formData.email,
                    field: "email",
                  },
                  {
                    icon: Building2,
                    placeholder: "Department",
                    type: "select",
                    value: formData.department,
                    field: "department",
                    options: departments,
                  },
                  {
                    icon: Target,
                    placeholder: "Interest",
                    type: "select",
                    value: formData.interest,
                    field: "interest",
                    options: interests,
                  },
                  {
                    icon: MessageSquare,
                    placeholder: "Message",
                    type: "textarea",
                    value: formData.message,
                    field: "message",
                  },
                ].map((field, index) => (
                  <motion.div
                    key={field.placeholder}
                    initial="initial"
                    animate="animate"
                    variants={inputVariants}
                    className="relative"
                  >
                    <field.icon className="absolute left-3 top-3 text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                    {field.type !== "textarea" ? (
                      field.type === "select" ? (
                        <select
                          required
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/70 border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-base appearance-none shadow-sm hover:shadow-md"
                          value={field.value}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.field]: e.target.value,
                            })
                          }
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options &&
                            field.options.map((option: string) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          required
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/70 border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base transition-all duration-300 shadow-sm hover:shadow-md"
                          value={field.value}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.field]: e.target.value,
                            })
                          }
                          placeholder={field.placeholder}
                        />
                      )
                    ) : (
                      <textarea
                        required
                        rows={2}
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/70 border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base shadow-sm hover:shadow-md"
                        value={field.value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.field]: e.target.value,
                          })
                        }
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold tracking-wide text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 sm:gap-3"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5 sm:w-6 sm:h-6" />
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