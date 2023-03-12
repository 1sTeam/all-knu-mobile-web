import { useEffect, useRef, useState } from "react";
import { queryMap } from "./queryMap";

interface Location {
  lattitude: number;
  longtitude: number;
}

const useMapInitial = () => {
  const mapRef = useRef<HTMLDivElement | null | any>(null);
  const [location, setLocation] = useState<Location>({
    lattitude: 37.27574,
    longtitude: 127.13249,
  });
  const { data = [] } = queryMap();

  useEffect(() => {
    const { lattitude, longtitude } = location;
    const mapScreenLocation = new naver.maps.LatLng(lattitude, longtitude);

    const map = (mapRef.current = new naver.maps.Map("map", {
      center: mapScreenLocation,
      zoomControl: true, // 줌 설정
      zoom: 15,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    }));

    let markerListenerData: any[] = [];
    if (data.length > 0) {
      console.log("data");
      data.map(({ location: { lat, lon } }, index) => {
        const marker = (mapRef.current = new naver.maps.Marker({
          position: new naver.maps.LatLng(lat, lon),
          map,
        }));

        markerListenerData[index] = mapRef.current =
          naver.maps.Event.addListener(marker, "click", () =>
            console.log("clicked")
          );
      });
    }

    return () => {
      markerListenerData.map((markerListener) =>
        naver.maps.Event.removeListener(markerListener)
      );
    };
  }, [location, data]);

  return { mapRef, location, setLocation };
};

export default useMapInitial;
