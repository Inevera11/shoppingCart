import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

export const ShoppingCart = () => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={true} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              //   id={item.id}
              //   quantity={item.quantity}
              {...item}
            />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
