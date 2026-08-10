import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const placeHolderProducts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Product 4",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "stylish jacket 2",
      },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    price: 300,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "stylish jacket 2",
      },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "stylish jacket 2",
      },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    price: 200,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "stylish jacket 2",
      },
    ],
  },

  {
    id: 8,
    name: "Product 8",
    price: 140,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "stylish jacket 2",
      },
    ],
  },
];
const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sideBarRef = useRef();
  const filterBtnRef = useRef();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  function handleClickOutside(e) {
    if (
      sideBarRef.current &&
      !sideBarRef.current.contains(e.target) &&
      filterBtnRef.current &&
      !filterBtnRef.current.contains(e.target)
    )
      setIsSidebarOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setProducts(placeHolderProducts);
      clearTimeout(timerId);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button
        className="lg:hidden border p-2 flex justify-center items-center w-9/10 mx-auto"
        onClick={toggleSidebar}
        ref={filterBtnRef}
      >
        <FaFilter className="mr-2" />
      </button>

      {/* filter side bar */}
      <div
        ref={sideBarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-100 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* sort options */}
        <SortOptions />

        {/* product grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
