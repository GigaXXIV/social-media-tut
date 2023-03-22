import React from "react";
import Avatar from "./Avatar";
import Card from "./Card";

export default function FriendInfo() {
  return (
    <div className="flex gap-2">
      <Avatar size={undefined} />
      <div>
        <h3 className="font-bold text-xl">Jane Doe</h3>
        <div className="text-sm leading-3">5 Mutual Friends</div>
      </div>
    </div>
  );
}
