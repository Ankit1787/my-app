import React from 'react'
import ProductCard from '../features/products/components/ProductCard'

const ProductsPage = () => {
  return (
    <div className="p-4">
        <div>ProductsPage</div>
        <div className="grid grid-cols-4 gap-4 mt-4">
            {
                Array.from({ length: 10 }, (_, index) => (
                    <ProductCard key={index}  url={`/products/${index}`} />
                ))
            }
        </div>


    </div>
  )
}

export default ProductsPage