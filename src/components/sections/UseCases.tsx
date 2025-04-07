import { motion } from 'framer-motion';
import { FaShoppingCart, FaLaptopCode, FaUserMd, FaHome } from 'react-icons/fa';

const useCases = [
  {
    icon: <FaShoppingCart className="text-3xl" />,
    title: "E-commerce Support",
    description: "24/7 customer service, personalized recommendations, and automated order tracking."
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "SaaS Onboarding",
    description: "Guide new users through your platform with interactive, context-aware assistance."
  },
  {
    icon: <FaUserMd className="text-3xl" />,
    title: "Healthcare Virtual Guides",
    description: "Answer patient questions, schedule appointments, and provide medical information."
  },
  {
    icon: <FaHome className="text-3xl" />,
    title: "Real Estate AI Reps",
    description: "Qualify leads, schedule showings, and answer property questions instantly."
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-indigo-dark/80">
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
              Use Cases
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how Vyaktra AI agents are transforming industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-indigo-dark/50 to-indigo-dark/90 border border-neon-cyan/20 rounded-xl p-6 hover:glow-box transition-all duration-300 overflow-hidden relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-neon-cyan mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-300">
            Don't see your specific use case?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark"
          >
            Talk to Our AI Specialists
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;