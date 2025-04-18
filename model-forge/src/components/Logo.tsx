import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
        <Image src="/cropped-removebg-preview.png" alt="Logo" width={40} height={40} className="grayscale mix-blend-difference" />
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Model Forge</span>
    </Link>
  )
}
