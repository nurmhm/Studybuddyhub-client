import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const MyAttempted = () => {
   const { user } = useContext(AuthContext);
   const [mysubmit, setMysubmit] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (!user) return;

      axios
         .get(`${import.meta.env.VITE_API_URL}/submitted`)
         .then((res) => {
            const myattempted = res.data.filter(
               (data) => data.examineeEmail === user.email
            );
            setMysubmit(myattempted);
            setLoading(false);
         })
         .catch((err) => {
            console.error(err);
            setError("Failed to fetch data");
            setLoading(false);
         });
   }, [user]);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-2">
               <span className="loading loading-ball loading-sm"></span>
               <span className="loading loading-ball loading-md"></span>
               <span className="loading loading-ball loading-lg"></span>
            </div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="flex justify-center items-center h-screen">
            <p className="text-red-600 font-semibold">{error}</p>
         </div>
      );
   }

   return (
      <div className="container mx-auto px-4 min-h-screen py-8">
         {/* Page Title */}
         <h1 className="text-center text-3xl font-bold text-[#004643] mb-8">
            My Attempted Assignments
         </h1>

         {/* Responsive Table */}
         <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="table w-full border-collapse bg-white">
               {/* Table Header */}
               <thead className="bg-[#004643] text-white text-sm uppercase">
                  <tr>
                     <th className="p-3 text-left">Your Photo</th>
                     <th className="p-3 text-left">Assignment Title</th>
                     <th className="p-3 text-left">Assignment Status</th>
                     <th className="p-3 text-left">Assignment Marks</th>
                  </tr>
               </thead>

               {/* Table Body */}
               <tbody>
                  {mysubmit.map((submit) => (
                     <tr
                        key={submit._id}
                        className="hover:bg-gray-100 transition duration-200"
                     >
                        {/* Photo */}
                        <td className="p-3">
                           <div className="flex items-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img
                                       src={user?.photoURL}
                                       alt="User Avatar"
                                       className="object-cover"
                                    />
                                 </div>
                              </div>
                           </div>
                        </td>

                        {/* Assignment Title */}
                        <td className="p-3 font-medium">{submit?.title}</td>

                        {/* Assignment Status */}
                        <td className="p-3">
                           {submit?.status === "pandding" ? (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                 Pending
                              </span>
                           ) : (
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                 {submit?.status}
                              </span>
                           )}
                        </td>

                        {/* Marks */}
                        <td className="p-3">
                           <button
                              className={`px-3 py-1 rounded-md font-medium ${
                                 submit.status === "pandding"
                                    ? "bg-gray-200 text-gray-600"
                                    : "bg-blue-100 text-blue-700"
                              }`}
                           >
                              {submit.status === "pandding"
                                 ? "Pending..."
                                 : `${submit.mark}`}
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {/* No Data */}
         {mysubmit.length === 0 && (
            <div className="text-center mt-8 text-gray-500">
               <p>No attempted assignments yet.</p>
            </div>
         )}
      </div>
   );
};

export default MyAttempted;
