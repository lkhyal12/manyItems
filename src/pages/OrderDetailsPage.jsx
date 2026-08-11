import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState();

  useEffect(() => {
    const mockOrderDetails = {
      id: id,
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
          {/* Order Info */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Order ID #{orderDetails._id}
            </h2>
            <p className="text-gray-600">
              {new Date(orderDetails.createdAt).toLocaleDateString()}
            </p>
          </div>

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
      )}
    </div>
  );
};

export default OrderDetailsPage;
