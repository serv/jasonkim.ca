import React from "react";

export default function Project({ url, name, description, image }) {
  return (
    <div className="text-gray-900 pb-4">
      <a className="pb-2 text-lg hover:underline" href={url}>
        {name}
      </a>

      <a href={url}>
        <img className="" src={image} />
      </a>
      <div className="text-sm">{description} </div>
    </div>
  );
}
