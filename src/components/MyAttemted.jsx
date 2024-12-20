import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const MyAttempted = () => {
   const { user } = useContext(AuthContext);
   const [mysubmit, setMysubmit] = useState([]);
   

   useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/submitted`)
         .then(res => {
            const result = res.data;

            // console.log(result);
            
            // console.log(user.email)
            const myattempted = result.filter(data => data.examineeEmail === user.email);
            setMysubmit(myattempted);
         })
         .catch(err => {
            console.log(err);
         });
   }, [user]);

   return (
      <div>
         <h1 className="text-center my-12">My Attempted Assignments</h1>
         <div className="overflow-x-auto">
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  
                  <th>Your photo</th>
                  <th>Assignment title</th>
                  <th>Assignment status</th>
                  <th>Assignment marks</th>
                  <th></th>
               </tr>
            </thead>

            {/* body */}
            <tbody>
               {mysubmit.map(submit => (
                  <tr key={submit._id}>
                     
                     <td>
                        <div className="flex items-center gap-3">
                           <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                 <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                              </div>
                           </div>
                           
                        </div>
                     </td>
                     <td>
                        
                       {submit?.title}
                     </td>
                     <td>{submit?.status}</td>
                     <td>
                        <button className="btn btn-ghost btn-xs">{submit.status==='pandding'?'ISPanding please wait':`${submit.mark}`}</button>
                     </td>
                  </tr>
               ))}
            </tbody>

           
         </table>
      </div>
        
      </div>
   );
};

export default MyAttempted;

