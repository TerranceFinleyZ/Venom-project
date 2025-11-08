'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false)
      // Add your authentication logic here
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-red-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full max-w-md mx-auto relative z-10">
        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="relative mx-auto w-24 h-24 mb-6 group">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-500/30 transition-all duration-300"></div>
              <Image
                src="/spx.png"
                alt="Spider Logo"
                width={96}
                height={96}
                className="relative mx-auto filter drop-shadow-2xl hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">SPIDER ADMIN</h1>
            <p className="text-red-200/80 text-sm font-medium">Secure Administrative Portal</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div> 
              <label className="flex items-center text-red-200 text-sm font-semibold mb-3">
                
                Administrator Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full px-5 py-4 bg-black/30 border border-red-500/30 rounded-xl text-white placeholder-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-black/50 focus:border-red-400 transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="flex items-center text-red-200 text-sm font-semibold mb-3">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z" clipRule="evenodd" />
                </svg>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password"
                  className="w-full px-5 py-4 pr-12 bg-black/30 border border-red-500/30 rounded-xl text-white placeholder-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-black/50 focus:border-red-400 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-300 hover:text-red-100 transition-colors duration-200"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <Link href="/AdminA">
                <button className="w-full py-4 px-6 bg-red-600 hover:bg-black disabled:bg-red-600 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center border border-red-500/30 hover:border-red-800">
                  
                  Access Admin Dashboard
                </button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-red-500/20">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-semibold">SECURE CONNECTION</span>
            </div>
            <div className="text-center mt-3">
              <span className="text-red-200/60 text-xs">Spider Security Protocol v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
