import React from "react";
import NavigationCard from "./NavigationCard";

export default function Layout({ children, hideNavigation }) {
  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-3/4";
  }
  return (
    <div className="z-0 md:flex mt-4 max-w-4xl mx-auto gap-6">
      {!hideNavigation && (
        <div className="z-10 fixed bottom-0 w-full -mb-5 md:mb-4 md:static md:w-1/4  ">
          <NavigationCard />
        </div>
      )}
      <div className={rightColumnClasses}>{children}</div>
    </div>
  );
}
