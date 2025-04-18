import React,{ ReactNode} from 'react'
import ThemeSwitcher from '@/components/ThemeSwitcher'; // Adjust the path as needed
import { UserButton } from '@clerk/nextjs';
import Logo from '@/components/Logo';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-background max-h-screen'>
        <nav className='flex justify-between border-b h-[60px] px-4 py-2 items-center'>
            <Logo/>
            <div className='flex items-center gap-4'>
                <ThemeSwitcher/>
                <UserButton/>
            </div>
        </nav>
        <main className='flex w-full flex-grow'>{children}</main>
        <footer className='flex justify-center items-center h-16 bg-gray-800 text-white'>
            Footer
        </footer>
    </div>
  )
}

export default Layout