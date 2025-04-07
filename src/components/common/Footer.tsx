import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaGithub />, url: '#' },
  ];

  return (
    <footer className="bg-indigo-dark/90 border-t border-neon-cyan/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-4">
              VYAKTRA
            </h3>
            <p className="text-gray-300">
              Empowering businesses with next-gen AI agents.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Use Cases', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-neon-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Services</h4>
            <ul className="space-y-2">
              {['AI Support Agents', 'Sales & Marketing', 'Research & Data', 'Workflow Automation', 'Custom Builds'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-neon-cyan transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, color: '#00FFFF' }}
                  className="text-gray-300 text-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-gray-300">
              contact@vyaktra.ai
            </p>
          </div>
        </div>

        <div className="border-t border-neon-cyan/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vyaktra Intelligence. All rights reserved.
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple font-orbitron mt-4 md:mt-0">
            Powered by Vyaktra Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;