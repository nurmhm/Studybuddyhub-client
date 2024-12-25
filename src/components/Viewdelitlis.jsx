import { Link, useLoaderData } from "react-router-dom";

const Viewdelitlis = () => {
  const assignment = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={assignment.photourl}
            alt={assignment.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-[#004643]">{assignment.title}</h1>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-700">{assignment.description}</p>

          <div className="mt-6 space-y-4">
            {/* Difficulty */}
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#004643]">Difficulty:</span> {assignment.diffrculty}
            </p>

            {/* Mark */}
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-[#004643]">Mark:</span> {assignment.mark}
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-6 flex justify-center">
            <Link to={`/submit/${assignment._id}`}>
            <button
                     type="submit"
                     className="bg-gradient-to-r from-[#004643] to-[#00897B] text-white px-8 py-3 rounded-full shadow-lg hover:from-[#FAF3DD] hover:to-[#FAE3C4] hover:text-[#004643] transition-transform transform hover:scale-105 duration-300 font-bold"
                  >
                     Take Assignment
                  </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewdelitlis;
