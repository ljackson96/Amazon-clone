import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket?.length ? (
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/02/gc/2020/UK_GC_Unrec_3_Evergreen._CB412873211_.png"
              alt=""
              className="checkout_ad"
            />
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* Listing all checkout products */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        ) : (
          <div>
            <img
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              alt=""
              className="checkout_banner"
            />
            <h2>Your Shopping Cart is Empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
