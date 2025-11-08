'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHome, FaUser, FaChartBar, FaCog, FaLock, FaBell, FaEnvelope, FaSearch, FaHeart, FaSignOutAlt, FaRedo, FaQuestionCircle } from 'react-icons/fa'

export default function AccountsPage() {
  const [aiInput, setAiInput] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [ssnId, setSsnId] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const stats = [
    { title: 'Alerts', value: '---', change: '+0%', color: 'text-gray-600' },
    { title: 'History', value: '---', change: '+0%', color: 'text-gray-600' },
    { title: 'Reports', value: '---', change: '+0%', color: 'text-gray-600' },
  ]

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <Link href="/search">
              <Image
                src="/spx.png"
                alt="Spider Logo"
                width={32}
                height={32}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">SPIDER.WEB</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-600 text-sm">
              Staff ID: <span className="font-medium text-gray-800">Vhkuuds</span>
            </div>

            <div className="flex items-center justify-end px-4 py-2">
          <div className="flex items-center space-x-6">
            <Link href="/accountsA">
              <FaRedo className="text-gray-800 text-4xl hover:text-blue-600 cursor-pointer transition-colors duration-300" />
            </Link>
            <FaQuestionCircle className="text-gray-500 text-4xl hover:text-green-600 cursor-pointer transition-colors duration-300" />
            <Link href="/accounts">
              <FaSignOutAlt className="text-gray-500 text-4xl hover:text-red-600 cursor-pointer transition-colors duration-300" />
            </Link>
          </div>
        </div>
          </div>
        </div>
      </header>

     

      

      <div className="flex" style={{height: 'calc(100vh - 60px)'}}>
        {/* Sidebar */}
        <aside className="w-96 bg-white/60 backdrop-blur-sm border-r border-gray-200 flex flex-col h-full">
          <div className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 p-4 shadow-sm">
            <div className="flex items-center justify-center space-x-2 -ml-4">
              <Image
                src="/spx.png"
                alt="Spider Logo"
                width={64}
                height={64}
                className="transition-opacity"
              />
              <h2 className="text-lg font-bold text-gray-800">Venom Assist</h2>
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-black to-red-700 p-6">
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Ask Me Anything</h3>
              <div className="flex-1"></div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-3 bg-black/40 border border-red-500/60 rounded-lg text-white placeholder-red-300/80 focus:outline-none focus:border-red-400 focus:bg-black/60 transition-all duration-300"
              />
            </div>
          </div>
        </aside>

        {/* Vertical Icon Box */}
        <div className="w-20 bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 shadow-sm flex flex-col items-center space-y-6 py-8 mx-2">
          <FaHome className="text-gray-600 text-4xl hover:text-blue-600 cursor-pointer transition-colors duration-300" />
          <FaUser className="text-gray-200 text-4xl hover:text-green-600 cursor-pointer transition-colors duration-300" />
          <FaChartBar className="text-gray-200 text-4xl hover:text-purple-600 cursor-pointer transition-colors duration-300" />
          <FaCog className="text-gray-200 text-4xl hover:text-orange-600 cursor-pointer transition-colors duration-300" />
          <FaLock className="text-gray-600 text-4xl hover:text-red-600 cursor-pointer transition-colors duration-300" />
          <FaBell className="text-gray-600 text-4xl hover:text-yellow-600 cursor-pointer transition-colors duration-300" />
          <FaEnvelope className="text-gray-600 text-4xl hover:text-pink-600 cursor-pointer transition-colors duration-300" />
          <FaSearch className="text-gray-200 text-4xl hover:text-indigo-600 cursor-pointer transition-colors duration-300" />
          <FaHeart className="text-gray-600 text-4xl hover:text-rose-600 cursor-pointer transition-colors duration-300" />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto h-full">
          <div className="space-y-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 p-10 hover:bg-white/90 transition-all duration-300 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-lg font-medium">{stat.title}</p>
                      <p className="text-5xl font-bold text-gray-800 mt-3">{stat.value}</p>
                    </div>
                    <div className={`text-xl font-medium ${stat.color}`}>
                      {stat.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Login Form */}
            <div className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">SSN/ID</label>
                    <input
                      type="text"
                      value={ssnId}
                      onChange={(e) => setSsnId(e.target.value)}
                      placeholder="Enter SSN or ID"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="Enter Account Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Link href="/AccountsA">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 font-medium">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
