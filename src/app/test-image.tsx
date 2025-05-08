'use client';

export default function TestImage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Image Test Page</h1>
      <div className="w-80 h-80 border border-gray-300">
        <img 
          src="/xuefeng-palau.jpg" 
          alt="Test image" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
    </div>
  );
} 