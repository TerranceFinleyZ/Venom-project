import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-20 py-4 bg-transparent">
      {/* Left side - SPX Logo */}
      <div className="flex items-center ml-12">
        <Link href="/Admin" className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <Image
            src="/spx.png"
            alt="SPX Logo"
            width={50}
            height={50}
            priority
            className="object-contain"
          />
        </Link>
      </div>
      
      {/* Right side - Navigation Items */}
      <div className="flex items-center space-x-10 mr-12">
        {/* WEB in red-100 */}
        <span className="text-red-200 font-semibold text-lg cursor-pointer hover:text-red-200 transition-colors duration-200">
          WEB
        </span>
        
        {/* Navigation Items in red-800, hover red-200 */}
        <span className="text-red-600 font-semibold text-lg cursor-pointer hover:text-red-200 transition-colors duration-200">
          DASH
        </span>
        <span className="text-red-600 font-semibold text-lg cursor-pointer hover:text-red-200 transition-colors duration-200">
          DIG
        </span>
        <span className="text-red-600 font-semibold text-lg cursor-pointer hover:text-red-200 transition-colors duration-200">
          ULT
        </span>
      </div>
    </nav>
  )
}

export default Navbar