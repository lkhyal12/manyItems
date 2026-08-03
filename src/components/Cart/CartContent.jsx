import { HiTrash } from "react-icons/hi";

const CartContent = () => {
  const cartProducts = [
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
    {
      productId: 7,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=7",
      price: 25,
    },
    {
      productId: 8,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      image: "https://picsum.photos/200?random=8",
      price: 25,
    },
  ];
  return (
    <div>
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between py-4 border-b border-gray-400"
        >
          <div className="flex items-start w-full  ">
            <img
              src={product.image}
              alt=""
              className="h-24 w-20 object-cover rounded mr-4"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>

              <div className="flex items-center mt-2">
                <button className="cursor-pointer rounded px-2 py-1 text-xl font-medium">
                  -
                </button>

                <span className="mx-4 font-medium">{product.quantity}</span>
                <button className="cursor-pointer rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>

            <div className="ml-auto md:mr-5">
              <p className="font-medium mb-3">
                ${product.price.toLocaleString()}
              </p>
              <div>
                <HiTrash className="h-6 w-6 text-red-600 hover:text-red-700 cursor-pointer mt-8" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
