import Sidebar from "../sidebar/Sidebar";

import "./Layout.css";

const Layout = ({ children, mapZoom }) => {
  return (
    <main className="container">
      <Sidebar mapZoom={mapZoom} />
      <div className="map__container">{children}</div>
    </main>
  );
};

export default Layout;
