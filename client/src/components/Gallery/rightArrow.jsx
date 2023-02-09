import React from "react";
import { ReactComponent as Svg } from "./rightArrow.svg";

export function RightArrow({ pictures, currentIndex, onClick }) {
  const lastPhotoIndex = pictures.length - currentIndex;

  if (lastPhotoIndex <= 1) {
    return null;
  }
  return (
    <Svg
      role="test"
      onClick={() => onClick(currentIndex + 1)}
      className="gallery__arrow-right"
    />
  );
}
