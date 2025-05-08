'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education } from '@/data/resume';
import { FiUser, FiMapPin, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

export default function About() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative dark:bg-slate-900/95">
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
            About Me
          </motion.h2>
          <motion.div 
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-primary mx-auto mb-12"
          ></motion.div>
        </motion.div>

        <div className="border-gray-300 dark:border-gray-700/30 rounded-3xl overflow-hidden shadow-lg dark:shadow-dark-lg p-6 bg-white dark:bg-slate-800/50 dark:backdrop-blur-sm" style={{ borderRadius: '1.5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Personal Information */}
            <motion.div
              ref={sectionRef}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-gray-100 dark:border-blue-500/10 shadow-sm dark:shadow-dark-lg overflow-hidden p-4 bg-white dark:bg-slate-900/60"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-lg p-3 bg-gray-50 dark:bg-slate-800/80">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md">
                    <FiUser className="text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Full Name</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{personalInfo.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 rounded-lg p-3 bg-gray-50 dark:bg-slate-800/80">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md">
                    <FiMapPin className="text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Location</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 rounded-lg p-3 bg-gray-50 dark:bg-slate-800/80">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md">
                    <FiMail className="text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 rounded-lg p-3 bg-gray-50 dark:bg-slate-800/80">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md">
                    <FiPhone className="text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:col-span-2 rounded-lg p-3 bg-gray-50 dark:bg-slate-800/80">
                  <div className="mt-1 p-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-md">
                    <FiLinkedin className="text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-0.5">LinkedIn</p>
                    <a 
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 rounded-lg p-3 bg-gray-50 dark:bg-slate-800/80 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-primary dark:bg-blue-400 transform -translate-x-1/2" />
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-100">{edu.school}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-0.5">{edu.degree}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full flex justify-center items-center h-full"
            >
              <div className="relative flex justify-center items-center h-full w-full">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full" style={{ 
                  background: 'linear-gradient(to bottom right, var(--primary), var(--accent))',
                  padding: '8px'
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'white',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
                  }}>
                    <img 
                      src="/xuefeng-palau.jpg" 
                      alt="Xuefeng Sun profile" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 