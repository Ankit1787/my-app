import { Metadata } from 'next';
import UserCard from '../features/users/UserCard';
import { fetchAPI } from '../lib/api';
import { notFound } from 'next/navigation';
interface User {
  id: number;
  name: string;
  email: string;
}
export const metadata:Metadata = {
  title: 'Users Page',
  description: 'This is the users page',
}
export type ApiResponse<T>={
    data:T,
    message:string,
    success:boolean
}

const UsersPage = async () => {
    const res= await fetchAPI('/users', {
        // next: { revalidate: 10,tags: ['users'] }
        cache: 'no-store'
    })
    const users= res.users as User[];
    // if(users.length >=0){
    //     notFound()
    // }
    // await fetch('https://jsonplaceholder.typicode.com/users',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' }

    //     )
    // }).then((res) => res.json())
    // .then((data) => {
    //     console.log('User created:', data);     

    // })
    // .catch((err) => {
    //     console.log('Error creating user:', err);
    // });
  return (
    <div className="p-4">
      <h1>Users</h1>
      <div>

      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <li key={user.id}>
           <UserCard user={{ name: user.name, email: user.email, description: `User ID: ${user.id}` }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage