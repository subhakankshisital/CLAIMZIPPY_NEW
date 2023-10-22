import React from 'react'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Header() {

  return (
    <>
      <nav className="bg-white border-b border-gray-50 shadow-md px-3  py-2.5  ">
        <div className="flex items-center justify-between -mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto p-6">
          <div className="flex justify-between">
            <MenuOutlinedIcon className=" h-6 sm:h-9 text-blue-700" />
          </div>
          <div className="item-center  mx-auto ">
          <img className=" w-20 h-12" src='https://claimzippy.com/assets/img/icon.jpeg' alt="image"/>
         

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header