'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/resume';
import { scrollToElement } from '@/utils/scrollUtils';

export default function Footer() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScrollToTop = () => {
    scrollToElement('home');
  };

  return (
    <section id="footer" className="min-h-[50vh] py-10 lg:py-16 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Scroll To Top Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">{personalInfo.name}</h3>
          <p className="text-foreground/70 mb-6">{personalInfo.title}</p>
          
          <div className="flex gap-4 mb-8">
            {/* Social Media Icons */}
            <a href={`${personalInfo.linkedin}`} className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href={`${personalInfo.github}`} className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          
          <motion.p 
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-foreground/60 text-sm"
          >
            © {new Date().getFullYear()} - All rights reserved
          </motion.p>
        </div>
      </div>
    </section>
  );
} 