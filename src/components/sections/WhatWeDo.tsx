import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCogs, FaPlug } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="text-3xl" />,
    title: "AI Support Agents",
    description: "Respond to customers 24/7 with tone-tuned responses that match your brand voice."
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Sales & Marketing Bots",
    description: "Engage leads, qualify prospects, and boost conversions with intelligent automation."
  },
  {
    icon: <FaCogs className="text-3xl" />,
    title: "Research & Data Agents",
    description: "Summarize, extract, and generate insights from your data in seconds."
  },
  {
    icon: <FaPlug className="text-3xl" />,
    title: "API & Tool Integration",
    description: "Connect your AI agents with existing tools and workflows seamlessly."
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-indigo-dark/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vyaktra builds AI agents tailored to your specific business needs and workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-6 hover:glow-box transition-all duration-300"
            >
              <div className="text-neon-cyan mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;