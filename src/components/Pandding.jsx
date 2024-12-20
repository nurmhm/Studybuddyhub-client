import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Pandding = () => {
   const [pendingItems, setPendingItems] = useState([]);
   const assignment = useLoaderData();

   useEffect(() => {
      const allPending = assignment.filter((ass) => ass.status === "pandding");
      setPendingItems(allPending);
   }, [assignment]);

   if (!assignment) {
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

   return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
         {/* Page Header */}
         <h1 className="text-center text-3xl font-bold text-[#004643] mb-8">
            All Pending Assignments
         </h1>

         {/* Responsive Table */}
         <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="table w-full border-collapse bg-white">
               {/* Table Head */}
               <thead className="bg-[#004643] text-white text-sm">
                  <tr>
                     <th className="p-3 text-left">Your Photo</th>
                     <th className="p-3 text-left">Assignment Title</th>
                     <th className="p-3 text-left">Examinee Email</th>
                     <th className="p-3 text-left">Assignment Marks</th>
                     <th className="p-3 text-left">Actions</th>
                  </tr>
               </thead>

               {/* Table Body */}
               <tbody className="text-gray-700">
                  {pendingItems.map((submit) => (
                     <tr
                        key={submit._id}
                        className="hover:bg-gray-100 transition duration-200"
                     >
                        {/* Avatar */}
                        <td className="p-3">
                           <div className="flex items-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img
                                       src={submit?.photoURL}
                                       alt="User Avatar"
                                       className="object-cover"
                                    />
                                 </div>
                              </div>
                           </div>
                        </td>

                        {/* Title */}
                        <td className="p-3 font-semibold">{submit?.title}</td>

                        {/* Examinee Email */}
                        <td className="p-3">{submit?.examineeEmail}</td>

                        {/* Marks */}
                        <td className="p-3">
                           {submit.status === "pandding" ? (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                 Pending, Please Wait
                              </span>
                           ) : (
                              <span>{submit.mark}</span>
                           )}
                        </td>

                        {/* Actions */}
                        <td className="p-3">
                           <Link to={`/givemark/${submit._id}`}>
                              <button className="flex items-center gap-2 px-4 py-2 border-2 border-green-500 text-green-600 font-medium rounded-md hover:bg-green-500 hover:text-white transition duration-300">
                                 <i className="fa-solid fa-check"></i> Give Mark
                              </button>
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {/* No Data Message */}
         {pendingItems.length === 0 && (
            <div className="text-center mt-8 text-gray-500 text-lg">
               No pending assignments at the moment.
            </div>
         )}
      </div>
   );
};

export default Pandding;
