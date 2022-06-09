import { BiHelpCircle } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { FaNetworkWired } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-14 m-0 flex flex-col bg-primary bg-opacity-80 shadow-lg'>
      <SideBarIcon icon={<GoHome size='24' />} />
      <SideBarIcon icon={<MdComputer size='24' />} />
      <SideBarIcon icon={<BsPrinter size='24' />} />
      <SideBarIcon icon={<BiHelpCircle size='24' />} />
      <SideBarIcon icon={<FaNetworkWired size='24' />} />
    </div>
  );
};
const SideBarIcon = ({ icon }) => {
  return <div className='sidebar-icon'>{icon}</div>;
};
export default SideBar;
