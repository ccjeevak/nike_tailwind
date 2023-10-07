import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <div className="flex items-center gap-10 max-xl:flex-col-reverse justify-between max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain" />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-palanquin font-bold capitalize">
          <span className="text-coral-red">special</span> offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-4">
          <button className="flex items-center justify-center gap-3 capitalize bg-coral-red text-white border border-coral-red rounded-full font-montserrat px-7 py-4 leading-none text-lg">
            <span>shop now </span> <img src={arrowRight} />
          </button>
          <button className=" font-montserrat text-slate-gray capitalize border border-slate-gray rounded-full py-4 px-7 text-lg leading-none">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};
export default SpecialOffer;
