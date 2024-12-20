import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Importing icons

const AssignCart = ({ assignment, handleDelete }) => {
  if (!assignment) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="flex space-x-2">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </div>
    );
  }

  const { email, _id, date, diffrculty, mark, photourl, title } = assignment;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
      {/* Image */}
      <img
        src={photourl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-[#004643] mb-2">{title}</h3>
        <p className="text-gray-600 mb-1"><strong>Marks:</strong> {mark}</p>
        <p className="text-gray-600 mb-1"><strong>Difficulty:</strong> {diffrculty}</p>
        <p className="text-gray-600 mb-4"><strong>Due Date:</strong> {date}</p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <Link to={`/view/${_id}`}>
            <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium text-[#004643] border-2 border-[#004643] rounded-md hover:bg-[#004643] hover:text-white transition-all duration-300">
              <FaEye /> <span>View</span>
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="flex items-center space-x-2 px-5 py-2 text-sm font-medium text-[#F7A02E] border-2 border-[#F7A02E] rounded-md hover:bg-[#F7A02E] hover:text-white transition-all duration-300">
              <FaEdit /> <span>Update</span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id, email)}
            className="flex items-center space-x-2 px-5 py-2 text-sm font-medium text-red-500 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <FaTrash /> <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignCart;
