import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Our Vyaktra agent handles 80% of customer inquiries, freeing up our team to focus on complex issues.",
    name: "Sarah K.",
    role: "E-commerce Director"
  },
  {
    quote: "The research agent has cut our data analysis time by half while improving accuracy significantly.",
    name: "Michael T.",
    role: "Data Science Lead"
  },
  {
    quote: "Our onboarding completion rates improved by 40% after implementing the Vyaktra assistant.",
    name: "Jennifer L.",
    role: "SaaS Product Manager"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-dark to-indigo-dark/80">
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
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Businesses across industries are achieving remarkable results with Vyaktra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-dark/70 border border-neon-cyan/20 rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="text-neon-cyan mb-4">
                <FaQuoteLeft className="text-2xl" />
              </div>
              <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
              <div className="border-t border-neon-cyan/20 pt-4">
                <p className="font-semibold text-neon-cyan">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;