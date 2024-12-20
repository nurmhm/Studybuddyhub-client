import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#F7A02E] text-[#004643]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-8 Postsen"
        >
          Start Your Collaborative Learning Journey Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mb-12"
        >
          Join StudyBuddyHub and enhance your learning experience by working together with your peers.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          href="/register"
          className="inline-flex items-center px-6 py-3 bg-[#004643] text-[#FAF3DD] text-lg font-semibold rounded-lg shadow-md hover:bg-[#003A37] transition duration-300"
        >
          Get Started <FaRegArrowAltCircleRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
