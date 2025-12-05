import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to <span className="text-primary-600">twoChurch</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Church Management Platform - Web, Tablet & Mobile
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">👥 Members</h2>
              <p className="text-gray-600">Manage your church members and families</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">📅 Events</h2>
              <p className="text-gray-600">Schedule and track church events</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">💰 Donations</h2>
              <p className="text-gray-600">Track tithes and offerings</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">🎤 Sermons</h2>
              <p className="text-gray-600">Archive and share sermons</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">👨‍👩‍👧‍👦 Groups</h2>
              <p className="text-gray-600">Manage small groups and cells</p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">📱 Mobile</h2>
              <p className="text-gray-600">Access from any device</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/dashboard" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center text-sm text-gray-500">
        <p>Built with ❤️ by IT Solutions LLC</p>
      </div>
    </main>
  )
}
