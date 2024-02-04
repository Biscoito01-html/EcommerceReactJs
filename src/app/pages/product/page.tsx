"use client"

import Layout from "@/app/components/layout";
import ProductCard from "@/app/components/cardviwe";
import { Component, useState } from "react";
import { Product } from "@/types/Product";
import { useCart } from "@/app/hooks/useCart";

import { listaDePessoas } from "@/app/data/listdata";

export default function Dashboard( ) {
  const {cartItems, addToCart, removeFromCart} = useCart()

   /* const [ cartItems, setCartItems ] = useState<Product[]>([]);
    
    const addToCart =  (product: Product) => {
        setCartItems([...cartItems, product]);
    }
    const removeFromCart = (id: number)=>  {
        setCartItems(cartItems.filter((product) => product.id !== id));
    } */
    return (
        <>
        {cartItems.length}
        <Layout>
        {listaDePessoas.map((product) => (
          <ProductCard
            key={product.id}
            url={product.url}
            price={product.price}
            description={product.description}
            onAddClick={() => addToCart(product)}
            onRemoveClick={() => removeFromCart(product.id)}
          />
        ))}

      </Layout>
      </>
    );
}