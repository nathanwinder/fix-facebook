import React from "react";

export type IconAttributionProps = {
  url: string;
  artist: string;
};

const IconAttribution = ({ url, artist }: IconAttributionProps) => {
  return (
    <div style={{ fontSize: "12px", color: "gray" }}>
      Icons made by{" "}
      <a href={url} title={artist}>
        {artist}
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  );
};

export default IconAttribution;
