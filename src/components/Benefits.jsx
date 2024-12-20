import React from 'react';
import { FaUsers, FaLaptopCode, FaClock, FaComments, FaShieldAlt, FaRegSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: FaUsers,
    title: "Collaborative Learning",
    description: "Engage with peers to enhance your learning experience and tackle assignments together.",
  },
  {
    icon: FaLaptopCode,
    title: "User-Friendly Interface",
    description: "Navigate effortlessly through a clean and intuitive platform designed for ease of use.",
  },
  {
    icon: FaClock,
    title: "Efficient Time Management",
    description: "Keep track of deadlines and manage your assignments effectively.",
  },
  {
    icon: FaComments,
    title: "Instant Feedback",
    description: "Receive real-time feedback on your submissions, helping you improve continuously.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure and Private",
    description: "Your data is secure with us, ensuring a safe and private learning environment.",
  },
  {
    icon: FaRegSmile,
    title: "Motivating and Fun",
    description: "Enjoy a motivating and enjoyable platform that makes learning fun and engaging.",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-[#004643] text-[#FAF3DD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 Postsen">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-[#004643] text-center"
            >
              <benefit.icon className="text-[#F7A02E] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
