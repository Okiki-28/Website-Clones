// Pages/ProductDetail.tsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'

const DESCRIPTIONS: Record<Product['category'], string> = {
  dresses: 'A considered silhouette cut from soft-touch fabric, designed to move easily from day into evening.',
  outerwear: 'A structured layer built for transitional weather, finished with clean, minimal hardware.',
  knitwear: 'Soft-handle knit in a relaxed fit, made to be worn on repeat through the colder months.',
  accessories: 'A finishing piece designed to work quietly with whatever you already wear.',
}

const SIZES: Record<Product['category'], string[]> = {
  dresses: ['XS', 'S', 'M', 'L'],
  outerwear: ['XS', 'S', 'M', 'L', 'XL'],
  knitwear: ['XS', 'S', 'M', 'L', 'XL'],
  accessories: ['One Size'],
}

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const product = PRODUCTS.find((p) => p.id === id)
  const { addToCart } = useCart()

  const sizes = product ? SIZES[product.category] : []
  const [selectedSize, setSelectedSize] = useState(sizes[0] ?? '')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const timer = setTimeout(() => setAdded(false), 1800)
    return () => clearTimeout(timer)
  }, [added])

  if (!product) {
    return (
      <main className="product-detail product-detail--empty">
        <p>We couldn't find that product.</p>
        <Link to="/collections" className="btn btn-secondary">
          Back to Collections
        </Link>
      </main>
    )
  }

  const price = product.onSale && product.salePrice ? product.salePrice : product.originalPrice

  const handleAddToCart = () => {
    addToCart(
      {
        productId: product.id,
        name: product.name,
        image: product.image,
        price,
        size: selectedSize,
      },
      quantity
    )
    setAdded(true)
  }

  return (
    <main className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail__info">
        <h1>{product.name}</h1>

        <div className="product-detail__price">
          {product.onSale && product.salePrice ? (
            <>
              <span className="product-card__price--original">${product.originalPrice}</span>
              <span className="product-card__price--sale">${product.salePrice}</span>
            </>
          ) : (
            <span>${product.originalPrice}</span>
          )}
        </div>

        <p className="product-detail__description">{DESCRIPTIONS[product.category]}</p>

        <div className="product-detail__sizes">
          <span className="product-detail__label">Size</span>
          <div className="product-detail__size-list">
            {sizes.map((size) => (
              <button
                key={size}
                className={`product-detail__size ${selectedSize === size ? 'is-active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail__quantity">
          <span className="product-detail__label">Quantity</span>
          <div className="product-detail__stepper">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity">
              +
            </button>
          </div>
        </div>

        <button className="btn btn-primary product-detail__add" onClick={handleAddToCart}>
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>

        <p className="product-detail__note">
          Demo product — this page and its data are placeholders for portfolio purposes.
        </p>
      </div>
    </main>
  )
}