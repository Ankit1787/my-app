import Link from "next/link";

export default function Home() {
  return (
    <main className=" p-24">
     <div>home page</div>
     <div className="flex gap-4">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/profile/settings">Settings</Link>
      <Link href="/users">Users</Link>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>   

     </div>
    </main>
  )
}
