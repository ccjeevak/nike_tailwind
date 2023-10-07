import { Fragment, useState } from "react";
import { SHOES } from "../constants";
import ShoeCard from "./ShoeCard";

const ShoePreview = () => {
  const [shoe1] = SHOES;
  const { bigShoe } = shoe1;
  const [selectedShoe, setSelectedShoe] = useState(bigShoe);
  return (
    <div
      className=" flex-1 flex justify-center items-center relative 
      xl:min-h-screen
      bg-hero bg-center bg-cover bg-primary max-xl:py-40"
    >
      <img
        src={selectedShoe}
        width={610}
        height={502}
        className="object-contain relative"
      />
      <div className="flex gap-4 sm:gap-6 max-sm:px-6  absolute -bottom-[5%] w-full justify-center items-center">
        {SHOES.map(({ id, thumbnail, bigShoe }) => (
          <Fragment key={id}>
            <ShoeCard
              src={thumbnail}
              isSelected={selectedShoe === bigShoe}
              onClick={() => setSelectedShoe(bigShoe)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default ShoePreview;
