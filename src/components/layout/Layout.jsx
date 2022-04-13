import Sidebar from "../sidebar/Sidebar";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <main className="container">
      <Sidebar />
      <div className="map__container">{children}</div>
    </main>
  );
};

export default Layout;
