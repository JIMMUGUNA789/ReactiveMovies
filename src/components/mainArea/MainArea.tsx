import "./mainArea.css";
import { ReactNode } from "react";

interface MainAreaProps {
  children: ReactNode;
}
const MainArea = ({ children }: MainAreaProps) => {
  return <div className="col-lg-10 mainArea">{children}</div>;
};

export default MainArea;
