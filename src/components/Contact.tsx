'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactInfo } from '@/data/resume';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="mb-16"
        >
          <motion.h2 
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-2"
          >
            Contact Me
          </motion.h2>
          <motion.div 
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-primary mx-auto mb-10"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl dark:bg-slate-800/50 dark:backdrop-blur-sm dark:border dark:border-blue-500/10 dark:shadow-dark-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Get In Touch</h3>
            <p className="text-foreground/70 dark:text-gray-300 mb-8">
              Feel free to contact me for any project or collaboration. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md mt-1">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-100">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-foreground/70 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md mt-1">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-100">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-foreground/70 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md mt-1">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-100">Location</h4>
                  <p className="text-foreground/70 dark:text-gray-300">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md mt-1">
                  <FiLinkedin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-gray-100">LinkedIn</h4>
                  <a 
                    href={`https://${contactInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card dark:bg-slate-800/50 p-6 md:p-8 rounded-xl shadow-sm dark:shadow-dark-lg border border-border dark:border-blue-500/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-gray-700 bg-background dark:bg-slate-900/70 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/10 dark:focus:ring-blue-900/30 outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-gray-700 bg-background dark:bg-slate-900/70 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/10 dark:focus:ring-blue-900/30 outline-none transition-all"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border dark:border-gray-700 bg-background dark:bg-slate-900/70 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/10 dark:focus:ring-blue-900/30 outline-none transition-all resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                  Your message has been sent successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg flex items-center justify-center gap-2 shadow-md dark:shadow-glow-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 dark:hover:bg-blue-500 hover:shadow-lg dark:hover:shadow-glow-md'
                } transition-all`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white/20 border-t-white rounded-full"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 