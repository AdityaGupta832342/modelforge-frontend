"use client"
import { useTheme } from 'next-themes'
import React, {useState, useEffect} from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { MoonIcon, SunIcon } from 'lucide-react';
import { CiDesktop } from "react-icons/ci";

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();   
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) {
        return null; // Render nothing on the server
    }
  return (
    <Tabs defaultValue={theme}  className="w-full h-10">
        <TabsList className="border">
            <TabsTrigger value="light" onClick={() => setTheme('light')}>
                <SunIcon className='h-[1.2rem] w-[1.2rem]'/>
            </TabsTrigger>

            <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
               <MoonIcon className='h-[1.2rem] w-[1.2rem] '/>
            </TabsTrigger>
            <TabsTrigger value="system" onClick={() => setTheme('system')}>
                <CiDesktop  size={20} />
            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher