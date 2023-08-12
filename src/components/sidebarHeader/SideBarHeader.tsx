import { ReactNode } from "react";
import "./sidebarHeader.css";
import { AiFillHome } from "react-icons/ai";

interface SideBarHeaderProps {
    children: ReactNode;
    text: string;
}
const SideBarHeader = ({children, text}:SideBarHeaderProps) => {
  return (
    <div className="header d-flex justify-content-center">
      <p>
        
     {children}{text}
      </p>
     
    </div>
  );
};

export default SideBarHeader;
