import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {
  const { user } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('profile')

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
            My Account
          </h1>
          <p className="text-gray-600">Manage your account and orders</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'profile'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === 'orders'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Orders
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {activeTab === 'profile' && (
            <div className="card p-6">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    {user.name}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'orders' && (
            <div className="card p-6">
              <h3 className="text-xl font-heading font-bold mb-4">Order History</h3>
              <p className="text-gray-600">No orders yet.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Profile
