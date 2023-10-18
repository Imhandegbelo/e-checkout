import { memo, useState } from "react";
import right_arrow from "../assets/images/icon-next.svg";
import left_arrow from "../assets/images/icon-previous.svg";

function LightBox({ images, lightboxVisible, close }) {
  const [isActive, setIsActive] = useState(0);

  return (
    lightboxVisible && (
      <div className="hidden md:flex items-center justify-center absolute h-screen w-screen left-0 top-0 bg-black/70">
        <div className="flex flex-col gap-3 relative w-1/3 z-10 bg-blackk">
          <button onClick={close} className="self-end">
            <svg
              width="14"
              height="15"
              className="fill-gray-500 hover:fill-orange-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <div className="rounded-2xl">
            <img
              src={images[isActive]}
              alt="product sneaker"
              className="md:rounded-xl h-[96%]"
            />
          </div>
          <img
            src={left_arrow}
            alt="previous"
            title="previous"
            className="hover:fill-orange-500 py-3 px-4 rounded-full bg-white absolute -left-5 top-[40%] cursor-pointer"
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
            className="py-3 px-4 rounded-full bg-white absolute -right-5 top-[40%] cursor-pointer"
            onClick={() => setIsActive((isActive + 1) % images.length)}
          />
          <div className="flex justify-between gap-2 w-10/12 mx-auto rounded-lg">
            {images.map((image, index) => (
              <div
                className="bg-white rounded-lg"
                onClick={() => setIsActive(index)}
                title={`view-${index + 1}`}
                key={`view-${index}`}
              >
                <img
                  src={image}
                  alt={`image-${index + 1}`}
                  loading="lazy"
                  className={`rounded-lg cursor-pointer ${
                    isActive == index
                      ? "border-2 border-orange-900 opacity-50"
                      : ""
                  } hover:opacity-50 h-full`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
export default memo(LightBox);
