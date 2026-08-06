import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const newArivals = [
    {
      _id: 1,
      name: "stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 2,
      name: "stylish jeans",
      price: 140,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 3,
      name: "stylish jacket",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 4,
      name: "stylish shirt",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 5,
      name: "stylish jacket",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 6,
      name: "stylish jacket",
      price: 88,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 7,
      name: "stylish Boots",
      price: 85,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 8,
      name: "stylish cardigan",
      price: 55,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  function handleMouseDown(e) {
    const offsetLeft = scrollRef.current?.offsetLeft;
    console.log(offsetLeft);
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current?.offsetLeft);
    setScrollLeft(scrollRef.current?.scrollLeft);
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current?.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }
  function handleMouseUp() {
    setIsDragging(false);
  }
  function handleMouseLeave() {
    setIsDragging(false);
  }
  // updateScrollBtns function

  function updateScrollBtns() {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container?.scrollLeft || 0;

      const scrollWidth = container.scrollWidth;

      const clientWidth = container.clientWidth;

      const isRightScrollable = leftScroll + clientWidth >= scrollWidth - 1;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(!isRightScrollable);
    }
  }

  function scrollFun(dir) {
    const scrollAmount = dir === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;
    container.addEventListener("scroll", updateScrollBtns);
    updateScrollBtns();
    // return container.removeEventListener("scroll", updateScrollBtns);
  }, []);
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="font-bold text-3xl mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8 ">
          Discover the latest styles straight off the runway, freshly added to
          keep you wardrobe on the cutting edge of fashion
        </p>

        {/* scroll btns */}
        <div className="absolute right-0 -bottom-9.5 flex space-x-2 ">
          <button
            onClick={() => scrollFun("left")}
            disabled={!canScrollLeft}
            className="p-2 rounded border bg-white text-black cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scrollFun("right")}
            disabled={!canScrollRight}
            className="p-2 rounded border bg-white text-black cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable content */}

      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="container overflow-x-auto mx-auto flex space-x-6 relative mt-10"
        ref={scrollRef}
      >
        {newArivals.map((product) => (
          <div
            key={product._id}
            className="min-w-full sm:min-w-1/2 lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-125 object-cover rounded-lg "
              draggable="false"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
