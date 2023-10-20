import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import cart_icon from "../assets/images/icon-cart.svg";
import menu from "../assets/images/icon-menu.svg";
import delete_icon from "../assets/images/icon-delete.svg";
import image_thumb from "../assets/images/image-product-1-thumbnail.jpg";
import { memo, useState } from "react";
import Button from "./Button";

const Navbar = ({ total, menuClicked, links, empty_cart }) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:py-0 sm:px-10 md:px-0 mb-0 md:mb-6 border-b-2 w-full bg-white relative">
      <div className="w-1/2 flex gap-4 sm:gap-6 items-center">
        <img
          src={menu}
          alt="menu"
          className="h-4 sm:h-6 md:hidden cursor-pointer"
          onClick={menuClicked}
        />
        <img src={logo} alt="logo" className="h-5 sm:h-6" />
        <div className="hidden md:flex gap-4 items-center border-t-4 border-transparent">
          {links.map((link) => (
            <a
              href="#"
              className="text-gray-400 border-y-4 border-transparent py-5 hover:border-b-4 hover:border-b-orange-400"
              key={link}
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
          className="h-6 hover:text-black cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        />
        <span className="bg-orange-500 text-white font-bold absolute top-1 md:top-2 text-[0.55rem] px-1 left-4 rounded-full">
          {total == 0 ? "" : total}
        </span>
        <img
          src={avatar}
          alt="avatar"
          className="w-8 sm:w-12 h-8 sm:h-12 border-2 border-transparent rounded-full hover:border-orange-500"
        />
      </div>
      {cartOpen && (
        <div className="w-[90%] sm:w-[92%] md:shadow-2xl md:w-[22rem] flex flex-col justify-between h-60 bg-white absolute top-20 sm:top-24 md:-right-12 z-10 rounded-lg">
          <div className="p-3 md:px-6 border-b">
            <h1 className="font-bold text-lg">Cart</h1>
          </div>
          <div className="p-3 flex justify-center items-center rounded-b-lg h-full">
            {total == 0 ? (
              <h1 className="font-bold text-gray-500">Your cart is empty</h1>
            ) : (
              <div className="flex flex-col gap-7 w-full md:px-4">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-4 items-center">
                    <img
                      src={image_thumb}
                      alt="image thumb"
                      className="w-12 sm:w-16 md:w-12 rounded"
                    />
                    <div className="text-gray-500 text-sm">
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 x {total}
                        {"  "} ={" "}
                        <span className="text-black font-bold">
                          ${(125 * total).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    src={delete_icon}
                    alt="delete icon"
                    className="sm:w-8 md:w-4 cursor-pointer"
                    onClick={empty_cart}
                  />
                </div>
                <Button
                  text="Checkout"
                  title="Checkout"
                  shadow={false}
                  onclick={() => console.log("Checkout clicked")}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default memo(Navbar);
