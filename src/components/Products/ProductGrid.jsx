import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  if (!products) return <div></div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products?.map((product, idx) => (
        <Link
          to={`/product/${product._id}`}
          className="block"
          key={product._id}
        >
          <div className="bg-white p-4 rounded-lg ">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url || null}
                alt={product?.images[0]?.alText || product.name}
                className="size-full object-cover rounded-lg"
              />
            </div>
            <h3 className=" mb-2 font-bold">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
              {" "}
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
