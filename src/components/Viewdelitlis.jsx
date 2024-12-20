import { Link, useLoaderData } from "react-router-dom";



const Viewdelitlis = () => {
   const assignment = useLoaderData();
   // console.log(assignment);
   return (
      <div className=" max-w-lg mx-auto">
         <div className="max-w-lg mx-auto px-6 py-4">
         <img src={assignment.photourl} alt={assignment.title}  className="w-50 h-50 rounded-md" />

            <h1 className="text-3xl font-bold text-gray-900">{assignment.title}</h1>
            <p className="text-lg text-gray-700">Description: {assignment.description}</p>
            <p className="text-lg text-gray-700">Difficulty: {assignment.diffrculty}</p>
            <p className="text-lg text-gray-700">Mark: {assignment.mark}</p>
            <Link to={`/submit/${assignment._id}`}>            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Take Assignment
            </button></Link>
         </div>
      </div>
   );
};

export default Viewdelitlis;