import { createContext, useState } from "react";

export const CartListContext = createContext();

export const CartListContextProvider = ({children}) => {
  const [listProducts, setListProducts] = useState([]);

  return (
    <CartListContext.Provider value={{listProducts, setListProducts}}>
      {children}
    </CartListContext.Provider>
  )
}