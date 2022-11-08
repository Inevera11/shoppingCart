import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurency } from "../utilities/formatCurency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex allign-items-center"
    >
      <img src={item.imgUrl} style={{ width: "125px", objectFit: "cover" }} />
      <div className="me-auto">
        <div className="d-flex flex-column">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".9rem" }}>
                x{quantity}
              </span>
            )}
          </div>

          <div className="text-muted" style={{ fontSize: ".8rem" }}>
            {formatCurency(item.price)}
          </div>
        </div>
      </div>
      <div className="text-muted">{formatCurency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
