import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

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
            alert("Marks and Feedback added successfully");
            e.target.reset();
         } catch (error) {
            console.error(error);
         }
      } else {
         alert("You can't give marks to yourself");
      }
   };

   return (
      <div>
         <div className="flex justify-center mb-4">
            <iframe 
               src={assignment.pdf} 
               title="PDF Preview" 
               width="600px" 
               height="200px" 
               style={{ border: '1px solid #ccc' }} 
            />

           
         </div>

         <div className="text-center">
               <h1 className="text-2xl font-bold text-green-700 mb-4">Examiee Note: {assignment.note}</h1>
            </div>
         <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Give Marks</h1>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label htmlFor="marks" className="block text-sm font-medium text-gray-700">Marks:</label>
                  <input
                     type="number"
                     id="marks"
                     name="marks"
                     className="mt-1 p-2 border rounded-md w-full bg-white"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback:</label>
                  <textarea
                     id="feedback"
                     name="feedback"
                     className="mt-1 p-2 border rounded-md w-full bg-white"
                     required
                  />
               </div>
               <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </form>
         </div>
      </div>
   );
};

export default GiveMark;
