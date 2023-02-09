import React, { useState } from "react";
import "./gallery.css";
import { LeftArrow } from "./leftArrow.jsx";
import { RightArrow } from "./rightArrow.jsx";
import { GallerySlider } from "./gallerySlider.jsx";

let sectionIndex = 0;

export default function Gallery({ pictures }) {
  const [currentIndex, setIndex] = useState(0);
  const track = document.querySelector(".gallery__slider_container");

  const showNext = () => {
    sectionIndex++;

    if (sectionIndex < pictures.length - 2) {
      track.style.transform = `translateX(${(sectionIndex - 1) * -273}px)`;
    }
    if (pictures.length - sectionIndex === 2) {
      track.style.transform = `translateX(${(sectionIndex - 2) * -273}px)`;
    }
    if (pictures.length - sectionIndex <= 1) {
      track.style.transform = `translateX(${(sectionIndex - 3) * -273}px)`;
    }

    setIndex(currentIndex + 1);
  };

  const showPrev = () => {
    sectionIndex--;

    if (sectionIndex === 0) {
      track.style.transform = `translateX(${sectionIndex * -273}px)`;
    }
    if (sectionIndex === 1) {
      track.style.transform = `translateX(${(sectionIndex - 1) * -273}px)`;
    }
    if (sectionIndex >= 2 && sectionIndex <= pictures.length - 2) {
      track.style.transform = `translateX(${(sectionIndex - 2) * -273}px)`;
    }

    setIndex(currentIndex - 1);
  };

  const setSectionIndex = (index) => {
    setIndex(index);
    sectionIndex = index;
  };

  return (
    <div className="gallery">
      <div className="gallery__main">
        <LeftArrow
          currentIndex={currentIndex}
          pictures={pictures}
          onClick={showPrev}
        />

        <img
          className="gallery__main_img"
          src={pictures[currentIndex]}
          alt="First view with the property"
        />

        <RightArrow
          currentIndex={currentIndex}
          pictures={pictures}
          onClick={showNext}
        />
      </div>
      <GallerySlider
        currentIndex={currentIndex}
        pictures={pictures}
        onChange={setSectionIndex}
      />
    </div>
  );
}
