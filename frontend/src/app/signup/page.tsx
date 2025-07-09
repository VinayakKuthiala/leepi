import SignUp from '@/components/SignUp'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">Create Your Account</h1>
        <SignUp />
      </div>
    </div>
  )
}

export default page