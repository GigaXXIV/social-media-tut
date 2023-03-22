import React from "react";

export default function Card({ children, noPadding, roundedCorners, shadow }) {
  let classes = "bg-white rounded-xl mb-5";
  if (!noPadding) {
    classes += " p-4";
  }
  if (roundedCorners) {
    classes += " rounded-3xl";
  }
  if (shadow) {
    classes += " shadow-md shadow-gray-300";
  }
  return <div className={classes}>{children}</div>;
}
