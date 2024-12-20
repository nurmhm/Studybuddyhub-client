import { FaUserPlus, FaTasks, FaFileUpload, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus size={40} />,
    title: "Create Account",
    description: "Sign up to get access to all features and start collaborating with your peers.",
  },
  {
    id: 2,
    icon: <FaTasks size={40} />,
    title: "Create or Browse Assignments",
    description: "Create new assignments or browse existing ones shared by others.",
  },
  {
    id: 3,
    icon: <FaFileUpload size={40} />,
    title: "Submit Your Work",
    description: "Submit assignments as PDF/doc links and share notes with ease.",
  },
  {
    id: 4,
    icon: <FaChartLine size={40} />,
    title: "Track Progress",
    description: "Track your submissions, view grades, and improve your performance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-[#004643] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 Postsen text-[#FAF3DD]">
          How It Works
        </h2>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-[#FAF3DD] rounded-lg shadow-lg text-[#004643]"
            >
              <div className="bg-[#004643] text-white p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[#004643] opacity-80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
