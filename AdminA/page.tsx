'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminAPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { title: 'Total Users', value: '2,847', change: '+18%', color: 'text-green-400' },
    { title: 'Active Sessions', value: '156', change: '+7%', color: 'text-blue-400' },
    { title: 'System Load', value: '42%', change: '-12%', color: 'text-green-400' },
    { title: 'Revenue', value: '$24,567', change: '+31%', color: 'text-green-400' },
  ]

  const recentActivity = [
    { action: 'John Doe logged in', time: '2 min ago', status: 'success' },
    { action: 'Emma Smith logged in', time: '8 min ago', status: 'info' },
    { action: 'N/A', time: '45 min ago', status: 'success' },
    { action: 'N/A', time: '1 hour ago', status: 'warning' },
    { action: 'N/A', time: '2 hours ago', status: 'success' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-700">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/spx.png"
                alt="Spider Logo"
                width={40}
                height={40}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white/80 text-sm">
              Welcome, <span className="font-medium text-white">Admin A</span>
            </div>
            <Link href="/">
              <button className="px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-600/30 transition-all duration-300">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black/30 backdrop-blur-sm border-r border-gray-700 min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: '??' },
              { id: 'users', label: 'User Control', icon: '??' },
              { id: 'analytics', label: 'Analytics', icon: '??' },
              { id: 'reports', label: 'Reports', icon: '??' },
              { id: 'settings', label: 'Settings', icon: '??' },
              { id: 'security', label: 'Security', icon: '??' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-purple-600/20 border border-purple-500/30 text-purple-400'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/70 text-sm font-medium">{stat.title}</p>
                        <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                      </div>
                      <div className={`text-sm font-medium ${stat.color}`}>
                        {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recent Administrative Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0 hover:bg-white/5 rounded px-3 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-400' :
                          activity.status === 'warning' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}></div>
                        <span className="text-white/80">{activity.action}</span>
                      </div>
                      <span className="text-white/50 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">System Status</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Database</span>
                      <span className="text-green-400 font-medium">Online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">API Services</span>
                      <span className="text-green-400 font-medium">Healthy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Cache</span>
                      <span className="text-yellow-400 font-medium">Warning</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Backup</span>
                      <span className="text-green-400 font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 gap-3">
                    <button className="flex items-center space-x-3 p-3 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-600/30 transition-all duration-300">
                      <span className="text-lg">???</span>
                      <span className="font-medium">System Maintenance</span>
                    </button>
                    <button className="flex items-center space-x-3 p-3 bg-blue-600/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-all duration-300">
                      <span className="text-lg">??</span>
                      <span className="font-medium">Generate Report</span>
                    </button>
                    <button className="flex items-center space-x-3 p-3 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-600/30 transition-all duration-300">
                      <span className="text-lg">??</span>
                      <span className="font-medium">Backup Database</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">User Control Panel</h2>
              <p className="text-white/70">Advanced user management features coming soon...</p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Advanced Analytics</h2>
              <p className="text-white/70">Deep analytics dashboard coming soon...</p>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Administrative Reports</h2>
              <p className="text-white/70">Report generation system coming soon...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">System Settings</h2>
              <p className="text-white/70">Advanced system configuration coming soon...</p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Security Management</h2>
              <p className="text-white/70">Security monitoring and controls coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
