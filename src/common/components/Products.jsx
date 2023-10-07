import { star } from "../../assets/icons";

const Products = ({ items = [] }) =>
  items.map(({ imgURL, name, price }) => (
    <div key={name} className="max-sm:m-auto">
      <img src={imgURL} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex gap-3">
        <img src={star} width="24" height="24" />
        <span className="font-montserrat text-xl text-slate-gray">(4.5)</span>
      </div>
      <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt-2 text-coral-red text-2xl font-montserrat font-semibold">
        {price}
      </p>
    </div>
  ));
export default Products;
