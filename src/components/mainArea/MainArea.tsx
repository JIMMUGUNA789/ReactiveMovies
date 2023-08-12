import "./mainArea.css";
import { ReactNode } from "react";
import SiteHeader from "../siteHeader";
import TopMenu from "../topMenu";

interface MainAreaProps {
  children: ReactNode;
}
const MainArea = ({ children }: MainAreaProps) => {
  return <div className="col-lg-10 mainArea">
    <div className="row">
      <SiteHeader></SiteHeader>
      
    </div>
    <div className="row ">

      <TopMenu></TopMenu>
      <hr className="mainAreaSeparator"/>

    </div>
    <div className="row">
      <input type="text" placeholder="search"  />

    </div>

    
    {children}</div>;
};

export default MainArea;
