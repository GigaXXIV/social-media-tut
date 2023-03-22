import React from "react";

export default function Avatar({ size }) {
  let width = "w-16";
  if (size === "big") {
    width = "w-36";
  }

  return (
    <div className={`${width} object-fit mb-1 overflow-hidden rounded-full`}>
      <img src="https://i.imgur.com/jjbOb7E.png" alt="" />
    </div>
  );
}
