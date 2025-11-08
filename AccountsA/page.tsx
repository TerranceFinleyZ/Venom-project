'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHome, FaUser, FaChartBar, FaCog, FaLock, FaBell, FaEnvelope, FaSearch, FaHeart, FaSignOutAlt, FaRedo, FaQuestionCircle } from 'react-icons/fa'

export default function AccountsAPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [showPhonePopup, setShowPhonePopup] = useState(false)
  const [showCodesPopup, setShowCodesPopup] = useState(false)
  const [selectedPhone, setSelectedPhone] = useState('')
  const [codesText, setCodesText] = useState('')

  const stats = [
    { title: 'Alerts', value: '---', change: '8', color: 'text-gray-500' },
    { title: 'History', value: '---', change: '0', color: 'text-gray-500' },
    { title: 'Optimization', value: '---', change: '12', color: 'text-gray-500' }

  ]

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <Link href="/">
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
            <Link href="/AccountsA">
              <FaRedo className="text-gray-800 text-4xl hover:text-blue-600 cursor-pointer transition-colors duration-300" />
            </Link>
            <FaQuestionCircle className="text-gray-500 text-4xl hover:text-green-600 cursor-pointer transition-colors duration-300" />
            <Link href="/Accounts">
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
            {/* User Info Box */}
            <div className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <div>
                    <span className="text-gray-600 text-sm font-medium">Name: </span>
                    <span className="text-gray-800 font-semibold">John Doe</span>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm font-medium">Date: </span>
                    <span className="text-gray-800 font-semibold">01/05/1995</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - 3 columns like Accounts page */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.slice(0, 3).map((stat, index) => (
                <div 
                  key={index} 
                  onClick={() => {
                    if (index === 1) setShowPopup(true);
                    if (index === 2) setShowPhonePopup(true);
                  }}
                  className="bg-white/80 backdrop-blur-md rounded-lg border border-gray-200 p-10 hover:bg-white/90 transition-all duration-300 shadow-sm cursor-pointer"
                >
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

            {/* Large Box with 6 smaller boxes */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <FaHome className="text-gray-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">Office</h3>
                    
                  </div>
                </div>

                <div 
                  onClick={() => setShowCodesPopup(true)}
                  className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <FaLock className="text-gray-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">Codes</h3>
                    <p className="text-sm text-gray-500 font-medium">Access Codes</p>
                  </div>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <FaEnvelope className="text-gray-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">Call</h3>
                    
                  </div>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <FaChartBar className="text-gray-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">Reports</h3>
                    <p className="text-sm text-gray-500 font-medium">Data Reports</p>
                  </div>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <FaBell className="text-gray-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">Alerts</h3>
                    <p className="text-sm text-gray-500 font-medium">System Alerts</p>
                  </div>
                </div>

                <div className="group bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                      <FaCog className="text-gray-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-wide">Settings</h3>
                    <p className="text-sm text-gray-500 font-medium">Configuration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 m-4 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">System Details</h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Current system session information:</p>
              <div className="bg-gray-50 rounded-lg p-4 border">
                <p className="text-sm text-gray-700">
                  <strong>Total Sessions:</strong> 156<br/>
                  <strong>Active Now:</strong> 89<br/>
                  <strong>Peak Today:</strong> 203<br/>
                  <strong>Average Duration:</strong> 24 minutes
                </p>
              </div>
            </div>
            <div className="text-center">
              <button 
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phone Verification Popup */}
      {showPhonePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 m-4 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Phone Verification</h2>
              <button
                onClick={() => setShowPhonePopup(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Please verify your phone number:</p>
              <div className="space-y-4">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Enter verification code"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="text-center space-x-3">
              <button 
                onClick={() => setShowPhonePopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowPhonePopup(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Codes Popup */}
      {showCodesPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 m-4 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Access Codes</h2>
              <button
                onClick={() => setShowCodesPopup(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Select a phone number:</p>
              
              {/* Phone Numbers with Radio Buttons */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedPhone('555-0123')}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedPhone === '555-0123' 
                        ? 'border-gray-600 bg-gray-600' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {selectedPhone === '555-0123' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                  <span className="text-gray-700 font-medium">(555) 012-3456</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedPhone('555-0789')}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                      selectedPhone === '555-0789' 
                        ? 'border-gray-400 bg-gray-400' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    disabled
                  >
                    {selectedPhone === '555-0789' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                  <span className="text-gray-400 font-medium line-through">(555) 078-9012</span>
                </div>
              </div>

              {/* Text Input */}
              <div className="mb-6">
                <input
                  type="text"
                  value={codesText}
                  onChange={(e) => setCodesText(e.target.value)}
                  placeholder="Enter Codes..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Pass/Failed Buttons */}
            <div className="text-center space-x-3">
              <Link href="/AccountsB">
                <button 
                  className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  Pass
                </button>
              </Link>
              <button 
                onClick={() => setShowCodesPopup(false)}
                className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Failed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
