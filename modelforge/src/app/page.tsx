'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleClick = async () => {
    const res = await fetch('http://localhost:3000/createModel', {
      method: 'GET',
      redirect: 'follow',
    });
    const data = await res.json();
    const modelId = data.model;
    router.push(`/ModelBuilder/${modelId}`);
  };

  return (
    <div className="min-h-screen bg-[#0C081D] text-white font-roboto">

      {/* Landing Content */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20 gap-6">
        <h2 className="text-4xl md:text-6xl font-outline text-white">Build Deep Learning Models Visually</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          ModelForge lets you drag-and-drop layers to create, configure, and train neural networks — no code required.
        </p>
        <button
          onClick={handleClick}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Get Started!
        </button>

        {/* Placeholder for GIF/animation */}
        <div className="mt-12">
          <Image src="/window.svg" alt="UI Animation" width={600} height={400} />
        </div>
      </main>
    </div>
  );
}
