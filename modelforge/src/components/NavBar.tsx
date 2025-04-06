import Image from 'next/image';
import Link from 'next/link';

export function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
    return (
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Image src='/modelForge.png' alt="ModelForge Logo" width={40} height={40} />
          <h1 className="text-xl font-outline text-white">ModelForge</h1>
        </div>
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link href="/signin" className="hover:underline">Sign In</Link>
              <Link href="/register" className="hover:underline">Register</Link>
            </>
          ) : (
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/avatar.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
              <span className="text-sm">▼</span>
            </div>
          )}
        </div>
      </nav>
    );
  }

