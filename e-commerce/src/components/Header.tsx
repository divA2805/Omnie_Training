'use client'

import { ShoppingCart } from 'lucide-react'

import { useAppSelector } from '@/lib/hooks'

export default function Header() {
  const totalQuantity = useAppSelector(
    (state) => state.cart.totalQuantity
  )

  return (
    <header className="header">

      <div className="logo">
        HOT WHEELS SHOP
      </div>

      <div className="cart">

        <ShoppingCart size={28} />

        <span className="cart-count">
          {totalQuantity}
        </span>

      </div>

    </header>
  )
}