import React from "react";
import { ReactComponent as Svg } from "./leftArrow.svg";

export function LeftArrow({ currentIndex, onClick }) {
  if (currentIndex <= 0) {
    return null;
  }
  return (
    <Svg
      onClick={() => onClick(currentIndex - 1)}
      className="gallery__arrow-left"
    />
  );
}
