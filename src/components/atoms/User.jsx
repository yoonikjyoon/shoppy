import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div>
      <img src={photoURL} alt={displayName} referrerPolicy="no-referrer" />
      <span>{displayName}</span>
    </div>
  );
}
