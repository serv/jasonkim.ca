import React from "react";

export default function Project({ url, name, description, image }) {
  return (
    <React.Fragment>
      <a className="" href={url}>
        {name}
      </a>

      <a href={url}>
        <img className="" src={image} />
      </a>
      {description}
    </React.Fragment>
  );
}
