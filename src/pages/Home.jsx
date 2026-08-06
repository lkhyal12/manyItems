import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeatureSection from "../components/Products/FeatureSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductGrid from "../components/Products/ProductGrid";
import ProductsDetails from "../components/Products/ProductsDetails";
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
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* best seller */}
      <h2 className="text-3xl text-center font-bold mb-4 mt-13">Best Seller</h2>
      <ProductsDetails />

      {/* top wears fro women */}
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>

        <ProductGrid products={placeHolderProducts} />
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
