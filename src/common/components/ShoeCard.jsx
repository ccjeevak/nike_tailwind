const ShoeCard = ({ src, onClick, isSelected }) => (
  <div
    className={`rounded-xl cursor-pointer ${
      isSelected && `border-2 border-coral-red`
    } p-4 bg-card bg-cover bg-center`}
  >
    <img
      alt="Shoes 1"
      src={src}
      width={127}
      height={103.34}
      onClick={onClick}
    />
  </div>
);
export default ShoeCard;
