import styles from './UserCard.module.css'
import UserButton from './UserButton';
type UserCardProps = {
  user: {
    name: string;
    email: string;
    description: string;
  };
};
const UserCard = ({ user }: UserCardProps) => {

  return (
    <div className={styles.userCard}>
        <div>
            {
                new Date().toLocaleDateString('en-In', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    second: 'numeric',
                    minute: 'numeric',
                    hour: 'numeric',
                })
            }
        </div>
    <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
      <img src="https://via.placeholder.com/150" alt="User Image" className="object-cover h-full w-full" />
    </div>
        <h2 className="text-lg font-semibold mb-2">{user?.name}</h2>
        <h3 className="text-md font-medium mb-2">{user?.email}</h3>
        <p className="text-gray-600 mb-4">{user?.description}</p>
        <div className="flex items-center gap-2">
         <UserButton/>
        </div>  
    </div>
  )
}

export default UserCard