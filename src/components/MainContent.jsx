import React, { useState } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import product1_thumb from "../assets/images/image-product-1-thumbnail.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product2_thumb from "../assets/images/image-product-2-thumbnail.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product3_thumb from "../assets/images/image-product-3-thumbnail.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import product4_thumb from "../assets/images/image-product-4-thumbnail.jpg";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";

import cart from "../assets/images/icon-cart.svg";
import Button from "./Button";

export default function MainContent() {
  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const image_thumbs = [
    product1_thumb,
    product2_thumb,
    product3_thumb,
    product4_thumb,
  ];
  const images = [product1, product2, product3, product4];

  return (
    <div className="flex gap-10 justify-between font-sans">
      <div className="w-1/2 px-10">
        <div className="my-6 rounded-2xl">
          <img
            src={images[isActive]}
            alt="product sneaker"
            className="rounded-xl"
          />
        </div>
        <div className="flex justify-between gap-6 rounded-lg">
          {image_thumbs.map((image, index) => (
            <div
              className="bg-white hover:opacity-70"
              onClick={() => setIsActive(index)}
            >
              <img
                src={image}
                alt={`image-${index + 1}`}
                className={`rounded-2xl border-4 ${
                  isActive == index
                    ? "border-orange-500 opacity-70"
                    : "border-transparent"
                } border-orange-k500`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-10 text-left w-1/2">
        <div>
          <h1 className="text-orange-400 text-base font-bold">
            SNEAKER COMPANY
          </h1>
          <h2 className="font-bold text-4xl">Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <p className="inline-flex align-center text-3xl font-bold">
            $125.00{" "}
            <span className="bg-orange-100 text-orange-400 text-lg p-1 ml-2 rounded">
              50%
            </span>
          </p>
          <p className="text-[] font-bold">$250</p>
          <div className="flex flex-col w-full border-2 border-black md:flex-row gap-4">
            <div className="flex w-full basis-2/5 md:w-2/6 border">
              <button
                className="inline-flex justify-center items-center rounded-l py-2 px-4 border-y border-l w-1/4"
                onClick={() => console.log("minus")}
              >
                <img src={minus} alt="" />
              </button>
              <input
                type="text"
                disabled
                value={quantity}
                className="text-center w-full bg-cyan-100 border-y"
              />
              <button
                className="inline-flex justify-center items-center rounded-r py-2 px-4 border-y border-r"
                onClick={() => console.log("plus")}
              >
                <img src={plus} alt="" />
              </button>
            </div>
            <div className="w-full basis-3/5 md:w-4/6">
              <Button text="Add to cart" img={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
