import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  // const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(0);

  return (
    <div className="flex justify-center ">
      <div className="max-w-[1440px] md:px-8 lg:px-24 h-screen">
        <Navbar total={cart} />
        <MainContent cart={cart} />
      </div>
    </div>
  );
}

export default App;
