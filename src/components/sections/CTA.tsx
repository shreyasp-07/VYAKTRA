import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-indigo-dark/90 border border-neon-cyan/30 rounded-2xl p-8 md:p-12 text-center glow-box"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Have a Vision? We'll Build Your AI.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need a simple chatbot or a complex AI workforce, our team will bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark"
            >
              Let's Talk
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="px-8 py-4 border border-neon-cyan rounded-full font-orbitron text-neon-cyan"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;