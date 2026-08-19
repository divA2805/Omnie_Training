'use client'

import ProductCard, {
  Product,
} from './ProductCard'

const products: Product[] = [
  {
    id: 1,
    name: 'Hot Wheels Lamborghini Aventador',
    price: 8.99,
    image: '/images/1.jpg',
  },
  {
    id: 2,
    name: 'Hot Wheels Ford Mustang GT',
    price: 7.99,
    image: '/images/2.jpg',
  },
  {
    id: 3,
    name: 'Hot Wheels Nissan Skyline GT-R',
    price: 9.99,
    image: '/images/3.jpg',
  },
  {
    id: 4,
    name: 'Hot Wheels Chevrolet Camaro',
    price: 6.99,
    image: '/images/4.jpg',
  },
  {
    id: 5,
    name: 'Hot Wheels Porsche 911',
    price: 8.49,
    image: '/images/5.jpg',
  },
  {
    id: 6,
    name: 'Hot Wheels McLaren P1',
    price: 9.49,
    image: '/images/6.jpg',
  },
  {
    id: 7,
    name: 'Hot Wheels Dodge Challenger',
    price: 7.49,
    image: '/images/7.jpg',
  },
  {
    id: 8,
    name: 'Hot Wheels Toyota Supra',
    price: 8.49,
    image: '/images/8.jpg',
  },
]

export default function ProductList() {
  return (
    <section className="products-section">

      <h1>HOT WHEELS COLLECTION</h1>

      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  )
}