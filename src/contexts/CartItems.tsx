import {createContext, ReactNode, useState} from 'react'
import {Product} from '@/types/Product'


interface CartItemsContextProps {
  cartItems: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  helloWorld: () => void
}

export const CartItemsContext = createContext({} as CartItemsContextProps);

interface CartItemsProviderProps {
  children: ReactNode
}

export const CartItemsProvider = ({children}: CartItemsProviderProps) => {
  const [ cartItems, setCartItems ] = useState<Product[]>([]);
    
  const addToCart =  (product: Product) => {
      setCartItems((prevState) =>  ([...prevState, product ]));
  }
  const removeFromCart = (id: number)=>  {
      setCartItems(cartItems.filter((product) => product.id !== id));
  }

  const helloWorld = () => console.log('hello world')

  return (
    <CartItemsContext.Provider value={{cartItems, addToCart, removeFromCart, helloWorld}}>
      {children}
    </CartItemsContext.Provider>
  )
}