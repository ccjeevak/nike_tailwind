import { hamburger } from "../../assets/icons";
import { headerLogo } from "../../assets/images";

const Nav = ({ menu = []}) => {
  return (
    <header className="px-8 sm:px-16 py-8 absolute w-full z-10">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} />
        </a>

        {menu.length > 0 && (
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {menu.map(({ id, label, to }) => (
              <li
                key={id}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                <a href={to}> {label}</a>
              </li>
            ))}
          </ul>
        )}

        <a href="/" className="font-medium font-montserrat max-lg:hidden">
          Sign in / Explore now
        </a>
        <a href="/" className="max-lg:block hidden">
          <img src={hamburger} width={25} height={25} />
        </a>
      </nav>
    </header>
  );
};
export default Nav;
