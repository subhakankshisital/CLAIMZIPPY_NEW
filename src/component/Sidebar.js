import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import LeakAddOutlinedIcon from '@mui/icons-material/LeakAddOutlined';
import LeakRemoveOutlinedIcon from '@mui/icons-material/LeakRemoveOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoctorDashboard from './DoctorDashboard';
import AdvanceTariff from './AdvanceTariff';

function Sidebar() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const isActive = (buttonName) => activeButton === buttonName ? 'bg-blue-500' : '';

  return (
    <>
      <main className="flex w-full h-screen">
        <div className="w-80 h-screen bg-white shadow-lg hidden sm:block">
          <div className="flex flex-col justify-between h-screen">
            <div className="text-sm">
              <NavLink
                to="/dashboard"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('dashboard')}`}
                onClick={() => handleButtonClick('dashboard')}
              >
                <DashboardCustomizeOutlinedIcon />
                <div className="pl-2">Dashboard</div>
              </NavLink>
              <NavLink
                to="/task-queue"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('task-queue')}`}
                onClick={() => handleButtonClick('task-queue')}
              >
                <AssignmentOutlinedIcon />
                <div className="pl-2">Task Queue</div>
              </NavLink>
              <NavLink
                to="/network-providers"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('network-providers')}`}
                onClick={() => handleButtonClick('network-providers')}
              >
                <LeakAddOutlinedIcon />
                <div className="pl-2">Network Providers</div>
              </NavLink>
              <NavLink
                to="/non-network-providers"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('non-network-providers')}`}
                onClick={() => handleButtonClick('non-network-providers')}
              >
                <LeakRemoveOutlinedIcon />
                <div className="pl-2">Non Network Providers</div>
              </NavLink>
              <NavLink
                to="/my-documents"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('my-documents')}`}
                onClick={() => handleButtonClick('my-documents')}
              >
                <DescriptionOutlinedIcon />
                <div className="pl-2">My Documents</div>
              </NavLink>
              <NavLink
                to="/profile"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('profile')}`}
                onClick={() => handleButtonClick('profile')}
              >
                <PersonOutlinedIcon />
                <div className="pl-2">Profile</div>
              </NavLink>
              <NavLink
                to="/audit-trail"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('audit-trail')}`}
                onClick={() => handleButtonClick('audit-trail')}
              >
                <AssignmentOutlinedIcon />
                <div className="pl-2">Audit Trail</div>
              </NavLink>
              <NavLink
                to="/support"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('support')}`}
                onClick={() => handleButtonClick('support')}
              >
                <SupportAgentOutlinedIcon />
                <div className="pl-2">Support</div>
              </NavLink>
              <NavLink
                to="/search"
                className={`flex border-b border-slate-200 text-gray-500 p-3 mt-2 hover:text-white hover:bg-blue-500 cursor-pointer ${isActive('search')}`}
                onClick={() => handleButtonClick('search')}
              >
                <SearchOutlinedIcon />
                <div className="pl-2">Search</div>
              </NavLink>
            </div>
          </div>
        </div>
        <section className="w-full p-4">
          <DoctorDashboard />
          <AdvanceTariff className="mt-6" />
        </section>
      </main>
    </>
  );
}

export default Sidebar;
