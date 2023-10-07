import { Products } from "../common/components";
import { POPULAR_PRODUCTS } from "../common/constants";
const PopularProducts = () => {
  return (
    <div className="flex flex-col gap-5 max-container">
      <h2 className="text-4xl font-bold font-palanquin">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-14">
        <Products items={POPULAR_PRODUCTS} />
      </div>
    </div>
  );
};
export default PopularProducts;
