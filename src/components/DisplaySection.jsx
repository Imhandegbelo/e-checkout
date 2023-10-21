import React, { useState, memo } from "react";
import right_arrow from "../assets/images/icon-next.svg";
import left_arrow from "../assets/images/icon-previous.svg";

const DisplaySection = ({ images, onImageClick }) => {
  const [isActive, setIsActive] = useState(0);
  

  return (
    <div className="flex flex-col w-full md:h-[35rem] md:w-[2y7rem] gap-2 md:w-1/2  relative">
      <div
        className="rounded-2xl"
        onClick={onImageClick}
      >
        <img
          src={images[isActive]}
          alt="product sneaker"
          className="md:rounded-xl h-[90%] lg:cursor-pointer md:h-[27rem]"
        />
      </div>
      <img
        src={left_arrow}
        alt="previous"
        title="previous"
        className="py-3 px-4 rounded-full bg-white absolute left-4 top-[40%] md:hidden cursor-pointer"
        onClick={() =>
          isActive == 0
            ? setIsActive(images.length - 1)
            : setIsActive((isActive - 1) % images.length)
        }
      />
      <img
        src={right_arrow}
        alt="next"
        title="next"
        className="py-3 px-4 rounded-full bg-white absolute right-4 top-[40%] md:hidden cursor-pointer"
        onClick={() => setIsActive((isActive + 1) % images.length)}
      />
      <div className="hidden md:flex justify-between md:gap-2 md:max-w-[27rem] rounded-lg">
        {images.map((image, index) => (
          <div
            className="bg-white "
            onClick={() => setIsActive(index)}
            title={`view-${index + 1}`}
          >
            <img
              src={image}
              alt={`image-${index + 1}`}
              loading="lazy"
              className={`rounded-2xl border-4 cursor-pointer ${
                isActive == index
                  ? "border-orange-500 opacity-30"
                  : "border-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(DisplaySection);
