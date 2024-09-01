import React, { useEffect, useState } from "react";
import GalleryCarousel from "./gallery-carousel";
import { beforeAfterImages } from "../data/index.astro";

function ImageCard({ src, index, images, prefix }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="relative overflow-hidden pb-[400px] lg:pb-[620px]">
        <div
          className="block overflow-hidden absolute inset-0 bg-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            className="w-full h-full object-center object-cover hover:opacity-75 transition-all"
            src={`${src}`}
          />
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 z-[99999]"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-full h-full relative">
            <div
              className="absolute top-10 right-10 text-black text-3xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              X
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <div
                className="w-full h-[70vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <GalleryCarousel
                  images={[...images.slice(index), ...images.slice(0, index)]}
                  prefix={prefix}
                  loop={false}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ImageCard;
