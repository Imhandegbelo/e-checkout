import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import product1 from "./assets/images/image-product-1.jpg";
import product1_thumb from "./assets/images/image-product-1-thumbnail.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product2_thumb from "./assets/images/image-product-2-thumbnail.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product3_thumb from "./assets/images/image-product-3-thumbnail.jpg";
import product4 from "./assets/images/image-product-4.jpg";
import product4_thumb from "./assets/images/image-product-4-thumbnail.jpg";
import SideNav from "./components/SideNav";
// import LightBox from "./components/LightBox";

function App() {
  const [cart, setCart] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const links = ["Collections", "Men", "Women", "About", "Contact"];

  const image_thumbs = [
    product1_thumb,
    product2_thumb,
    product3_thumb,
    product4_thumb,
  ];
  const images = [product1, product2, product3, product4];

  function handleSubmit() {
    setCart(quantity);
  }
  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    quantity == 0 ? null : setQuantity(quantity - 1);
  }
  function handleMenuClick() {
    setIsNavOpen(!isNavOpen);
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
          image_thumbs={image_thumbs}
          images={images}
        />
      </div>
      {/* <div className="h-[80%] w-[60%] absolute z-10 bg-transparent p-4">
        <DisplaySection thumbs={image_thumbs} images={images} />
      </div> */}
      {isNavOpen && <SideNav links={links} onclose={handleMenuClick} />}
    </div>
  );
}

export default App;
