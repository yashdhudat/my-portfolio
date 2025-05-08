"use client";

import { useEffect } from "react";

export default function ClientBootstrap() {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);

  return null;
} 