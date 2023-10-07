import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center max-container">
      <div>
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          we provide you <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <button className="bg-coral-red rounded-full px-7 py-4 text-white font-montserrat text-lg border-coral-red border leading-none">
            View details
          </button>
        </div>
      </div>
      <div className=" flex-1 flex items-center justify-center">
        <img src={shoe8} width="570" height="522" className="object-contain" />
      </div>
    </div>
  );
};
export default SuperQuality;
