'use client';
import Image from 'next/image';

export default function TestImage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Image Test Page</h1>
      <div className="w-80 h-80 border border-gray-300 relative">
        <Image 
          src="/yash.jpeg" 
          alt="Test image" 
          fill
          style={{ objectFit: 'contain' }}
          sizes="320px"
        />
      </div>
    </div>
  );
} 