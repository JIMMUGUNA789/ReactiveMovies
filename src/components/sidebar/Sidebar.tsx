import "./sidebar.css";
import SideBarHeader from "../sidebarHeader/SideBarHeader";
import { AiFillHome } from "react-icons/ai";
import { AiFillCompass } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
const Sidebar = () => {
  return (
    <div className="col-lg-2 pt-2 sidebar">
      <SideBarHeader text="Home">
      <AiFillHome className="sidebarIcon"></AiFillHome>
      </SideBarHeader>
      <SideBarHeader text="Discovery">
        <AiFillCompass className="sidebarIcon"></AiFillCompass>
      </SideBarHeader>
      <SideBarHeader text="Recent">
        <PiArrowsCounterClockwiseBold className="sidebarIcon"></PiArrowsCounterClockwiseBold>
      </SideBarHeader>
      <SideBarHeader text="Coming Soon">
        <AiFillClockCircle className="sidebarIcon"></AiFillClockCircle>
      </SideBarHeader>

      <hr />
    </div>
  );
};

export default Sidebar;
