import React from "react";
import "./description.css";

export function Description({ children }) {
  return (
    <div className="text_description">
      <p> {children} </p>
    </div>
  );
}
