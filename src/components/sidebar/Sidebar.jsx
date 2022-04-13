import { useState } from "react";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
//Router
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link className="sidebar__Link" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
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

      <input className="sidebar__slider" type="range" name="" id="" />

      <button className="sidebar__btn">Buscar</button>
    </aside>
  );
};

export default Sidebar;
