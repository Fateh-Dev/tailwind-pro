import "./App.css";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";

export default function App() {
  return (
    <div className='flex'>
      <ToolBar />
      <SideBar />
    </div>
  );
}
