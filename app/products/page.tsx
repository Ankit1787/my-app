import ProductCard from '../features/products/components/ProductCard'
import { fetchAPI } from '../lib/api';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
}

const ProductsPage = async () => {
    const res=await fetchAPI('/products', {
        cache: 'no-store'
    })
    
    const products= res.products as Product[];

  return (
    <div className="p-4">
        <div>ProductsPage</div>
        <div className="grid grid-cols-4 gap-4 mt-4">
            {
                products.map((product: Product, index: number) => (
                    <ProductCard key={index}  product={product} url={`/products/${product.id}`} />
                ))
            }
        </div>


    </div>
  )
}

export default ProductsPage