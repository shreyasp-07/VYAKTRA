import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    document.title = 'Vyaktra | About Us';
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                  The Vyaktra Vision
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where cutting-edge AI meets deep customization to create intelligent agents that truly understand your needs.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-8 md:p-12 glow-box"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neon-cyan">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  At Vyaktra, we believe that AI should adapt to your business, not the other way around. Our mission is to democratize access to powerful, custom AI solutions that are typically only available to large enterprises with massive budgets.
                </p>
                <p className="text-gray-300">
                  We combine the latest advancements in artificial intelligence with a deep understanding of business workflows to create agents that are not just intelligent, but also intuitive and aligned with your specific goals.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-6 text-center"
              >
                <div className="text-neon-cyan mb-4">
                  <FaBrain className="text-4xl mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-First Thinking</h3>
                <p className="text-gray-300">
                  We don't just apply AI as an afterthought. Every solution is designed from the ground up to leverage the unique capabilities of modern AI.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-6 text-center"
              >
                <div className="text-neon-purple mb-4">
                  <FaCode className="text-4xl mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bespoke Development</h3>
                <p className="text-gray-300">
                  No cookie-cutter solutions. Each agent is custom-built to your specifications, with ongoing optimization based on real-world performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-6 text-center"
              >
                <div className="text-neon-cyan mb-4">
                  <FaShieldAlt className="text-4xl mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ethical Foundation</h3>
                <p className="text-gray-300">
                  We prioritize transparency, privacy, and ethical AI practices in all our solutions, ensuring they're as responsible as they are powerful.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-indigo-dark/70 border border-neon-purple/20 rounded-xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neon-purple">The Future of Work</h2>
              <p className="text-gray-300 mb-6">
                We envision a world where AI agents work alongside humans as collaborative partners, handling routine tasks while humans focus on creativity, strategy, and complex decision-making.
              </p>
              <p className="text-gray-300">
                Vyaktra is at the forefront of this transformation, building the next generation of AI assistants that understand context, learn from interactions, and continuously improve to better serve your needs.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;