import { SERVICES } from "../common/constants";

const Services = () => {
  return (
    <div className="flex justify-center flex-wrap gap-9 max-container">
      {SERVICES.map(({imgURL, label , subtext}) => (
        <div key={label} className="flex-1 sm:w-[350px] sm:min-w-[350px] px-10 py-16 rounded-[20px] shadow-3xl">
          <div className="bg-coral-red w-11 h-11 rounded-full flex items-center justify-center">
            <img
              src={imgURL}
              width={24}
              height={24}
              alt="Free Shipping"
              title="Free Shipping"
            />
          </div>
          <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
            {label}
          </h3>
          <p className="mt-3 font-montserrat text-slate-gray text-lg leading-normal">
            {subtext}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Services;
