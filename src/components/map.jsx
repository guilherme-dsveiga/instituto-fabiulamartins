import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { lat, lng } from "../data/index.astro";
import * as L from "leaflet";

function Map() {
  const position = [lat, lng];

  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const icon = new LeafIcon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      className="h-[50vh] relative"
      center={position}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[lat, lng]} icon={icon}></Marker>
      <div className="absolute inset-0 z-[999]">
        <div className="relative z-10 container mx-auto py-12 lg:py-14 xl:py-20">
          <div className="flex flex-row w-full md:flex-row-reverse">
            <div className="relative z-10 w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl bg-white">
              <div>
                <h2 className="lg:text-3xl text-2xl font-merriweather mb-4">
                  Instituto Fabíula Martins
                </h2>
                <pre className="lg:text-lg text-base font-mulish">
                  Av ana costa 146, sala 1908
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MapContainer>
  );
}

export default Map;
