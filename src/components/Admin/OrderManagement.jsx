const OrderManagement = () => {
  let orders = [
    {
      _id: 123,
      user: {
        name: "john doe",
      },
      totalPrice: 120,
      status: "processing",
    },
  ];

  function handleOrderStatusChange(orderId, status) {
    console.log(orderId);
    orders = orders.map((order) => {
      if (order._id === orderId) return { ...order, status: status };
      return order;
    });
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 ">Order Management</h2>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500 ">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-300 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="py-3 px-4 font-medium text-gray-900 whitespace-nowrap ">
                    #{order.id}
                  </td>

                  <td className="py-3 px-4">{order.user.name}</td>
                  <td className="py-3 px-4">${order.totalPrice}</td>
                  <td className="py-3 px-4 text-black">
                    <select
                      onChange={(e) =>
                        handleOrderStatusChange(order._id, e.target.value)
                      }
                      value={order.status}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 cursor-pointer"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                  <td className="py-3 px-4">
                    <button
                      onClick={() =>
                        handleOrderStatusChange(order._id, "Delivered")
                      }
                      className="bg-green-500 text-white cursor-pointer py-2 px-4 rounded hover:bg-green-600"
                    >
                      Mark As Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-gray-900 py-3 text-center" colSpan={5}>
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
