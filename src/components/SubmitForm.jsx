import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SubmitForm = () => {
  const assignment = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdf = form.pdf.value;
    const note = form.note.value;

    const submit = {
      pdf,
      note,
      assignmentId: assignment._id,
      title: assignment.title,
      mark: 0,
      creater: assignment.email,
      examineeEmail: user.email,
      status: "pending",
    };

    try {
      axios
        .post(`${import.meta.env.VITE_API_URL}/submitted`, submit)
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success("Submitted Successfully!");
            form.reset();
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to submit. Please try again.");
        });
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Submit Your Assignment
      </h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <label
            htmlFor="pdf"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            PDF Link or Docs Link
          </label>
          <input
            type="text"
            id="pdf"
            name="pdf"
            required
            placeholder="Enter the PDF or Docs link"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="note"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Note (Optional)
          </label>
          <textarea
            id="note"
            name="note"
            rows="4"
            placeholder="Add any notes or additional details (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#004643] hover:bg-[#008c6d] text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Submit Assignment
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SubmitForm;
