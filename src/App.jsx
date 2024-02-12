import CyberTruck from "./pages/Cybertruck";
import Model3 from "./pages/Model3";
import ModelS from "./pages/ModelS";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import DemoDrive from "./pages/DemoDrive";
import SolarPanels from "./pages/Solarpanels";
import SolarRoof from "./pages/SolarRoof";
import PowerWall from "./pages/PowerWall";
import Accessories from "./pages/Accessories";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ModelY />
      <Model3 />
      <ModelX />
      <ModelS />
      <CyberTruck />
      <DemoDrive />
      <SolarPanels />
      <SolarRoof />
      <PowerWall />
      <Accessories />
      <Footer />
    </>
  );
}

export default App;
