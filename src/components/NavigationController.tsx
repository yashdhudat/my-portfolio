'use client';

import { useState, useEffect, useCallback } from 'react';
import { scrollToElement } from '@/utils/scrollUtils';

// Define all the section IDs in order
const SECTIONS = ['home', 'about', 'experience', 'skills', 'projects', 'contact', 'footer'];

export default function NavigationController() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  // For debugging: log section changes
  useEffect(() => {
    console.log('Current section is now:', currentSection);
  }, [currentSection]);

  // Detect current section when scrolling
  const detectCurrentSection = useCallback(() => {
    // Don't update during programmatic scrolling
    if (isScrolling) return;
    
    // Special case for footer - check if we're at the bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (isAtBottom) {
      if (currentSection !== 'footer') {
        console.log('At bottom, setting section to footer');
        setCurrentSection('footer');
      }
      return;
    }
    
    // Get viewport middle position
    const viewportMiddle = window.scrollY + (window.innerHeight / 2);
    let closestSection = null;
    let closestDistance = Infinity;
    
    // Find the section closest to the viewport middle
    for (const sectionId of SECTIONS) {
      const element = document.getElementById(sectionId);
      if (!element) continue;
      
      const rect = element.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionMiddle = sectionTop + (rect.height / 2);
      const distance = Math.abs(viewportMiddle - sectionMiddle);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = sectionId;
      }
    }
    
    if (closestSection && closestSection !== currentSection) {
      console.log(`Setting current section to: ${closestSection}`);
      setCurrentSection(closestSection);
    }
  }, [currentSection, isScrolling]);

  // Effect to detect current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Throttle the detection to improve performance
      if (!window.requestAnimationFrame) {
        detectCurrentSection();
        return;
      }
      
      window.requestAnimationFrame(detectCurrentSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize on mount
    setTimeout(detectCurrentSection, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [detectCurrentSection]);
  
  // Get the next section based on current section
  const getNextSection = useCallback(() => {
    const currentIndex = SECTIONS.indexOf(currentSection);
    
    // Safeguard against invalid indices
    if (currentIndex === -1) {
      console.warn('Current section not found in SECTIONS array:', currentSection);
      return SECTIONS[0]; // Default to first section
    }
    
    // If at the last section, loop back to the first section
    if (currentIndex === SECTIONS.length - 1) {
      return SECTIONS[0];
    }
    
    // Otherwise go to the next section
    return SECTIONS[currentIndex + 1];
  }, [currentSection]);
  
  // NavigationController now only contains logic but no button UI
  return null;
} 