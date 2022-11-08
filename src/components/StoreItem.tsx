import { Button, Card } from "react-bootstrap";
import { formatCurency } from "../utilities/formatCurency";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100" style={{ cursor: "pointer" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="400em"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity !== 0 ? (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.25em" }}
            >
              <div
                className="d-flex flex-row align-items-center space-between"
                style={{ gap: "0.5em" }}
              >
                <Button
                  onClick={() => {
                    increaseCartQuantity(id);
                  }}
                >
                  +
                </Button>
                <div className="fs-3">
                  <span className="fs-1">{quantity} </span>in Cart
                </div>
                <Button
                  onClick={() => {
                    decreaseCartQuantity(id);
                  }}
                >
                  -
                </Button>
              </div>
              <Button
                variant="danger"
                onClick={() => {
                  removeFromCart(id);
                }}
              >
                Remove
              </Button>
            </div>
          ) : (
            <Button
              className="w-100"
              onClick={() => {
                increaseCartQuantity(id);
              }}
            >
              + Add To Card
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
