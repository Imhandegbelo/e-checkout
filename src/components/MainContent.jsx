import React, { useState } from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import cart_icon from "../assets/images/icon-cart.svg";
import Button from "./Button";
import DisplaySection from "./DisplaySection";
import LightBox from "./LightBox";

export default function MainContent({
  onclick,
  quantity,
  increment,
  decrement,
  images,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function handleImageClick() {
    setLightboxOpen(!lightboxOpen);
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-6 lg:gap-8 font-sans md:h-[80vh]">
      <DisplaySection images={images} onImageClick={handleImageClick} />
      <div className="flex lg:items-centher md:justify-center p-6 md:p-0 lg:px-10 lg:pt-10 text-left w-full md:w-1/2">
        <div className="">
          <h1 className="text-orange-400 md:text-base font-bold md:py-4">
            SNEAKER COMPANY
          </h1>
          <h2 className="font-bold text-3xl md:text-5xl py-2 md:py-0 lg:my-4">
            Fall Limited Edition Sneakers
          </h2>
          <p className="md:pt-2 md:mb-3 leading-6 text-gray-400">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex md:flex-col justify-between items-center py-2 md:py-0 md:items-start lg:itesms-center">
            <p className="inline-flex align-center text-3xl font-bold py-2">
              $125.00{" "}
              <span
                title="discount"
                className="bg-orange-100 text-orange-400 text-lg p-1 ml-4 rounded"
              >
                50%
              </span>
            </p>
            <p className="text-lg text-gray-400 line-through font-bold">
              $250.00
            </p>
          </div>
          <div className="flex flex-col w-full md:flex-row gap-4 md:mt-4 lg:mt-8">
            <div className="flex w-full md:basis-2/5 lg:w-2/6">
              <button
                disabled={quantity <= 0}
                className="inline-flex justify-center items-center rounded-l-lg py-2 px-4 md:px-0 lg:px-2 md:w-1/3 bg-gray-200 hover:bg-gray-300"
                onClick={decrement}
              >
                <img src={minus} alt="remove" className="hover:opacity-50" />
              </button>
              <input
                type="text"
                title={quantity <= 1 ? `${quantity} unit` : `${quantity} units`}
                disabled
                value={quantity}
                className="text-center w-full text-xl md:text-base py-2 border-y bg-gray-200 font-bold"
              />
              <button
                className="inline-flex justify-center items-center rounded-r-lg py-2 px-4 md:px-0 lg:px-2 md:w-1/3 bg-gray-200 hover:bg-gray-300"
                onClick={increment}
              >
                <img src={plus} alt="add" className="hover:opacity-50" />
              </button>
            </div>
            <div className="w-full md:basis-3/5 lg:w-4/6">
              <Button
                disabled={quantity < 1}
                title="Add to cart"
                text="Add to cart"
                img={cart_icon}
                shadow
                onclick={onclick}
              />
            </div>
          </div>
        </div>
      </div>
      <LightBox
        images={images}
        lightboxVisible={lightboxOpen}
        close={handleImageClick}
      />
    </div>
  );
}
