'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0C081D] text-white">
      <div className="p-6 bg-[#1A1533] rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <button
          onClick={() => signIn('google')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
