import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: email,
      avatar: 'https://i.pravatar.cc/150?img=1'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return mockUser
  }

  const signup = async (name, email, password) => {
    const mockUser = {
      id: Date.now(),
      name: name,
      email: email,
      avatar: 'https://i.pravatar.cc/150?img=1'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return mockUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
