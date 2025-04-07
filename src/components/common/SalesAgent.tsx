import { useState } from 'react'; // Add this import
import { motion } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';

const SalesAgent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-indigo-dark border border-neon-cyan rounded-xl w-80 h-96 p-4 shadow-lg glow-box"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaRobot className="text-neon-cyan text-2xl mr-2" />
              <h3 className="font-orbitron text-neon-cyan">Sales Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-neon-cyan"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="h-64 mb-4 p-3 bg-indigo-dark/50 rounded-lg overflow-y-auto">
            <div className="text-right mb-2">
              <div className="inline-block bg-neon-cyan/20 text-neon-cyan rounded-lg px-3 py-2">
                Hi there! How can I help you today?
              </div>
            </div>
            <div className="text-left mb-2">
              <div className="inline-block bg-indigo-light/20 text-gray-300 rounded-lg px-3 py-2">
                I'm interested in your AI services
              </div>
            </div>
          </div>
          
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-indigo-dark/50 border border-neon-cyan/30 rounded-l-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan"
            />
            <button className="bg-neon-cyan text-indigo-dark px-4 py-2 rounded-r-lg font-medium hover:bg-neon-cyan/80 transition">
              Send
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-neon-cyan text-indigo-dark p-4 rounded-full shadow-lg glow-box"
        >
          <FaRobot className="text-2xl" />
        </motion.button>
      )}
    </div>
  );
};

export default SalesAgent;