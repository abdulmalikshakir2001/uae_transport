import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="block p-2 hover:bg-gray-700 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="block p-2 hover:bg-gray-700 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
} 