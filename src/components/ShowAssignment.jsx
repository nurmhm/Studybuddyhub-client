import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AssignCart from "./AssignCart";
import { AuthContext } from "../providers/AuthProvider";
import { FaFilter } from "react-icons/fa";

const ShowAssignment = () => {
   const { user } = useContext(AuthContext);
   const [assignments, setAssignments] = useState([]);
   const [filteredAssignments, setFilteredAssignments] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      axios.get(`http://localhost:9000/assignments`)
         .then(res => {
            setAssignments(res.data);
            setFilteredAssignments(res.data);
            setLoading(false);
         })
         .catch(err => {
            setError(err);
            setLoading(false);
         });
   }, []);

   const handleFilter = (event) => {
      const difficulty = event.target.value;
      if (difficulty === "All") {
         setFilteredAssignments(assignments);
      } else {
         const filtered = assignments.filter(assignment => assignment.diffrculty === difficulty);
         setFilteredAssignments(filtered);
      }
   };

   const handleDelete = (id, email) => {
      if (email !== user.email) {
         alert("You are not authorized to delete this assignment.");
         return;
      }
      const proceed = window.confirm("Are you sure you want to delete this assignment?");
      if (proceed) {
         axios.delete(`http://localhost:9000/delete/${id}`)
            .then(res => {
               if (res.data.deletedCount > 0) {
                  const remaining = filteredAssignments.filter(assignment => assignment._id !== id);
                  setFilteredAssignments(remaining);
               }
            })
            .catch(err => {
               console.error(err);
            });
      }
   };

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
            <div className="text-red-500 text-xl font-semibold">
               Error: {error.message}
            </div>
         </div>
      );
   }

   return (
      <div className="container mx-auto px-4 py-12">
         {/* Page Header */}
         <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#004643]">Assignments</h1>
            <p className="text-gray-500 mt-2">Browse assignments and filter by difficulty.</p>
         </div>

         {/* Filter Dropdown */}
         <div className="flex justify-center mb-8">
            <div className="relative">
               <FaFilter className="absolute left-3 top-3 text-gray-500" />
               <select
                  id="difficulty"
                  name="difficulty"
                  className="pl-10 pr-4 py-2 border-2 border-[#004643] rounded-md text-[#004643] bg-[#FAF3DD] focus:outline-none focus:ring-2 focus:ring-[#004643]"
                  onChange={handleFilter}
               >
                  <option value="All">All</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
               </select>
            </div>
         </div>

         {/* Assignment Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssignments?.length > 0 ? (
               filteredAssignments.map(assignment => (
                  <AssignCart
                     key={assignment._id}
                     assignment={assignment}
                     handleDelete={handleDelete}
                  />
               ))
            ) : (
               <div className="col-span-full text-center text-lg font-semibold text-[#004643]">
                  No assignments available. Please add some first!
               </div>
            )}
         </div>
      </div>
   );
};

export default ShowAssignment;
