import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import cart_icon from "../assets/images/icon-cart.svg";
import menu from "../assets/images/icon-menu.svg";

export default function Navbar({ cart }) {
  const links = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:py-0 sm:px-10 md:px-0 mb-0 md:mb-6 border-b-2 w-full bg-white">
      <div className="w-1/2 flex gap-4 sm:gap-6 items-center">
        <img src={menu} alt="menu" className="h-4 sm:h-6 md:hidden" />
        <img src={logo} alt="logo" className="h-5 sm:h-6" />
        <div className="hidden md:flex gap-4 items-center border-t-4 border-transparent">
          {links.map((link) => (
            <a
              href="#"
              className="text-gray-400 border-b-4 border-transparent py-5 hover:border-b-4 hover:border-orange-400"
              key={`${link}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-3 sm:gap-6 items-center justify-between relative">
        <img
          src={cart_icon}
          alt="cart icon"
          className="h-6 hover:text-black"
          onClick={() => console.log("cart clicked")}
        />
        <span className="bg-orange-500 text-white absolute top-1 md:top-2 text-[0.5rem] px-1 left-4 rounded-full">
          {cart}
        </span>
        <img
          src={avatar}
          alt="avatar"
          className="w-8 sm:w-12 h-8 sm:h-12 border-2 border-transparent rounded-full hover:border-orange-500"
          onClick={() => console.log("avatar clicked")}
        />
      </div>
    </nav>
  );
}
