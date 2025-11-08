'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/spxvido.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="w-full max-w-md mx-auto relative z-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <Image
                src="/spxblue.png"
                alt="Spider Logo"
                width={96}
                height={96}
                className="mx-auto filter drop-shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">SPIDER.WEB</h1>
            <p className="text-white/70">Advanced Search Portal</p>
          </div>

          {/* Search Section */}
          <div className="mb-6">
            <div className="relative">
              
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              </div>
            </div>
          </div>

          {/* Login Section */}
          <div className="space-y-4 mb-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="space-y-3">
            <Link href="/Accounts">
              <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 shadow-lg">
                Access Accounts
              </button>
            </Link>
            
           
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm">Secure Portal Access</p>
            <div className="flex justify-center space-x-4 mt-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
