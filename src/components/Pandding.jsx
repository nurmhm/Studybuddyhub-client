import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Pandding = () => {
   const [panddingItem, setPanddingItem] = useState([])
   const assignment = useLoaderData();
   useEffect(() => {
      const allpandding = assignment.filter(ass => ass.status === "pandding")
      setPanddingItem(allpandding)
   }, [assignment])

   console.log(panddingItem);


  if (!assignment) {
   return <div><span className="loading loading-ball loading-xs"></span>
   <span className="loading loading-ball loading-sm"></span>
   <span className="loading loading-ball loading-md"></span>
   <span className="loading loading-ball loading-lg"></span></div>;
 }

   // console.log(panddingItem);
   return (
      <div>
         <h1 className="text-center my-12">All Pandding Assignments </h1>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Your photo</th>
                     <th>Assignment title</th>
                     <th>Examinee email</th>
                     <th>Assignment marks</th>
                     <th></th>
                  </tr>
               </thead>

               {/* body */}
               <tbody>
                  {panddingItem.map(submit => (
                     <tr key={submit._id}>

                        <td>
                           <div className="flex items-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    
                                    <img src={submit?.photoURL} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>

                           </div>
                        </td>
                        <td>

                           {submit?.title}
                        </td>
                        <td>{submit?.
                           examineeEmail
                        }</td>
                        <td>
                           <button className="btn btn-ghost btn-xs">{submit.status === 'pandding' ? 'ISPanding please wait' : `${submit.mark}`}</button>
                        </td>
                        <td>
                           <Link to={`/givemark/${submit._id}`}><button className="btn btn-outline btn-success">Give Mark</button></Link>
                           
                        </td>
                     </tr>
                  ))}
               </tbody>

               {/* foot */}

            </table>
         </div>

      </div>
   );
};

export default Pandding;