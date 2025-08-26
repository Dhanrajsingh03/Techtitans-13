// import React, { useEffect, useState } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase";
// import { motion } from "framer-motion";
// import { UserCircle, Mail, Building2, Target, MessageSquare } from "lucide-react";

// interface Application {
//   id: string;
//   fullName: string;
//   email: string;
//   department: string;
//   interest: string;
//   message?: string;
//   submittedAt?: string;
// }

// const ApplicationsList: React.FC = () => {
//   const [applications, setApplications] = useState<Application[]>([]);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "applications"), (snapshot) => {
//       const appsData: Application[] = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as Application[];
//       setApplications(appsData);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto mt-16 px-4">
//       <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
//         Submitted Applications
//       </h2>

//       {applications.length === 0 ? (
//         <p className="text-gray-500 text-center">No applications yet.</p>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {applications.map((app, index) => (
//             <motion.div
//               key={app.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 p-6"
//             >
//               {/* Header */}
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md">
//                   <UserCircle className="w-7 h-7" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {app.fullName}
//                   </h3>
//                   <p className="text-sm text-gray-500 flex items-center gap-1">
//                     <Mail className="w-4 h-4 text-blue-400" /> {app.email}
//                   </p>
//                 </div>
//               </div>

//               {/* Badges */}
//               <div className="flex flex-wrap gap-2 mb-3">
//                 <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
//                   <Building2 className="w-4 h-4" /> {app.department}
//                 </span>
//                 <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-pink-100 text-pink-600 rounded-full">
//                   <Target className="w-4 h-4" /> {app.interest}
//                 </span>
//               </div>

//               {/* Message */}
//               {app.message && (
//                 <p className="text-gray-700 text-sm mb-3 flex items-start gap-2">
//                   <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5" />
//                   {app.message}
//                 </p>
//               )}

//               {/* Footer */}
//               <p className="text-xs text-gray-400 text-right">
//                 Submitted:{" "}
//                 {app.submittedAt
//                   ? new Date(app.submittedAt).toLocaleString()
//                   : "N/A"}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApplicationsList;
