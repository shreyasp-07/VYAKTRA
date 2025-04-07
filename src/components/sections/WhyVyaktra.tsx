import { motion } from 'framer-motion';
import { FaRocket, FaShapes, FaExpand, FaBullseye } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaRocket className="text-3xl" />,
    title: "Fast Delivery",
    description: "Get your custom AI agent deployed in days, not months."
  },
  {
    icon: <FaShapes className="text-3xl" />,
    title: "Fully Custom Agents",
    description: "Tailored to your exact requirements, not one-size-fits-all."
  },
  {
    icon: <FaExpand className="text-3xl" />,
    title: "Scalable AI",
    description: "Grow from a single agent to an entire AI workforce."
  },
  {
    icon: <FaBullseye className="text-3xl" />,
    title: "Goal-Oriented",
    description: "Built with your specific business objectives in mind."
  }
];

const WhyVyaktra = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-dark/50 to-indigo-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
              Why Vyaktra
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We combine cutting-edge AI with deep customization to deliver solutions that actually work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-dark/70 border border-neon-purple/20 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-cyan"></div>
              <div className="text-neon-purple mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">The Vyaktra Difference</h3>
              <p className="text-gray-300">
                Unlike generic AI solutions, our agents are built from the ground up to understand your business, your customers, and your unique challenges. We combine the latest in AI research with domain-specific training to create agents that truly add value.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-2 border-neon-cyan animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                <div className="absolute inset-4 rounded-full border-2 border-neon-purple animate-spin-slow-reverse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-8 rounded-full border-2 border-neon-cyan animate-spin-slow" style={{ animationDuration: '12s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-orbitron text-neon-cyan">AI+</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVyaktra;