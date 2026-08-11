import React from "react";
const checkout = {
  id: "1223",
  createAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "jacket",
      color: "black",
      size: "M",
      price: 150,
      quantiry: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "shirt",
      color: "black",
      size: "M",
      price: 60,
      quantiry: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "nakhil street b50 n12",
    city: "oujda",
    country: "morocco",
  },
};

function calculateEstimatedDelivery(createAt) {
  const orderDate = new Date(createAt);
  orderDate.setDate(orderDate.getDate() + 10);
  return orderDate.toDateString();
}
const OrderConfirmationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8 ">
        Thank you for your order
      </h1>
      {checkout && (
        <div className="p-6 flex flex-col gap-4 rounded-lg border border-gray-300">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Order Id: {checkout.id}
            </h2>
            <p className="text-gray-500">
              Order date: {new Date(checkout.createAt).toLocaleDateString()}
            </p>
          </div>
          {/* Estimated Delivery */}
          <div>
            <p className="text-emerald-700 text-sm ">
              Estimated Delivery:{" "}
              {calculateEstimatedDelivery(checkout.createAt)}
            </p>
          </div>

          {/* ordered items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">Qty: {item.quantiry}</p>
                </div>
              </div>
            ))}
          </div>

          {/* payment and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-700">Paypal</p>
            </div>

            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery </h4>
              <p className="text-gray-700">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-700">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
