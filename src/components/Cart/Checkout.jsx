import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalBtn from "./PaypalBtn";

const cart = {
  products: [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
      price: 15,
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
      price: 25,
    },
    {
      productId: 3,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=3",
      price: 25,
    },
    {
      productId: 4,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=4",
      price: 25,
    },
    {
      productId: 5,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=5",
      price: 25,
    },
    {
      productId: 6,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=6",
      price: 25,
    },
  ],
  totalPrice: 175,
};
const Checkout = () => {
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAdress, setShippingAdress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate();

  function handleShippingInfoChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setShippingAdress((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCheckOut(e) {
    e.preventDefault();
    setCheckoutId(123);
  }
  function handlePaymentSuccess(details) {
    navigate("/order-confirmation");
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl uppercase mb-6 ">checkout</h2>
        <form onSubmit={handleCheckOut}>
          <h2 className="text-lg mb-4 ">Contact Details</h2>
          <div className="mb-4">
            <label className="mb-4 ">
              <label className="text-gray-700 block">Email</label>
              <input
                type="email"
                value="example@mil.com"
                disabled
                className="w-full p-2 border border-gray-300 rounded"
              />
            </label>
          </div>

          <h3 className="text-lg mb-4 ">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 block mb-1">First Name</label>
              <input
                onChange={handleShippingInfoChange}
                value={shippingAdress.firstName}
                type="text"
                name="firstName"
                className="w-full p-2 border rounded border-gray-300"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Last Name</label>
              <input
                onChange={handleShippingInfoChange}
                value={shippingAdress.lastName}
                type="text"
                name="lastName"
                className="w-full p-2 border rounded border-gray-300"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-700 block mb-1">Address</label>
            <input
              onChange={handleShippingInfoChange}
              value={shippingAdress.address}
              type="text"
              name="address"
              className="w-full p-2 border rounded border-gray-300"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 block mb-1">City</label>
              <input
                onChange={handleShippingInfoChange}
                value={shippingAdress.city}
                type="text"
                name="city"
                className="w-full p-2 border rounded border-gray-300"
                required
              />
            </div>

            <div>
              <label className="text-gray-700 block mb-1">Postal Code</label>
              <input
                onChange={handleShippingInfoChange}
                value={shippingAdress.postalCode}
                type="text"
                name="postalCode"
                className="w-full p-2 border rounded border-gray-300"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-gray-700 block mb-1">Country</label>
            <input
              onChange={handleShippingInfoChange}
              value={shippingAdress.country}
              type="text"
              name="country"
              className="w-full p-2 border rounded border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-700 block mb-1">Phone</label>
            <input
              onChange={handleShippingInfoChange}
              value={shippingAdress.phone}
              type="tel"
              name="phone"
              className="w-full p-2 border rounded border-gray-300"
              required
            />
          </div>

          {!checkoutId && (
            <button className="w-full py-3 border rounded bg-black text-white font-medium cursor-pointer">
              Continue To Payment
            </button>
          )}

          {checkoutId && (
            <div>
              <h2 className="text-2xl ">Pay With Paypal</h2>
              <PaypalBtn
                amount={100}
                onSuccess={handlePaymentSuccess}
                onError={(err) => alert("payment failed try again later")}
              />
            </div>
          )}
        </form>
      </div>

      {/* right side */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4 border-gray-300">
          {cart.products.map((product, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between py-2 not-last:border-b not-last:border-gray-300"
            >
              <div className="flex items-start gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-md ">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>

              <p className="text-lg">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-lg mb-4">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex items-center justify-between text-lg mt-4 border-t border-gray-300 pt-4">
          <p className="font-bold">Total</p>
          <p className="font-bold">${cart.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
