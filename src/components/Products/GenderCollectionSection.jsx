import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* women's collection  */}
        <div className="flex-1 relative min-h-120">
          <img
            src={womensCollectionImage}
            className="w-full aspect-square object-cover rounded-sm"
            alt="women collection"
          />
          <div className="absolute bottom-8 left-8 rounded-sm bg-white/70 p-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 ">
              Women's Collection
            </h3>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline underline-offset-4"
            >
              Shop now
            </Link>
          </div>
        </div>

        {/* men's collection */}

        <div className="flex-1 relative">
          <img
            src={mensCollectionImage}
            className="w-full aspect-square max-h-175 object-cover rounded-sm"
            alt="women collection"
          />
          <div className="absolute bottom-8 left-8 rounded-sm bg-white/70 p-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 ">
              Men's Collection
            </h3>
            <Link
              to="/collections/all?gender=men"
              className="text-gray-900 underline underline-offset-4"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
