import logo from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-7">
      <img className="h-7 lg:h-10" src={logo} alt="logo" />
      <nav className="hidden lg:flex items-center gap-9 [&>*:hover]:text-softRed">
        <a href="/">Home</a>
        <a href="/">New</a>
        <a href="/">Popular</a>
        <a href="/">Trending</a>
        <a href="/">Categories</a>
      </nav>
      <button className="lg:hidden" aria-label="menu">
        <img src={menuIcon} alt="" />
      </button>
    </header>
  );
};

export default Header;
