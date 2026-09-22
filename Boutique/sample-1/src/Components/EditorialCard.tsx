// EditorialCard.tsx
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface EditorialCardProps {
  image: string
  alt: string
  tag: string
  caption: string
  to: string
}

export const EditorialCard = ({ image, alt, tag, caption, to }: EditorialCardProps) => {
  return (
    <Link to={to} className="editorial-card">
      <img src={image} alt={alt} />
      <span className="editorial-card__tag">{tag}</span>
      <div className="editorial-card__caption">
        <span>{caption}</span>
        <ArrowRight size={16} />
      </div>
    </Link>
  )
}