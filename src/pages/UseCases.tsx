import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaLaptopCode, FaUserMd, FaHome, FaGraduationCap, FaChartBar } from 'react-icons/fa';

const UseCases = () => {
  useEffect(() => {
    document.title = 'Vyaktra | AI Agent Use Cases';
  }, []);

  const industries = [
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: "E-commerce",
      description: "AI agents that provide 24/7 customer support, personalized recommendations, and automated order tracking.",
      benefits: [
        "Reduce support tickets by 60%",
        "Increase average order value",
        "Improve customer satisfaction"
      ]
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "SaaS",
      description: "Onboarding assistants that guide users through your platform and reduce churn with proactive engagement.",
      benefits: [
        "Improve onboarding completion",
        "Reduce support requests",
        "Increase feature adoption"
      ]
    },
    {
      icon: <FaUserMd className="text-3xl" />,
      title: "Healthcare",
      description: "Virtual assistants that answer patient questions, schedule appointments, and provide medical information.",
      benefits: [
        "Reduce administrative burden",
        "Improve patient access",
        "24/7 availability"
      ]
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: "Real Estate",
      description: "AI representatives that qualify leads, schedule showings, and answer property questions instantly.",
      benefits: [
        "Capture more leads",
        "Provide instant responses",
        "Qualify leads automatically"
      ]
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Education",
      description: "Tutoring assistants that provide personalized learning paths and instant answers to student questions.",
      benefits: [
        "Scale personalized learning",
        "Provide 24/7 support",
        "Adapt to learning styles"
      ]
    },
    {
      icon: <FaChartBar className="text-3xl" />,
      title: "Finance",
      description: "Financial assistants that help with account inquiries, basic transactions, and financial education.",
      benefits: [
        "Reduce call center volume",
        "Provide instant answers",
        "Improve financial literacy"
      ]
    }
  ];

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
                  AI Agents in Action
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how businesses across industries are leveraging Vyaktra AI agents to transform their operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-6 hover:glow-box transition-all duration-300"
                >
                  <div className="text-neon-cyan mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <div className="border-t border-neon-cyan/20 pt-4">
                    <h4 className="text-sm font-semibold text-neon-cyan mb-2">KEY BENEFITS</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-neon-cyan mr-2">✓</span>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-dark/70 to-indigo-dark/90 border border-neon-purple/30 rounded-xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                Ready to See What AI Can Do for Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team will work with you to identify the perfect AI solutions for your specific needs and challenges.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark"
              >
                Get a Custom Proposal
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;