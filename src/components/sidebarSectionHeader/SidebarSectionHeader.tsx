import './sidebarSectionHeader.css'
interface SidebarSectionHeaderProps {
    text: string;
}
const SidebarSectionHeader = ({text}:SidebarSectionHeaderProps) => {
  return (
    <div className="d-flex justify-content-center">
      <p>{text}</p>  
    </div>
  )
}

export default SidebarSectionHeader