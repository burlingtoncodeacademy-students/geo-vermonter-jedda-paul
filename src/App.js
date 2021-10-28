import "./App.css";
import { useState } from "react";
import Modal from "./components/Nav.js";
import Map from "./components/Map.js";
export default function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>About</button>

      {/* <button>High-Score</button>
      <button>Rules</button>   */}
      <Modal show={show} />
      <Map center={center} />
    </div>
  );
}

//----------wire frame---------------------
//map
//
//nav
//
//info
//
//lat,long,county,town text field
//
//buttons for movement N,E,S,W
//
//buttons for start, guess, quit
//
//score field
