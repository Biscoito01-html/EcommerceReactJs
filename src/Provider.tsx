'use client'

import {CartItemsProvider} from '@/contexts/CartItems'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}
export function Providers({children}: ProvidersProps) {
  return (

    <CartItemsProvider>
      {children}
    </CartItemsProvider>
)
}