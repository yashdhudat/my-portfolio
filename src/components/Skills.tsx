'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/resume';

export default function Skills() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
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
            Technical Skills
          </motion.h2>
          <motion.div 
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-primary mx-auto mb-10"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + (groupIndex * 0.1) }}
              className="p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden group dark:shadow-dark-lg bg-white/90 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-blue-500/10"
            >
              {/* Background decorative element */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:opacity-30" 
                style={{ 
                  background: groupIndex % 3 === 0 
                    ? 'linear-gradient(135deg, var(--primary), #4ECDC4)' 
                    : groupIndex % 3 === 1 
                      ? 'linear-gradient(135deg, var(--primary), var(--accent))' 
                      : 'linear-gradient(135deg, var(--primary), #9a67ea)'
                }}
              />
              
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 relative">
                {skillGroup.category}
                <span 
                  className="absolute bottom-0 left-0 w-12 h-1 rounded-full" 
                  style={{ 
                    background: groupIndex % 3 === 0 
                      ? 'linear-gradient(to right, var(--primary), #4ECDC4)'
                      : groupIndex % 3 === 1 
                        ? 'linear-gradient(to right, var(--primary), var(--accent))'
                        : 'linear-gradient(to right, var(--primary), #9a67ea)'
                  }}
                />
              </h3>
              
              <div className="flex flex-wrap gap-3 relative">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3 + (index * 0.05) + (groupIndex * 0.1)
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                              bg-white/80 dark:bg-slate-900/70 border border-gray-200/30 dark:border-blue-500/20
                              hover:shadow-md dark:hover:shadow-glow-sm hover:bg-primary dark:hover:bg-primary-dark
                              hover:text-white dark:text-gray-200 cursor-default"
                    style={{
                      transform: 'translateZ(0)'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 