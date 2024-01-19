import React from "react";
import { useId } from "react";
import { useCart } from "../../hooks/useCart";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function CartItem({ imagenes, price, title, quantify, addToCart, removeFromCart }) {
  const handleAddToCart = () => {
    addToCart();
  };

  const handleRemoveFromCart = () => {
    removeFromCart();
  };

  return (
    <li>
      <h2>Mi bolsa de compras</h2> <br/>
      <img src={imagenes[0]} alt={title} />
      <div className="titleCard">
        <strong>{title}</strong> ${price}
      </div>
      <footer>
        <button onClick={handleRemoveFromCart}><RemoveIcon/></button>
        <small>Cantidad: {quantify}</small>
        <button onClick={handleAddToCart}><AddIcon/></button>
      </footer>
    </li>
  );
}

const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // Calcula el total.
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantify,
    0
  );
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantify,
    0
  );

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <ShoppingBagIcon />
        {cart.length > 0 && (
          <span className="cart-item-count">{cart.length}</span>
        )}
      </label>
      
      <input id={cartCheckBoxId} type="checkbox" hidden />

      {cart.length > 0 && (
        <aside className="cart">
          <ul>
            {cart.map((product) => (
              <CartItem
                key={product.id_ref}
                addToCart={() => addToCart(product)}
                removeFromCart={() => removeFromCart(product.id_ref)} // Pass the product ID to removeFromCart
                {...product}
              />
            ))}
          </ul>

          <div className="items">
            <p>Cantidad: {totalQuantity}</p>
            <p>Total: ${totalPrice}</p>
            <div className="centered-button-container">
              <button className="delete" onClick={clearCart}>
                <div>
                  Finalizar Compra <br/>
                  <ClearIcon />
                </div>
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Cart;
