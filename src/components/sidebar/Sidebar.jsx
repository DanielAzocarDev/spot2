import { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ mapZoom }) => {
  const [zoom, setZoom] = useState(0);

  const handleZoom = (e) => {
    console.log(e.target.value);
    setZoom(e.target.value);
    mapZoom((prevState) => prevState + parseInt(zoom));
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Busquedas de spots</h2>
      <select className="sidebar__select" name="" id="">
        <option value="">Street Spot</option>
        <option value="">In mall Spot</option>
        <option value="">In mall island</option>
        <option value="">Other</option>
      </select>
      <select className="sidebar__select" name="" id="">
        <option value="">Short Term</option>
        <option value="">Long Term</option>
        <option value="">Both</option>
      </select>

      <input
        className="sidebar__slider"
        type="range"
        name=""
        id=""
        value={zoom}
        onChange={handleZoom}
      />

      <button className="sidebar__btn">Buscar</button>
    </aside>
  );
};

export default Sidebar;
