import React,{useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
import LearnColumn from './Components/LearnColumn/LearnColumn';
import { Outlet } from 'react-router-dom';
function App() {
  useEffect(() => {
    // Disable scrolling on the main page
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="belowNavbar flex">
        <div className="sidebar h-screen fixed top-20">
          <SideBar />
        </div>
        <div className="learnColumn ml-64  overflow-y-auto h-screen p-4 w-screen pb-20">
          {/* <LearnColumn /> */}
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
