'use client'

import {
  ShoppingCart,
  Trash2,
  Heart,
} from 'lucide-react'

import { useAppDispatch } from '@/lib/hooks'

import {
  addToCart,
  removeFromCart,
} from '@/features/cart/cartSlice'

export interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart())
  }

  const handleDelete = () => {
    dispatch(removeFromCart())
  }

  return (
    <div className="product-card">

      {/* Image */}
      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <button className="wishlist">
          <Heart size={20} />
        </button>

      </div>

      {/* Product information */}
      <div className="product-info">

        <h3>{product.name}</h3>

        <div className="price">
          ${product.price.toFixed(2)}
        </div>

        {/* Buttons */}
        <div className="product-actions">

          <button
            className="add-button"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />

            Add To Cart
          </button>

          <button
            className="delete-button"
            onClick={handleDelete}
            aria-label="Remove one item"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  )
}