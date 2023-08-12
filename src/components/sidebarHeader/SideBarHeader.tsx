import { ReactNode } from "react";
import "./sidebarHeader.css";

interface SideBarHeaderProps {
    children: ReactNode;
    text: string;
}
const SideBarHeader = ({children, text}:SideBarHeaderProps) => {
  return (
    <div className="header d-flex justify-content-center">
      <p className="headerParagraph">
        
     {children}<span className="">{text}</span>
      </p>
     
    </div>
  );
};

export default SideBarHeader;
