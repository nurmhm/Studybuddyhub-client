import React from 'react';
import { FaUserCheck, FaFileAlt, FaList, FaClipboardCheck, FaFileUpload, FaClock, FaCheckSquare, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FaUserCheck,
    title: 'User Authentication',
    description: 'Register and login securely to access all features.',
  },
  {
    icon: FaFileAlt,
    title: 'Create Assignment',
    description: 'Create assignments specifying title, description, marks, and due date.',
  },
  {
    icon: FaList,
    title: 'View Assignments',
    description: 'Browse all assignments with filter functionality.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Assignment Management',
    description: 'Delete, update, and view assignment details.',
  },
  {
    icon: FaFileUpload,
    title: 'Assignment Submission',
    description: 'Submit assignments with PDF/doc links and quick notes.',
  },
  {
    icon: FaClock,
    title: 'My Submitted Assignments',
    description: 'View all assignments submitted by the user.',
  },
  {
    icon: FaCheckSquare,
    title: 'Pending Assignments',
    description: 'Grade and provide feedback on pending assignments.',
  },
  {
    icon: FaComments,
    title: 'Real-time Feedback',
    description: 'Get immediate feedback on submissions.',
  },
];

const KeyFeatures = () => {
  return (
<section className="py-16 text-[#004643] ">
  <div className="container mx-auto px-4">
    {/* Title */}
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 Postsen ">Key Features</h2>
    {/* Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Icon */}
          <div className="bg-[#004643] text-white p-4 rounded-full mr-4">
            <feature.icon className="text-3xl" />
          </div>
          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FAF3DD] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-[#004643] leading-relaxed">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default KeyFeatures;
