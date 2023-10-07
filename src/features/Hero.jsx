import { arrowRight } from "../assets/icons";
import { ShoePreview, Statistics } from "../common/components";
import {  STATISTICS } from "../common/constants";
const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col xl:flex-row gap-10 justify-center max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap xl:bg-white pr-10 relative  z-10">
            The New Arrival
          </span>
          <br /> <span className="text-coral-red inline-block mt-3">Nike</span>{" "}
          <span>Shoes</span>
        </h1>
        <p className="font-montserrat mt-6 mb-14 text-slate-gray leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="bg-coral-red text-white py-4 px-7 rounded-full text-lg leading-none font-montserrat flex items-center justify-center gap-2">
          Shop now
          <img
            src={arrowRight}
            alt="arrow right icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
          />
        </button>
        <Statistics items={STATISTICS} />
      </div>
      <ShoePreview />
    </div>
  );
};
export default Hero;
