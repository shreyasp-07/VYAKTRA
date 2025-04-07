import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Vyaktra | Contact Us';
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!form.current) return;

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setSubmitStatus('success');
      if (form.current) form.current.reset();
    }, (error) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                    Let's Build Your AI
                  </span>
                </h1>
                <p className="text-xl text-gray-300">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-8 glow-box"
              >
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-neon-cyan text-5xl mb-6">✓</div>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for contacting us. Our team will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          required
                          className="w-full px-4 py-3 bg-indigo-dark/50 border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          required
                          className="w-full px-4 py-3 bg-indigo-dark/50 border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="agent-type" className="block text-sm font-medium text-gray-300 mb-1">
                        What kind of agent are you interested in?
                      </label>
                      <select
                        id="agent-type"
                        name="agent_type"
                        className="w-full px-4 py-3 bg-indigo-dark/50 border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                      >
                        <option value="">Select an option</option>
                        <option value="Support Agent">Support Agent</option>
                        <option value="Sales & Marketing">Sales & Marketing</option>
                        <option value="Research & Data">Research & Data</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                        <option value="Custom Solution">Custom Solution</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-indigo-dark/50 border border-neon-cyan/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent text-white"
                        placeholder="Describe what you'd like your AI agent to do..."
                      ></textarea>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-neon-cyan bg-indigo-dark/50 border-neon-cyan/20 rounded focus:ring-neon-cyan"
                          required
                        />
                        <span className="ml-2 text-sm text-gray-300">
                          I agree to the privacy policy and terms of service
                        </span>
                      </label>
                    </div>
                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-orbitron text-indigo-dark text-lg flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </motion.button>
                    </div>
                    {submitStatus === 'error' && (
                      <div className="text-red-400 text-sm mt-2">
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">Prefer to schedule a call?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free 30-minute consultation with our AI specialists.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-neon-cyan rounded-full font-orbitron text-neon-cyan"
                >
                  Book a Consultation
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;