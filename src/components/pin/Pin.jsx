import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupcontainer">
          <img src={item.img}></img>
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>Bedrooms: {item.bedroom}</span>
            <b>Price: ${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
