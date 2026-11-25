'use client'
// import { fetchAPI } from '@/app/lib/api';
import { useRouter } from 'next/navigation'
const Button =  ({ url }: { url: string }) => {
    //   const res = await fetchAPI(`/products/${url}`)

    const router = useRouter();
    const handleClick = () => {
        // Handle button click logic here
        console.log(`Button clicked! URL: ${url}`);
        router.push(url); // Navigate to the specified URL
    };
    return (
        <div>        
            <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
    )

}

export default Button