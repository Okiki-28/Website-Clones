// data/products.ts
export interface Product {
  id: string
  name: string
  originalPrice: number
  salePrice?: number
  onSale: boolean
  image: string
  category: 'dresses' | 'outerwear' | 'knitwear' | 'accessories'
  audience: 'women' | 'men' | 'children'
  isNew: boolean
}

export const PRODUCTS: Product[] = [
  // ---- Dresses ----
  { id: 'd1', name: 'Draped Midi Dress', originalPrice: 124, onSale: false, category: 'dresses', audience: 'women', isNew: true, image: 'https://images.unsplash.com/photo-1612087057305-7e57f8d88e69?w=800&auto=format&fit=crop&q=80' },
  { id: 'd2', name: 'Wrap Front Dress', originalPrice: 98, onSale: false, category: 'dresses', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80' },
  { id: 'd3', name: 'Belted Shirt Dress', originalPrice: 88, salePrice: 61, onSale: true, category: 'dresses', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80' },
  { id: 'd4', name: 'Linen Slip Dress', originalPrice: 76, onSale: false, category: 'dresses', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?w=800&auto=format&fit=crop&q=80' },
  { id: 'd5', name: 'Tiered Maxi Dress', originalPrice: 112, onSale: false, category: 'dresses', audience: 'women', isNew: true, image: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&auto=format&fit=crop&q=80' },
  { id: 'd6', name: 'Ruched Bodycon Dress', originalPrice: 94, onSale: false, category: 'dresses', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&auto=format&fit=crop&q=80' },
  { id: 'd7', name: 'Floral Wrap Dress', originalPrice: 102, onSale: false, category: 'dresses', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&auto=format&fit=crop&q=80' },

  // ---- Outerwear ----
  { id: 'o1', name: 'Wool Blend Overcoat', originalPrice: 198, onSale: false, category: 'outerwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&auto=format&fit=crop&q=80' },
  { id: 'o2', name: 'Quilted Field Jacket', originalPrice: 142, onSale: false, category: 'outerwear', audience: 'men', isNew: true, image: 'https://images.unsplash.com/photo-1718985342149-7178154e0aee?w=800&auto=format&fit=crop&q=80' },
  { id: 'o3', name: 'Tailored Trench Coat', originalPrice: 176, onSale: false, category: 'outerwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800&auto=format&fit=crop&q=80' },
  { id: 'o4', name: 'Cropped Denim Jacket', originalPrice: 88, salePrice: 62, onSale: true, category: 'outerwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1555529771-122e5d9f2341?w=800&auto=format&fit=crop&q=80' },
  { id: 'o5', name: 'Longline Duster Coat', originalPrice: 164, onSale: false, category: 'outerwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&auto=format&fit=crop&q=80' },
  { id: 'o6', name: 'Boxy Wool Blazer', originalPrice: 134, onSale: false, category: 'outerwear', audience: 'men', isNew: true, image: 'https://images.unsplash.com/photo-1758274251589-fb70a3654a1b?w=800&auto=format&fit=crop&q=80' },
  { id: 'o7', name: 'Shearling Bomber', originalPrice: 188, salePrice: 141, onSale: true, category: 'outerwear', audience: 'men', isNew: false, image: 'https://images.unsplash.com/photo-1758520387687-38a92a7ee42f?w=800&auto=format&fit=crop&q=80' },

  // ---- Knitwear ----
  { id: 'k1', name: 'Relaxed Crew Sweater', originalPrice: 68, onSale: false, category: 'knitwear', audience: 'men', isNew: true, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80' },
  { id: 'k2', name: 'Essential Long Sleeve', originalPrice: 42, onSale: false, category: 'knitwear', audience: 'men', isNew: false, image: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80' },
  { id: 'k3', name: 'Everyday Cotton Tee', originalPrice: 36, salePrice: 25, onSale: true, category: 'knitwear', audience: 'men', isNew: false, image: 'https://images.unsplash.com/photo-1607160199580-1b0c9b736b66?w=800&auto=format&fit=crop&q=80' },
  { id: 'k4', name: 'Cable Knit Sweater', originalPrice: 78, onSale: false, category: 'knitwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1758537698215-af1e35acb911?w=800&auto=format&fit=crop&q=80' },
  { id: 'k5', name: 'Ribbed Turtleneck', originalPrice: 58, onSale: false, category: 'knitwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1749928439074-be9238bf1bee?w=800&auto=format&fit=crop&q=80' },
  { id: 'k6', name: 'Open Knit Cardigan', originalPrice: 72, onSale: false, category: 'knitwear', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80' },
  { id: 'k7', name: 'Chunky Wool Pullover', originalPrice: 84, onSale: false, category: 'knitwear', audience: 'men', isNew: false, image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&auto=format&fit=crop&q=80' },

  // ---- Accessories ----
  { id: 'a1', name: 'Structured Tote Bag', originalPrice: 56, onSale: false, category: 'accessories', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80' },
  { id: 'a2', name: 'Everyday Carryall', originalPrice: 48, onSale: false, category: 'accessories', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=80' },
  { id: 'a3', name: 'Woven Belt', originalPrice: 28, salePrice: 20, onSale: true, category: 'accessories', audience: 'men', isNew: false, image: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&auto=format&fit=crop&q=80' },
  { id: 'a4', name: 'Silk Scarf', originalPrice: 34, onSale: false, category: 'accessories', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?w=800&auto=format&fit=crop&q=80' },
  { id: 'a5', name: 'Wide Brim Hat', originalPrice: 44, onSale: false, category: 'accessories', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1718985342149-7178154e0aee?w=800&auto=format&fit=crop&q=80' },
  { id: 'a6', name: 'Leather Crossbody', originalPrice: 62, onSale: false, category: 'accessories', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&auto=format&fit=crop&q=80' },
  { id: 'a7', name: 'Minimal Gold Necklace', originalPrice: 38, onSale: false, category: 'accessories', audience: 'women', isNew: false, image: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&auto=format&fit=crop&q=80' },
]