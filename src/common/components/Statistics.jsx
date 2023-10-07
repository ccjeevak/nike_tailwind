const Statistics = ({ items = [] }) => (
  <div className="mt-20 flex gap-16 flex-wrap">
    {items.map(({ id, label, value }) => (
      <div key={id}>
        <p className="text-4xl font-palanquin font-bold">{value}</p>
        <p className="font-montserrat text-slate-gray leading-7">{label}</p>
      </div>
    ))}
  </div>
);
export default Statistics;
