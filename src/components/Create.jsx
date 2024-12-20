import axios from 'axios';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../providers/AuthProvider';
import { FaPlusCircle } from 'react-icons/fa';

const Create = () => {
   const [dueDate, setDueDate] = useState(null);
   const { user } = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const mark = form.mark.value;
      const photourl = form.photourl.value;
      const diffrculty = form.diffrculty.value;
      const email = user?.email;
      const date = dueDate ? dueDate.toLocaleDateString('en-GB') : '';

      const assignment = { title, description, mark, photourl, diffrculty, date, email };

      axios.post(`http://localhost:9000/assignments`, assignment)
         .then(res => {
            if (res.data._id) {
               toast.success("🎉 Assignment created successfully!");
               form.reset();
               setDueDate(null);
            }
         })
         .catch(err => toast.error(`❌ Error: ${err.message}`));
   };

   return (
      <div className="flex items-center justify-center min-h-screen ">
         <div className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
            {/* Header */}
            <div className="text-center mb-8">
               <h2 className="text-4xl font-bold text-[#004643] flex items-center justify-center gap-2">
                  <FaPlusCircle className="text-[#004643] text-3xl" /> Create Assignment
               </h2>
               <p className="text-gray-600 mt-2">Fill in the details below to create a new assignment.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
               {/* Input Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div>
                     <label className="block text-sm font-medium text-gray-700">Title</label>
                     <input
                        type="text"
                        name="title"
                        placeholder="Enter assignment title"
                        className="mt-2 w-full p-3 rounded-lg bg-white text-gray-700 shadow-sm border focus:ring-2 focus:ring-[#004643] focus:outline-none"
                        required
                     />
                  </div>

                  {/* Marks */}
                  <div>
                     <label className="block text-sm font-medium text-gray-700">Marks</label>
                     <input
                        type="number"
                        name="mark"
                        placeholder="Enter marks (e.g., 100)"
                        className="mt-2 w-full p-3 rounded-lg bg-white text-gray-700 shadow-sm border focus:ring-2 focus:ring-[#004643] focus:outline-none"
                        required
                     />
                  </div>

                  {/* Image URL */}
                  <div>
                     <label className="block text-sm font-medium text-gray-700">Thumbnail Image URL</label>
                     <input
                        type="text"
                        name="photourl"
                        placeholder="Paste image URL here"
                        className="mt-2 w-full p-3 rounded-lg bg-white text-gray-700 shadow-sm border focus:ring-2 focus:ring-[#004643] focus:outline-none"
                        required
                     />
                  </div>

                  {/* Difficulty */}
                  <div>
                     <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                     <select
                        name="diffrculty"
                        className="mt-2 w-full p-3 rounded-lg bg-white text-gray-700 shadow-sm border focus:ring-2 focus:ring-[#004643] focus:outline-none"
                     >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                     </select>
                  </div>

                  {/* Due Date */}
                  <div className="col-span-full">
                     <label className="block text-sm font-medium text-gray-700">Due Date</label>
                     <DatePicker
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a due date"
                        className="mt-2 w-full p-3 rounded-lg bg-white text-gray-700 shadow-sm border focus:ring-2 focus:ring-[#004643] focus:outline-none"
                        required
                     />
                  </div>
               </div>

               {/* Description */}
               <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                     name="description"
                     rows="4"
                     placeholder="Add a brief description about the assignment..."
                     className="mt-2 w-full p-3 rounded-lg bg-white text-gray-700 shadow-sm border focus:ring-2 focus:ring-[#004643] focus:outline-none"
                     required
                  ></textarea>
               </div>

               {/* Submit Button */}
               <div className="text-center">
                  <button
                     type="submit"
                     className="bg-gradient-to-r from-[#004643] to-[#00897B] text-white px-8 py-3 rounded-full shadow-lg hover:from-[#FAF3DD] hover:to-[#FAE3C4] hover:text-[#004643] transition-transform transform hover:scale-105 duration-300 font-bold"
                  >
                     Create Assignment
                  </button>
               </div>
            </form>

            {/* Toast */}
            <ToastContainer position="top-center" autoClose={3000} />
         </div>
      </div>
   );
};

export default Create;
