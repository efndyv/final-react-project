import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../pages/shop/CartContext";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const QuantityButton = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "2px solid #ccc",
        overflow: "hidden",
        width: "80px",
      }}
    >
      <button
        onClick={onDecrease}
        style={{
          flex: 1,
          padding: "8px",
          backgroundColor: "#fff",
          border: "none",
          cursor: "pointer",
          color: "#ccc",
        }}
      >
        -
      </button>
      <span
        style={{
          flex: 1,
          textAlign: "center",
          padding: "8px",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        style={{
          flex: 1,
          padding: "8px",
          backgroundColor: "#fff",
          border: "none",
          cursor: "pointer",
          color: "#ccc",
        }}
      >
        +
      </button>
    </div>
  );
};

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const cartTotal = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  const freeShippingThreshold = 75;
  const progressPercent = Math.min(
    (cartTotal / freeShippingThreshold) * 100,
    100
  );


  const formatPrice = (price) => {
    const { currencySymbol, currency } = t("cart", { returnObjects: true });

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  return (
    <div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className="cartItem"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          backgroundColor: "#fff",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          width: window.innerWidth <= 767 ? "100%" : "30%",
          zIndex: 1000,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="cartHeader">
          <IoMdClose
            className="closeIcon"
            onClick={() => setIsOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="cartTitle">
          <span>
            {cartTotal >= freeShippingThreshold
              ? t("cart.freeShipping")
              : t("cart.shippingRemaining", {
                  amount: (freeShippingThreshold - cartTotal).toFixed(2),
                })}
          </span>
          <div className="cartProgress">
            <div
              className="progressBar"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="cartLink">
          {cartItems.length === 0 ? (
            <>
              <p>{t("cart.empty")}</p>
              <Link to="/arrivals" className="link">
                {t("cart.shopMen")}
              </Link>
              <Link to="/arrivals" className="link">
                {t("cart.shopWomen")}
              </Link>
              <Link to="/arrivals" className="link">
                {t("cart.shopSocks")}
              </Link>
              <Link to="/arrivals" className="link">
                {t("cart.shopMensSale")}
              </Link>
              <Link to="/arrivals" className="link">
                {t("cart.shopWomensSale")}
              </Link>
            </>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.uniqueId} className="cart-item">
                  <img src={item.img} alt={item.title} />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>
                      {t("cart.size")}: {item.size}
                    </p>
                    <div className="cartQuan">
                      <QuantityButton
                        quantity={item.quantity}
                        onDecrease={() => decreaseQuantity(item.uniqueId)}
                        onIncrease={() => increaseQuantity(item.uniqueId)}
                      />
                      <p>
                        {formatPrice(
                          parseFloat(item.price.replace("$", "")) *
                            item.quantity
                        )}
                      </p>{" "}
                      
                    </div>
                    <IoMdClose
                      className="removeItemButton"
                      onClick={() => removeFromCart(item.uniqueId)}
                      aria-label={t("cart.removeItem")}
                    />
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h3>{t("cart.subtotal")}</h3> <p> {formatPrice(cartTotal)} </p>
              </div>
              <Link to={"/proceed"}>
                <button className="checkout-button">
                  {t("cart.checkout")}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className="cartToggle"
        onClick={() => setIsOpen(true)}
        style={{
          top: "55px",
          right: "20px",
          zIndex: 1000,
          cursor: "pointer",
          display: isOpen ? "none" : "block",
        }}
      >
        <FaShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
