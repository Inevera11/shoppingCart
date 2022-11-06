import React, { ReactNode, useContext, createContext } from "react";
const shoppingCartContext = createContext({});

type ShoppingCartProviderProps = {
  children: ReactNode;
};
export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  return (
    <shoppingCartContext.Provider value={{}}>
      {children}
    </shoppingCartContext.Provider>
  );
};
