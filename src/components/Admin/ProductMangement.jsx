import React from "react";
import { Link } from "react-router-dom";
const products = [
  {
    _id: 1235,
    name: "shirt",
    price: 120,
    sku: "123456",
  },
];

function handleDeleteProduct(productId) {
  if (window.confirm("Are you sure you want to delete this product?")) {
    console.log(productId);
  }
}
const ProductMangement = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <table className="min-w-full text-center bg-gray-400 shadow rounded">
        <thead className=" text-gray-200 text-xs uppercase">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">SKU</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr
                key={product._id}
                className="border-b border-gray-100 bg-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-4 font-mediumtext-gray-900 whitespace-nowrap ">
                  {product.name}
                </td>
                <td className="p-4">${product.price.toFixed(2)}</td>
                <td className="p-4">{product.sku}</td>
                <td className="p-4">
                  <Link
                    to={`edit/${product._id}`}
                    className="text-white bg-yellow-500   mr-2 hover:bg-yellow-600  inline-flex items-center justify-center text-sm px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white  cursor-pointer  inline-flex items-center justify-center text-sm px-2 py-1 rounded"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="">
              <td colSpan={4} className="p-4 text-center text-gray-600">
                No Products Found{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductMangement;
