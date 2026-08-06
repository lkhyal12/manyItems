import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any ocasion.",
  brand: "FashIt",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["blue", "black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "stylish jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "stylish jacket 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "stylish jacket 2",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 150,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Product 2",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "stylish jacket 2",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "stylish jacket 2",
      },
    ],
  },
];

const ProductsDetails = () => {
  const [mainImg, setMainImg] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  function handleQuantityUpdate(sign) {
    if (sign === "-") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else setQuantity((prev) => prev + 1);
  }

  function handleCartClick() {
    if (!selectedColor) return toast.error("Please select a color");
    if (!selectedSize) return toast.error("Please select a size");
    setIsBtnDisabled(true);

    const timerId = setTimeout(() => {
      toast.success("item was added successfully");
      setIsBtnDisabled(false);
      clearTimeout(timerId);
    }, 1000);
  }
  useEffect(() => {
    function setImgToSelectedProduct() {
      if (selectedProduct?.images?.length) {
        setMainImg(selectedProduct.images[0].url);
      }
    }
    setImgToSelectedProduct();
  }, [selectedProduct]);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images?.map((image, idx) => (
              <img
                src={image.url}
                alt={image.altText}
                key={image?.altText || `Thumbnail${idx}`}
                className="w-20 h-20 rounded-lg cursor-pointer border border-gray-300 object-cover"
                onClick={() => setMainImg(image.url)}
                style={{
                  opacity: mainImg === image.url ? 1 : 0.7,
                  border:
                    mainImg === image.url
                      ? "2px black solid"
                      : "1px solid gray",
                }}
              />
            ))}
          </div>

          {/* main image */}
          <div className="md:w-1/2 ">
            <div className="mb-4">
              <img
                src={mainImg || null}
                alt="Main Product image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* mobile thumbnails */}
          <div className="flex items-center justify-center space-x-3 md:hidden mt-4 overflow-x-auto">
            {selectedProduct.images?.map((image, idx) => (
              <img
                src={image.url}
                alt={image.altText}
                key={image?.altText || `Thumbnail${idx}`}
                className="w-12 h-12 rounded-lg cursor-pointer border border-gray-500"
                onClick={() => setMainImg(image.url)}
                style={{
                  opacity: mainImg === image.url ? 1 : 0.7,
                  border:
                    mainImg === image.url
                      ? "2px black solid"
                      : "1px solid gray",
                }}
              />
            ))}
          </div>

          {/* right side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className=" text-gray-600 mb-2 line-through">
              {selectedProduct.originalPrice &&
                "$" + selectedProduct.originalPrice}
            </p>
            <p className="text-xl font-semibold mb-2">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex items-center gap-2 mt-2">
                {selectedProduct.colors?.map((color) => (
                  <button
                    className={`size-8 rounded-full ${color === selectedColor ? "border-black border-3 scale-105 " : "border-gray-300 scale-100"} border cursor-pointer`}
                    key={color}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>

              {/* sizes */}
              <div className="mb-4">
                <p className="text-gray-700 mt-2">Size:</p>
                <div className="flex items-center gap-2 mt-2">
                  {selectedProduct.sizes?.map((size) => (
                    <button
                      className={`px-4 py-2 mt-2 rounded border  cursor-pointer ${selectedSize == size ? "bg-black text-white" : "border-gray-200"}`}
                      key={size}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* quantity */}
                <div className="mb-6">
                  <p className="text-gray-600 mb-2">Quantity:</p>
                  <div className="flex items-center gap-4">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded text-lg font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleQuantityUpdate("-")}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded text-lg font-medium cursor-pointer"
                      onClick={() => handleQuantityUpdate("+")}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* add to cart btn */}
                <button
                  className="bg-black text-white py-2 rounded w-full mb-4 cursor-pointer disabled:bg-black/60 disabled:cursor-not-allowed"
                  onClick={handleCartClick}
                  disabled={isBtnDisabled}
                >
                  {isBtnDisabled ? "Adding item..." : "Add to cart"}
                </button>

                {/* charcterstics */}
                <div className="mt-10 text-gray-700 ">
                  <h3 className="text-xl font-bold mb-4">Characterstics:</h3>
                  <table className="w-full text-left text-sm text-gray-600">
                    <tbody>
                      <tr>
                        <td className="py-1">Brand</td>
                        <td className="py-1">{selectedProduct.brand}</td>
                      </tr>
                      <tr>
                        <td className="py-1">Material</td>
                        <td className="py-1">{selectedProduct.material}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* like suggestions */}

        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>

          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
