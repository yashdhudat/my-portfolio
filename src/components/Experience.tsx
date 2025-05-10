'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '@/data/resume';

export default function Experience() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background/50 dark:bg-slate-900/95 relative">
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
            Work Experience
          </motion.h2>
          <motion.div 
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-primary mx-auto mb-10"
          ></motion.div>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/50 dark:backdrop-blur-sm rounded-2xl shadow-lg dark:shadow-dark-lg dark:border dark:border-blue-500/10 overflow-hidden"
            >
              <div className="p-8 flex md:flex-row gap-6">
                {/* Left Column: Timeline */}
                <div className="md:w-1/2 lg:w-1/2">
                  <div className="bg-gray-50 dark:bg-slate-900/60 rounded-xl p-4 transition-all duration-300">
                    <div className="text-primary dark:text-blue-400 font-bold text-lg md:text-xl mb-2">
                      {exp.position}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {exp.period}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 mb-1">
                      {exp.company}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Right Column: Description */}
                <div className="md:w-2/3 lg:w-3/4">
                  <div className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="p-3 rounded-lg bg-gray-50 dark:bg-slate-900/60"
                      >
                        <p className="text-gray-700 dark:text-gray-300">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 