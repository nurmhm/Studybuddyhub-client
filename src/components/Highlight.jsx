import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const assignments = [
  {
    id: 1,
    title: "Math Assignment",
    description: "A detailed math assignment covering algebra, geometry, and calculus.",
    dueDate: "20th Dec, 2024",
    difficulty: "Hard",
    image: "/path/to/math-image.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "History Project",
    description: "A comprehensive history project covering World War II and its impact.",
    dueDate: "25th Dec, 2024",
    difficulty: "Medium",
    image: "/path/to/history-image.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Science Lab Report",
    description: "Submit your lab report with detailed observations and conclusions.",
    dueDate: "15th Dec, 2024",
    difficulty: "Easy",
    image: "/path/to/science-image.jpg",
    link: "#",
  },
];

const AssignmentsHighlight = () => {
  return (
    <section className="py-16 text-[#004643]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 Postsen ">Assignments Highlight</h2>

        {/* Highlighted Assignments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-[#FAF3DD] p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={assignment.image}
                alt={assignment.title}
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#004643] mb-2">{assignment.title}</h3>
              <span className="text-sm text-[#F7A02E]  mb-4 block">{assignment.difficulty}</span>
              <p className="text-[#004643] leading-relaxed mb-4">{assignment.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#004643]">Due Date: {assignment.dueDate}</span>
                <a
                  href={assignment.link}
                  className="inline-block  text-[#004643] px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-[#004643] hover:text-[#FAF3DD] border-2 border-[#004643] group"
                >
                  View Assignment <FaArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssignmentsHighlight;
