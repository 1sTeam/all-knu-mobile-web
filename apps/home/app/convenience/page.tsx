"use client";

import { queryMap } from "../../hooks/queryMap";
import useMapInitial from "../../hooks/useMapInitial";

const Convenience = () => {
  const { mapRef } = useMapInitial();

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "92vh" }}></div>
  );
};

export default Convenience;
