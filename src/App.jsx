import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import product1 from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";
import SideNav from "./components/SideNav";


function App() {
  const [cart, setCart] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  const images = [product1, product2, product3, product4];

  function handleSubmit() {
    setCart(quantity);
    setQuantity(0);
  }
  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    quantity == 0 ? null : setQuantity(quantity - 1);
  }
  function handleMenuClick() {
    setIsNavOpen(true);
  }
  function emptyCart() {
    setCart(0);
  }

  return (
    <div className="flex justify-center relative">
      <div className="max-w-[1440px] md:px-8 lg:px-24 h-screen">
        <Navbar
          total={cart}
          menuClicked={handleMenuClick}
          links={links}
          empty_cart={emptyCart}
        />
        <MainContent
          quantity={quantity}
          onclick={handleSubmit}
          increment={handleIncrement}
          decrement={handleDecrement}
          images={images}
        />
      </div>
      {isNavOpen && <SideNav links={links} onclose={()=>setIsNavOpen(false)} />}
    </div>
  );
}

export default App;
