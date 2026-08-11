import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ handleDrawerToggle, drawerOpen, setDrawerOpen }) => {
  const navigate = useNavigate();
  function handleCheckout() {
    setDrawerOpen(false);
    navigate("/checkout");
  }
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform transition-transform duartion-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={handleDrawerToggle}>
          <IoMdClose className="size-6" />
        </button>
      </div>

      {/* Cart content with scrollable area */}

      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 ">Your Cart</h2>
        {/* components for cart content */}
        <CartContent />
      </div>

      {/* checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-950 transition cursor-pointer"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, Taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
