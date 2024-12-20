


import { useState } from "react";
import { Fade } from "react-awesome-reveal";


const Faqsection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  

  return (
    <div>
      <div className="container mx-auto space-y-12">
        <h2 className="section-title text-center text-7xl Postsen text-[#135D66]">Frequently Asked Questions</h2>
        <Fade cascade damping={0.5}>

        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className="text-lg font-medium">w do I create an assignment?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen && (
              <div className="mt-4 text-gray-700">
          <p className="faq-answer">To create an assignment, navigate to the "Create Assignment" page and fill in the required details such as title, description, marks, difficulty level, and due date. Then, click on the submit button to create the assignment.</p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <h3 className="text-lg font-medium">How can I submit an assignment?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen2 ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen2 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen2 && (
              <div className="mt-4 text-gray-700">
          <p className="faq-answer">To submit an assignment, click on the "Take assignment" button on the assignment details page. Then, fill in the required information such as PDF/doc link and notes, and click on the submit button to submit the assignment.</p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen3(!isOpen3)}
            >
              <h3 className="text-lg font-medium">How do I track my submitted assignments?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${isOpen3 ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen3 ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {isOpen3 && (
              <div className="mt-4 text-gray-700">
          <p className="faq-answer">You can track your submitted assignments on the "My Submitted Assignments" page. This page displays all assignments that you have submitted along with their status and feedback.</p>
              </div>
            )}
          </div>

        </div>
        </Fade>

      </div>

    </div>
  );
};

export default Faqsection;