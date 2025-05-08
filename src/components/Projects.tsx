'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '@/data/resume';
import { FiExternalLink, FiX } from 'react-icons/fi';

export default function Projects() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Helper function to generate color based on project title
  const generateColor = (title: string, isDark = false) => {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return isDark 
      ? `hsl(${hue}, 70%, 20%)`
      : `hsl(${hue}, 70%, 80%)`;
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background/50 dark:bg-transparent relative">
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
            Projects
          </motion.h2>
          <motion.div 
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-primary mx-auto mb-10"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const handleCardClick = () => {
              if (project.link) {
                window.open(project.link, '_blank');
              } else {
                setSelectedProject(index);
              }
            };
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg dark:shadow-dark-lg dark:border dark:border-blue-500/10 overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-glow-md"
                onClick={handleCardClick}
              >
                <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: generateColor(project.title, false) }}
                    >
                      <span className="text-2xl font-bold text-gray-800/70 dark:text-white/80">{project.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 dark:bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-slate-800 w-full max-w-4xl rounded-2xl shadow-2xl dark:shadow-glow-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                {projects[selectedProject].image ? (
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="object-cover w-full h-full rounded-t-2xl"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 flex items-center justify-center rounded-t-2xl"
                    style={{ backgroundColor: generateColor(projects[selectedProject].title, document.documentElement.classList.contains('dark')) }}
                  >
                    <span className="text-3xl font-bold text-gray-800/70 dark:text-white/80">
                      {projects[selectedProject].title}
                    </span>
                  </div>
                )}
                <button 
                  className="absolute top-4 right-4 p-2 bg-black/50 dark:bg-white/10 text-white rounded-full hover:bg-black/70 dark:hover:bg-white/20 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{projects[selectedProject].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{projects[selectedProject].description}</p>
                
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  {projects[selectedProject].link ? (
                    <a
                      href={projects[selectedProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary/90 dark:hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg dark:shadow-glow-sm dark:hover:shadow-glow-md"
                    >
                      <FiExternalLink /> View Project
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-primary/90 dark:hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg dark:shadow-glow-sm dark:hover:shadow-glow-md">
                      <FiExternalLink /> View Project
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 