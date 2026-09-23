// context/CartContext.tsx
import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export interface CartItem {
  productId: string
  name: string
  image: string
  price: number
  size: string
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const STORAGE_KEY = 'boutique_cart'
const EXPIRY_MS = 8 * 60 * 60 * 1000 // 8 hours

interface StoredCart {
  items: CartItem[]
  createdAt: number
}

const loadCart = (): StoredCart | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const parsed: StoredCart = JSON.parse(raw)
    const isExpired = Date.now() - parsed.createdAt > EXPIRY_MS

    if (isExpired) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return parsed
  } catch {
    // corrupted or unreadable — treat as no saved cart
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => loadCart()?.items ?? [])
  const [createdAt, setCreatedAt] = useState<number | null>(() => loadCart()?.createdAt ?? null)

  // persist on every change
  useEffect(() => {
    if (items.length === 0) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    const stamp = createdAt ?? Date.now()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, createdAt: stamp }))
  }, [items, createdAt])

  // auto-clear if the tab stays open past expiry
  useEffect(() => {
    if (!createdAt) return
    const remaining = EXPIRY_MS - (Date.now() - createdAt)
    if (remaining <= 0) {
      setItems([])
      setCreatedAt(null)
      return
    }
    const timer = setTimeout(() => {
      setItems([])
      setCreatedAt(null)
    }, remaining)
    return () => clearTimeout(timer)
  }, [createdAt])

  const addToCart: CartContextValue['addToCart'] = (item, quantity) => {
    setItems((prev) => {
      const isFirstItem = prev.length === 0
      if (isFirstItem) setCreatedAt(Date.now())

      const existing = prev.find((i) => i.productId === item.productId && i.size === item.size)
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId && i.size === item.size
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [...prev, { ...item, quantity }]
    })
  }

  const removeFromCart = (productId: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.size === size)))
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((i) => (i.productId === productId && i.size === size ? { ...i, quantity } : i))
    )
  }

  const clearCart = () => {
    setItems([])
    setCreatedAt(null)
  }

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}