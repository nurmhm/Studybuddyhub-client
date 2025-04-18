import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AssignmentsHighlight = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/assignments`)
      .then(res => {
        setAssignments(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-[#F7FAFC] to-[#FAF3DD] text-[#004643]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 tracking-tight leading-tight">
          Assignments Highlight
        </h2>

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500 font-semibold">
            Failed to load assignments. Please try again.
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center text-lg font-medium">
            Loading assignments...
          </div>
        )}

        {/* Highlighted Assignments Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {assignments?.slice(0, 3).map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <img
                  src={assignment.photourl}
                  alt={assignment.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{assignment.title}</h3>
                  <span className="text-sm bg-[#F7A02E] text-white px-3 py-1 rounded-full uppercase tracking-wide">
                    {assignment.difficulty}
                  </span>
                  <p className="text-gray-700 mt-4 leading-relaxed flex-grow">
                    {assignment.description}
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-600">
                      Due: {assignment.date}
                    </span>
                    <a
                      href={`/view/${assignment._id}`}
                      className="inline-flex items-center text-[#004643] font-semibold border-2 border-[#004643] px-4 py-2 rounded-lg hover:bg-[#004643] hover:text-white transition group"
                    >
                      View Assignment
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AssignmentsHighlight;
