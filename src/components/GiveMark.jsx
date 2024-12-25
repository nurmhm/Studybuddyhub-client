import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const GiveMark = () => {
   const assignment = useLoaderData();
   const { user } = useContext(AuthContext);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const mark = e.target.marks.value;
      const feedback = e.target.feedback.value;
      const data = {
         mark,
         feedback,
         status: assignment.status
      };

      if (assignment.examineeEmail !== user.email) {
         try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/givemark/${assignment._id}`, data);
            toast.success("Marks and Feedback submitted successfully.");
            e.target.reset();
         } catch (error) {
            console.error(error);
            toast.error("Failed to submit marks and feedback.");
         }
      } else {
         toast.error("You can't give marks to yourself.");
      }
   };

   return (
      <div className="min-h-screen bg-[#FFF9F3] py-8 px-4">
         <div className="max-w-7xl mx-auto flex flex-col space-y-8">
            {/* Page Title */}
            <div className="text-center">
               <h1 className="text-3xl font-bold text-[#004643] mb-4">Review and Provide Marks for the Assignment</h1>
               <p className="text-lg text-gray-700">Please review the assignment document and provide marks and feedback below.</p>
            </div>

            {/* Top: PDF Preview */}
            <div className="bg-white shadow-lg rounded-lg p-6">
               <h1 className="text-xl font-bold text-[#004643] mb-4">PDF Preview</h1>
               <iframe 
                  src={assignment.pdf} 
                  title="PDF Preview" 
                  width="100%" 
                  height="600px" 
                  style={{ border: '1px solid #e2e2e2', borderRadius: '8px' }} 
               />
            </div>

            {/* Bottom: Form Section */}
            <div className="bg-[#FFF2D7] p-6 rounded-lg shadow-lg">
               <h1 className="text-2xl font-bold text-[#004643] text-center mb-6">Give Marks</h1>
               <form onSubmit={handleSubmit}>
                  {/* Marks Input */}
                  <div className="mb-6">
                     <label htmlFor="marks" className="block text-sm font-medium text-[#004643] mb-2">Marks:</label>
                     <input
                        type="number"
                        id="marks"
                        name="marks"
                        className="mt-1 p-3 border rounded-lg w-full bg-white text-gray-700 shadow-sm focus:ring-[#004643] focus:outline-none"
                        required
                        min="0"
                        max="100"
                     />
                  </div>

                  {/* Feedback Input */}
                  <div className="mb-6">
                     <label htmlFor="feedback" className="block text-sm font-medium text-[#004643] mb-2">Feedback:</label>
                     <textarea
                        id="feedback"
                        name="feedback"
                        className="mt-1 p-3 border rounded-lg w-full bg-white text-gray-700 shadow-sm focus:ring-[#004643] focus:outline-none"
                        required
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center mt-6">
                     <button
                        type="submit"
                        className="bg-gradient-to-r from-[#004643] to-[#00897B] text-white px-8 py-3 rounded-full shadow-lg hover:from-[#FAF3DD] hover:to-[#FAE3C4] hover:text-[#004643] transition-transform transform hover:scale-105 duration-300 font-bold"
                     >
                        Submit Feedback & Marks
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* Toast Notification Container */}
         <ToastContainer />
      </div>
   );
};

export default GiveMark;
