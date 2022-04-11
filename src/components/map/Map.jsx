import { useEffect, useRef, useState } from "react";

const Map = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return (
    <div
      ref={ref}
      id="map"
      style={{
        height: "100vh",
      }}
    />
  );
};

export default Map;
