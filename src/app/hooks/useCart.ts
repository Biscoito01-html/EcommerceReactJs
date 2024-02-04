import {useContext} from 'react'
import {CartItemsContext} from '@/contexts/CartItems'



export const useCart = () =>  useContext(CartItemsContext);