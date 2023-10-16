import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] px-24">
        <Navbar />
        <MainContent />
        
      </div>
    </div>
  );
}

export default App;
