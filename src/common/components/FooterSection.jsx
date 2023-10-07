const FooterSection = ({ title, items = [] }) => (
  <div>
    <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
      {title}
    </h4>
    <ul>
      {items.map(({ name }) => (
        <li
          key={name}
          className="text-white-400 hover:text-slate-gray mt-3 font-montserrat text-base leading-normal"
        >
          {name}
        </li>
      ))}
    </ul>
  </div>
);
export default FooterSection;
