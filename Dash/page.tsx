'use client'

import React from 'react';
import Image from 'next/image';

export default function Dash() {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-black border-r border-gray-700 p-6">
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold mb-4">Navigation</h2>
          <nav className="space-y-2">
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Dashboard
            </a>
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Analytics
            </a>
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Reports
            </a>
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Settings
            </a>
          </nav>
        </div>
        
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold mb-4">Tools</h2>
          <div className="space-y-2">
            <button className="w-full text-left text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Data Export
            </button>
            <button className="w-full text-left text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Backup
            </button>
            <button className="w-full text-left text-gray-300 hover:text-white hover:bg-black px-3 py-2 rounded transition-colors border border-gray-700 hover:border-gray-500">
              Import
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Recent</h2>
          <div className="space-y-2 text-sm">
            <div className="text-gray-400 p-2 bg-black rounded border border-gray-700">
              Last login: Today 9:15 AM
            </div>
            <div className="text-gray-400 p-2 bg-black rounded border border-gray-700">
              Last export: Yesterday
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-black border-b border-gray-700 p-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/spxgold.png"
              alt="Spider Gold Logo"
              width={48}
              height={48}
              className="transition-opacity hover:opacity-80"
            />
            <div>
              <h1 className="text-white text-3xl font-bold">Dash .11</h1>
              <p className="text-gray-400 mt-2">Welcome to your Dash.11 control center</p>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-8">
            {/* First Row of Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-white">1,234</p>
                <p className="text-gray-400 text-sm mt-2">+12% from last month</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-white">$45,678</p>
                <p className="text-gray-400 text-sm mt-2">+8% from last month</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Active Sessions</h3>
                <p className="text-3xl font-bold text-white">567</p>
                <p className="text-gray-400 text-sm mt-2">Currently online</p>
              </div>
            </div>

            {/* Second Row of Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Server Load</h3>
                <p className="text-3xl font-bold text-white">23%</p>
                <p className="text-gray-400 text-sm mt-2">CPU usage normal</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Memory Usage</h3>
                <p className="text-3xl font-bold text-white">4.2GB</p>
                <p className="text-gray-400 text-sm mt-2">of 16GB total</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Network Traffic</h3>
                <p className="text-3xl font-bold text-white">2.4TB</p>
                <p className="text-gray-400 text-sm mt-2">This month</p>
              </div>
            </div>

            {/* Third Row of Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Database Queries</h3>
                <p className="text-3xl font-bold text-white">892K</p>
                <p className="text-gray-400 text-sm mt-2">Today</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Error Rate</h3>
                <p className="text-3xl font-bold text-white">0.02%</p>
                <p className="text-gray-400 text-sm mt-2">Last 24 hours</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Response Time</h3>
                <p className="text-3xl font-bold text-white">42ms</p>
                <p className="text-gray-400 text-sm mt-2">Average</p>
              </div>
            </div>

            {/* Chart/Graph Area */}
            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
              <h3 className="text-white text-xl font-semibold mb-4">Analytics Overview</h3>
              <div className="h-64 bg-gray-900 rounded flex items-center justify-center border border-gray-800">
                <p className="text-gray-400">Chart visualization would go here</p>
              </div>
            </div>

            {/* Additional Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-xl font-semibold mb-4">Security Alerts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-800">
                    <span className="text-gray-300">Failed Login Attempts</span>
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-800">
                    <span className="text-gray-300">Suspicious Activity</span>
                    <span className="text-white font-bold">0</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-800">
                    <span className="text-gray-300">Firewall Blocks</span>
                    <span className="text-white font-bold">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-xl font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Disk Usage</span>
                      <span className="text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Bandwidth</span>
                      <span className="text-white">34%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '34%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Cache Hit Rate</span>
                      <span className="text-white">92%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Row - More Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">API Calls</h3>
                <p className="text-2xl font-bold text-white">15.2K</p>
                <p className="text-gray-400 text-sm mt-2">Today</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Cache Size</h3>
                <p className="text-2xl font-bold text-white">892MB</p>
                <p className="text-gray-400 text-sm mt-2">Current</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Queue Size</h3>
                <p className="text-2xl font-bold text-white">23</p>
                <p className="text-gray-400 text-sm mt-2">Pending</p>
              </div>

              <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
                <h3 className="text-white text-lg font-semibold mb-2">Uptime</h3>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-gray-400 text-sm mt-2">This month</p>
              </div>
            </div>

            {/* Final Large Box */}
            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
              <h3 className="text-white text-xl font-semibold mb-4">System Logs</h3>
              <div className="bg-gray-900 rounded p-4 border border-gray-800 h-48 overflow-y-auto">
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-white">[2025-11-07 14:30:15] INFO: System startup completed</div>
                  <div className="text-gray-400">[2025-11-07 14:30:16] DEBUG: Loading configuration files</div>
                  <div className="text-white">[2025-11-07 14:30:17] WARN: High memory usage detected</div>
                  <div className="text-white">[2025-11-07 14:30:18] INFO: Database connection established</div>
                  <div className="text-gray-400">[2025-11-07 14:30:19] DEBUG: Cache warming started</div>
                  <div className="text-white">[2025-11-07 14:30:20] INFO: All services running normally</div>
                  <div className="text-gray-400">[2025-11-07 14:30:21] DEBUG: Monitoring systems active</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-black border-l border-gray-700 p-6">
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold mb-4">Activity Feed</h2>
          <div className="space-y-3">
            <div className="bg-black p-3 rounded border border-gray-700">
              <p className="text-white text-sm font-medium">New user registered</p>
              <p className="text-gray-400 text-xs mt-1">2 minutes ago</p>
            </div>
            <div className="bg-black p-3 rounded border border-gray-700">
              <p className="text-white text-sm font-medium">System backup completed</p>
              <p className="text-gray-400 text-xs mt-1">1 hour ago</p>
            </div>
            <div className="bg-black p-3 rounded border border-gray-700">
              <p className="text-white text-sm font-medium">Server maintenance scheduled</p>
              <p className="text-gray-400 text-xs mt-1">3 hours ago</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-white text-xl font-bold mb-4">System Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-700">
              <span className="text-gray-300">Server</span>
              <span className="text-white text-sm">Online</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-700">
              <span className="text-gray-300">Database</span>
              <span className="text-white text-sm">Connected</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-black rounded border border-gray-700">
              <span className="text-gray-300">API</span>
              <span className="text-white text-sm">Slow</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-black border border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded transition-colors">
              Generate Report
            </button>
            <button className="w-full bg-black border border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded transition-colors">
              Export Data
            </button>
            <button className="w-full bg-black border border-gray-700 hover:border-gray-500 text-white px-4 py-2 rounded transition-colors">
              System Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
