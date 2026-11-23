import UserCard from '../features/users/UserCard';

interface User {
  id: number;
  name: string;
  email: string;
}
const UsersPage = async () => {
    const users :User[] = await fetch('https://jsonplaceholder.typicode.com/users',{
        next: { revalidate: 10,tags: ['users'] }
    })
    .then((res) => res.json())
    .catch((err) => {
        console.log('Error fetching users:', err);
        return [];
    });
    await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'John Doe', email: 'john.doe@example.com' }

        )
    }).then((res) => res.json())
    .then((data) => {
        console.log('User created:', data);     

    })
    .catch((err) => {
        console.log('Error creating user:', err);
    });

  return (
    <div className="p-4">
      <h1>Users</h1>
      <div>

      </div>
      <ul>
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