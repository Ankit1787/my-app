import React from 'react'
import Button from '../../../components/ui/Button'

const ProductCard = ({ url }: { url: string }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
    <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
      <img src="https://via.placeholder.com/150" alt="Product Image" className="object-cover h-full w-full" />
    </div>
        <h2 className="text-lg font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">Product description goes here.</p>
        <Button url={url} />
    </div>
  )
}

export default ProductCard