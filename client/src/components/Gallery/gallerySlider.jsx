import React from "react";

export function GallerySliderItem({ picture, current, onClick }) {
  const className = ({ current }) => {
    return current
      ? "gallery__slider_img gallery__slider_img_active"
      : "gallery__slider_img gallery__slider_img_disabled";
  };

  return (
    <img
      className={className({ current })}
      src={picture}
      alt="Slider with apartment's images"
      onClick={onClick}
    />
  );
}

export function GallerySlider({ pictures, currentIndex, onChange }) {
  return (
    <div className="gallery__slider">
      <div className="gallery__slider_container">
        {pictures.map((picture, index) => (
          <GallerySliderItem
            key={picture}
            picture={picture}
            current={currentIndex === index}
            onClick={() => onChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
