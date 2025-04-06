'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch('http://localhost:3000/createModel', {
      method: 'GET',
      redirect: "follow"
    });
    const data = await res.json();
    const modelId = data.model;
    router.push(`/${modelId}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
      >
        Get Started!
      </button>
    </div>
  );
}
