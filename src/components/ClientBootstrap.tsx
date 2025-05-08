"use client";

import { useEffect } from "react";

// This component isn't needed since you're using Tailwind CSS
// If you actually need Bootstrap components, use a proper CSS import in a CSS file
export default function ClientBootstrap() {
  // Remove the problematic dynamic import
  useEffect(() => {
    // Bootstrap is already added through package.json
    // No need to dynamically import the CSS
  }, []);

  return null;
} 