"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

export interface ICartContexrt {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
}

export const CartContext = createContext<ICartContexrt>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
});

export function CartProvider ({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  }

  return (
    <CartContext.Provider value={{
      isOpen,
      products,
      toggleCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}