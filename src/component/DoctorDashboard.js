import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import AdvanceTariff from './AdvanceTariff';

function DoctorDashboard() {
  return (
    <>
    
<div className="  px-2 ">

  <div className=" py-3  -mx-4 sm:-mx-8 px-2 sm:px-8 overflow-x-auto ">
    
  <div className="bg-white inline-block min-w-full pb-8 overflow-hidden">
    
    <div className="flex justify-between  border-b border-slate-200 ">
      <div className="flex items-center">
        
        <span className="  text-gray-700 font-bold pl-2">Doctor Dashboard</span>
      </div>

      
      <div className=" flex">
        

        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
        <span className="text-sm font-normal">Welcome Apsar Shaikh</span>
        <span>
                    <img className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="image"/>
                </span>
          <div className="relative">
            <NotificationsOutlinedIcon className="h-5 w-5 text-blue-500"/>
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
          </div>
          
        </div>
      </div>
    </div>
    <div className="flex justify-between px-6 mt-4 ">
    <div className="flex items-center">
        
        <span className=" font-semibold text-gray-700">Empanelment Case Requests</span>
      </div>

      
      <div className=" flex text-blue-400 italic text-sm font-bold ">
        VIEW ASSIGNED GRADE
        </div>
        </div>

    <div className="mt-4 flex items-center justify-between px-6 ">
      
      <div className="flex  lg:gap-x-16">
        <div className="grid px-2 ">
        <span className="cursor-pointer rounded-sm py-1  text-sm font-medium hover:bg-gray-100">THCP Code:</span>
        312568
        </div>
        <div className="grid px-2">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Case id:</span>
        1-56894524
        </div>
        <div className="grid px-2">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Case Date:</span>
        29 june 2023
        </div>
        <div className="grid px-2">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Zone:</span>
        North
        </div>
        <div className="grid px-2">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Provider Name:</span>
        12548-Appollo Hospital 
        </div>
        <div className="grid px-2">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Status:</span>
        Work flow created
        </div>
        <div className="grid px-2">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Last Assigned:</span>
        Amit Kumar
        </div>

      </div>

      {/* <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Becoma a seller</span> */}
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default DoctorDashboard