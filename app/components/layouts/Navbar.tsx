import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between p-4">
      Navbar
      <div>
     <div className="flex gap-4">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/profile/settings">Settings</Link>
      <Link href="/users">Users</Link>
      <Link href="/products">Products</Link>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>   

     </div>
      </div>
    </div>
  )
}

export default Navbar