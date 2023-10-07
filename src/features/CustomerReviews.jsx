import { star } from "../assets/icons";
import { REVIEWS } from "../common/constants";

const CustomerReviews = () => {
  return (
    <div className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center ">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="mt-4 max-w-lg text-center m-auto info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex max-lg:flex-col gap-14 justify-evenly">
        {REVIEWS.map(({ customerName, feedback, imgURL, rating }) => (
          <div key={customerName} className="flex flex-col items-center">
            <img
              src={imgURL}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
            <div className="mt-3 flex gap-3">
              <img
                src={star}
                width={24}
                height={24}
                className="object-contain"
              />
              <p className="text-xl font-montserrat text-slate-gray">
                ({rating})
              </p>
            </div>
            <h3 className="mt-1 text-3xl font-bold font-palanquin">
              {customerName}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerReviews;
