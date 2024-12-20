
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Update = () => {
   const [dueDate, setDueDate] = useState(null);
   const assignment = useLoaderData();
   const { email, _id, date, description, diffrculty, mark, photourl, title } = assignment;
   // console.log(assignment);


   const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const date = dueDate ? dueDate.toLocaleDateString('en-GB') : '';
      const diffrculty = form.diffrculty.value;
      const mark = form.mark.value;
      const photourl = form.photourl.value;
   
      const data = {
         title,
         description,
         date,
         diffrculty,
         mark,
         photourl
      };
   
      try {
         const response = await axios.put(`${import.meta.env.VITE_API_URL}/updateOne/${assignment._id}`, data);
         // Handle success
         console.log(response.data); // Log the response data
         toast.success("Assignment updated successfully");
      } catch (error) {
         // Handle error
         console.error(error);
         toast.error("Error updating assignment");
      }
   };
   


   return (
      <div className="max-w-2xl mx-auto p-4 bg-[#FFF2D7]  shadow-md rounded-md">
         <h2 className="text-lg font-semibold text-center Postsen text-gray-700  mb-8">Update Assignment</h2>
         <form onSubmit={handleSubmit}>
            <div className='flex gap-8'>
               <div>
                  <div className="mb-4">
                     <label htmlFor="title" className="text-sm font-medium text-gray-700">Title:</label>
                     <input
                        id="title"
                        type="text"
                        defaultValue={assignment?.title}
                        name="title"
                        className="mt-1 p-2 border rounded-md w-full bg-white"
                        required
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                     <textarea id="description" defaultValue={assignment?.description} name='description' className="mt-1 p-2 border rounded-md w-full bg-white" required />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="marks" className="block text-sm font-medium text-gray-700">Marks:</label>
                     <input id="marks" defaultValue={assignment?.mark} type="number" name='mark' className="mt-1 p-2 border rounded-md w-full bg-white" required />
                  </div>
               </div>
               <div className='sp space-y-9'>
                  <div className="mb-4">
                     <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-700">Thumbnail Image URL:</label>
                     <input id="thumbnailUrl" defaultValue={assignment?.photourl} type="text" name='photourl' className="mt-1 p-2 border rounded-md w-full bg-white" required />
                  </div>
                  <div className="mb-4">
                     <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty Level:</label>
                     <select id="difficulty" defaultValue={assignment?.date} name='diffrculty' className="mt-1 p-2 border rounded-md w-full bg-white">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                     </select>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date:</label>
                     <DatePicker
                        id="dueDate"
                        dateFormat="dd/MM/yy"
                        defaultValue={assignment?.data} // Set the default value based on the dueDate state
                        onChange={(date) => setDueDate(date)}
                        className="mt-1 p-2 border rounded-md w-full bg-white"
                     />
                  </div>

               </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Assignment</button>
         </form>
         <ToastContainer />
      </div>
   );
};

export default Update;
