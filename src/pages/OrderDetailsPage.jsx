import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "Standard",
      shpippingAddress: { city: "New York", country: "USA" },
      orders: [
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
    };

    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border border-gray-300">
          {/* order info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              Order Id: #{orderDetails._id}
            </h3>
            <p className="text-gray-700">
              {new Date(orderDetails.createdAt).toLocaleDateString()}
            </p>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>
          {/* Customer Payment Shipping Info */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 ">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p className="text-gray-700">
                Payment Method: {orderDetails.paymentMethod}
              </p>
              <p className="text-gray-700">
                Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p className="text-gray-700">
                Shipping Method: {orderDetails.shippingMethod}
              </p>
              <p className="text-gray-700">
                Address: {orderDetails.shpippingAddress.city}, $
                {orderDetails.shpippingAddress.country}
              </p>
            </div>
          </div>

          {/* product list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="text-gray-600 min-w-full mb-4 ">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {orderDetails.orders.map((item) => (
                  <tr
                    key={item.productId}
                    className="border-b border-gray-300 text-center"
                  >
                    <td className="py-2 px-4 flex items-center ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" w-12 h-12 rounded-lg mr-4 object-cover"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">{item.quantiry}</td>
                    <td className="py-2 px-4">${item.price * item.quantiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* link back to my orders */}
          <Link
            to="/my-orders"
            className="text-blue-500 font-semibold hover:underline my-4 block"
          >
            Back To My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
