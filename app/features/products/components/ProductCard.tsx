import React from 'react'
import Button from '../../../components/ui/Button'
import { Product } from '@/app/products/[id]/page';

const ProductCard =  ({ product, url }: { product: Product; url: string }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
    <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
      <img src={product.thumbnail} alt={product.title} className="object-cover h-full w-full" />
    </div>
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <Button url={url} />
    </div>
  )
}

export default ProductCard