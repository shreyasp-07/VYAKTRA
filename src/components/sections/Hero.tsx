import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan">
                  Craft Custom AI Agents
                </span>
                <br />
                <span className="text-white">For Your Business, Your Workflow</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Empowering businesses, creators, and teams with next-gen AI agents that transform how you work.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark flex items-center"
                >
                  Launch Your Agent
                  <FaArrowRight className="ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-neon-cyan rounded-full font-orbitron text-neon-cyan"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center animate-pulse-slow">
                    <svg
                      className="w-1/2 h-1/2 text-indigo-dark"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <div className="relative w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-neon-cyan"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translateY(-150px) rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;