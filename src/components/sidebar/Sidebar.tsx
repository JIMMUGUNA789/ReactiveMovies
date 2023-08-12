// styles
import "./sidebar.css";
// components
import SideBarHeader from "../sidebarHeader";
import SidebarSectionHeader from "../sidebarSectionHeader";
// icons
import { AiFillHome } from "react-icons/ai";
import { AiFillCompass } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="col-lg-2  sidebar">
      <SidebarSectionHeader text="MAIN" />
      <SideBarHeader text="Home">
        <AiFillHome className="sidebarIcon"></AiFillHome>
      </SideBarHeader>
      <SideBarHeader text="Discovery">
        <AiFillCompass className="sidebarIcon"></AiFillCompass>
      </SideBarHeader>
      <SideBarHeader text="Recent">
        <PiArrowsCounterClockwiseBold className="sidebarIcon"></PiArrowsCounterClockwiseBold>
      </SideBarHeader>
      <SideBarHeader text="Top Rated">
        <AiFillStar className="sidebarIcon"></AiFillStar>
      </SideBarHeader>
      <SideBarHeader text="Coming Soon">
        <AiFillClockCircle className="sidebarIcon"></AiFillClockCircle>
      </SideBarHeader>

      <hr />
      <SidebarSectionHeader text="GENRE" />
      <SideBarHeader text="Action">
        <img src="../action.jpg" alt="404" className="sidebarImage" />
      </SideBarHeader>
      <SideBarHeader text="Animation">
        <img src="../animation.jpeg" alt="404" className="sidebarImage" />
      </SideBarHeader>
      <SideBarHeader text="Drama">
        <img src="../drama.jpeg" alt="404" className="sidebarImage" />
      </SideBarHeader>
      <SideBarHeader text="Horror">
        <img src="../horror.jpeg" alt="404" className="sidebarImage" />
      </SideBarHeader>
      <SideBarHeader text="Comedy">
        <img src="../comedy.jpeg" alt="404" className="sidebarImage" />
      </SideBarHeader>
      <SideBarHeader text="Romance">
        <img src="../romance.jpg" alt="404" className="sidebarImage" />
      </SideBarHeader>
      <SideBarHeader text="Mystery">
        <img src="../mystery.jpeg" alt="404" className="sidebarImage" />
      </SideBarHeader>

      <hr />
      <SideBarHeader text="Settings">

      </SideBarHeader>
      <SideBarHeader text="Help">

      </SideBarHeader>
    </div>
  );
};

export default Sidebar;
