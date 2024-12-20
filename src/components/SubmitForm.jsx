import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const SubmitForm = () => {
   const assignment = useLoaderData();
  //  console.log(assignment)
   const {user} = useContext(AuthContext)

   const handleSubmit = e=>{
      e.preventDefault();
      const form = e.target;
      const pdf= form.pdf.value;
      const note = form.note.value;
      const submit = {
        pdf,
        note,
        assignmentId: assignment._id,
        title: assignment.title,
        mark:0,
        creater:assignment.email,
        examineeEmail: user.email,
        status: 'pandding'
        
      }
      try {
         axios.post(`${import.meta.env.VITE_API_URL}/submitted`,submit)
            .then(res=>{
               if(res.data.acknowledged){
                  toast.success('Submitted Successfully')
                  form.reset()
               }
            
            })
            .catch(err => {
               console.log(err)
            })
         
      } catch (error) {
         console.log(error)
      }
      // console.log("submitted",submit)
   

   }
   return (
      <div className="container mx-auto px-6 py-4">
      <h2 className="text-3xl font-bold text-gray-900">Submit Assignment</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-6">
          <label htmlFor="pdf" className="block mb-2 text-sm font-bold text-gray-900">
            PDF LINk or DOCS LINK
          </label>
          <input
            type="text"
            id="pdf"
            name="pdf"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="note" className="block mb-2 text-sm font-bold text-gray-900">
            NOTE
          </label>
          <input
            type="text"
            id="note"
            name="note"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
       
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
    
   );
};

export default SubmitForm;