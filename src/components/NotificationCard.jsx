import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

export default function NotificationCard() {
  return (
    <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
      <Link href="/profile">
        <Avatar size={undefined} />
      </Link>
      <div>
        <Link href="/profile">
          <span className="font-bold"> John Doe </span>{" "}
        </Link>{" "}
        liked your{" "}
        <Link href="/profile/photos" className="font-bold text-socialBlue">
          {" "}
          photo{" "}
        </Link>
      </div>
    </div>
  );
}
