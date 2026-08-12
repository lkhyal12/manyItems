import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  function handleRowClick(orderId) {
    navigate(`/order/${orderId}`);
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      const mockOrders = [
        {
          _id: 1255,
          createdAt: new Date(),
          shippingAdress: { city: "oujda", country: "morocco" },
          orderItems: [
            {
              name: "product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
        {
          _id: 1255444,
          createdAt: new Date(),
          shippingAdress: { city: "casa", country: "morocco" },
          orderItems: [
            {
              name: "product 1",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 160,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 ">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="shadow-md sm:rounded-lg overflow-hidden  ">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="not-last:border-b border-gray-200 hover:border-gray-50 cursor-pointer"
                >
                  <td>
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="size-10 sm:size-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap ">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:p-4 ">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:p-4 ">
                    {order.shippingAdress
                      ? `${order.shippingAdress.city}, ${order.shippingAdress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:p-4 ">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:p-4 text-sm font-medium">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="py-2 px-2 sm:p-4 ">
                    <span
                      className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"} px-2 py-1 rounded-xl text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
