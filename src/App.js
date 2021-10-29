import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import Nav from "./components/Nav";
import StartGame from "./components/startGame";
import leafletPip from "leaflet-pip";
import L from "leaflet";
import borderData from "./data/border";
let geoJSON = L.geoJSON(borderData)


export default function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [location, setLocation] = useState[0, 0];

  function randomLocation(evt) {
    
    let latMax = 45.005419;
    let latMin = 42.730315;
    let latRange = latMax - latMin + 1;
    let latitude = Math.floor(Math.random(latRange));
    let longMax = -71.510225;
    let longMin = -73.35218;
    let longRange = longMax - longMin + 1;
    let longitude = Math.floor(Math.random(longRange));

    useState.setLocation = [longitude, latitude];
    
    leafletPip.pointInLayer(setLocation, geoJSON, [true])


    
  }

    return (
      <div>
        <button onClick={() => setShow(true)}>About</button>
        <button onClick={() => setShow(true)}>Rules</button>
        <button onClick={() => setShow(true)}>High Score</button>
        <Nav title="About Page" onClose={() => setShow(false)} show={show}>
          <p>This is About body</p>
        </Nav>
        <Map center={center} />
        <StartGame randomLocation={randomLocation} setDisable={setDisable} />
       <button>Guess</button>
        <button>Quit</button>
        <textfield>Latitude</textfield>
        <textfield>Longitude</textfield>
        <textfield>County</textfield>
        <textfield>Town</textfield>
      </div>
    );
  }
  

