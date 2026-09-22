// Components/ProductCard.tsx — now links to detail page
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

export const ProductCard = ({ product }: { product: Product }) => {
  const discountPercent =
    product.onSale && product.salePrice
      ? Math.round((1 - product.salePrice / product.originalPrice) * 100)
      : null

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
        {discountPercent !== null && (
          <span className="product-card__badge">-{discountPercent}%</span>
        )}
      </div>
      <div className="product-card__info">
        <span className="product-card__name">{product.name}</span>
        <span className="product-card__price-group">
          {product.onSale && product.salePrice ? (
            <>
              <span className="product-card__price product-card__price--original">
                ${product.originalPrice}
              </span>
              <span className="product-card__price product-card__price--sale">
                ${product.salePrice}
              </span>
            </>
          ) : (
            <span className="product-card__price">${product.originalPrice}</span>
          )}
        </span>
      </div>
    </Link>
  )
}