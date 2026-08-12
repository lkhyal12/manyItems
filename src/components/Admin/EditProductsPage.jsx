import React, { useState } from "react";

const EditProductsPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/200?random=1" },
      { url: "https://picsum.photos/200?random=2" },
    ],
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // handle image upload
  function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log(file);
  }

  // handlesubmit function
  function handleSubmit(e) {
    e.preventDefault();
    console.log(productData);
  }
  return (
    <div className="max-w-5xl mx-auto p-6 rounded">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Product Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description:</label>
          <textarea
            type="text"
            name="description"
            rows={4}
            value={productData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* stock count */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Items on stock:</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* sku */}

        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (separated by commas)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData((prev) => ({
                ...prev,
                sizes: e.target.value.split(",").map((el) => el.trim()),
              }))
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Colors (separated by commas)
          </label>
          <input
            type="text"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData((prev) => ({
                ...prev,
                colors: e.target.value.split(",").map((el) => el.trim()),
              }))
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* image upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Images:</label>
          <input
            type="file"
            className="border border-gray-300  p-2"
            onChange={handleImageUpload}
          />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.altText || "Product Image"}
                className="w-20 h-20 object-cover rounded-md shadow-sm"
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white cursor-pointer py-2 rounded-md hover:bg-green-600 transition-colors duration-100 w-full"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductsPage;
