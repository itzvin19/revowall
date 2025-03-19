import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const position: L.LatLngExpression = [-12.0564, -77.0428]; // Coordenadas de Lima, Perú

const MapComponent: React.FC = () => {
	return (
		<MapContainer
			center={position}
			zoom={13}
			className="h-[250px] xl:h-[350px] w-full z-50"
			scrollWheelZoom={true}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position}>
				<Popup>RevoWall</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MapComponent;
