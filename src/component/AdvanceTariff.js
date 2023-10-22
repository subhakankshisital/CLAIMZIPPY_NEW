import React, { useState } from 'react';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdvStep from './AdvStep';
// import DoctorDashboard from './DoctorDashboard';
import MoreMenu from './MoreMenu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function AdvanceTariff() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    const [data, setData] = useState([
        { no: 1, mid: 'PROC4315', eid: 4023745, cat: 'General Surgery', title: 'Circumcision (Day Care)' },
        { no: 2, mid: 'PROC1849', eid: 4023550, cat: 'ENT', title: 'Stapedectomy/Stapedotomy' },
        { no: 3, mid: 'PROC420', eid: 4023665, cat: 'General Surgery', title: 'Lipoma-Under GA' },
        { no: 4, mid: 'PROC1155', eid: 4023552, cat: 'General Surgery', title: 'Breast Lumpectomy' },
        { no: 5, mid: 'PROC5213', eid: 4023663, cat: 'General Surgery', title: 'Wound Debridement-Major' },
        // Add more data here
    ]);

    const [noSearch, setNoSearch] = useState('');
    const [midSearch, setMidSearch] = useState('');
    const [eidSearch, setEidSearch] = useState('');
    const [catSearch, setCatSearch] = useState('');
    const [titleSearch, setTitleSearch] = useState('');

    const handleNOSearch = (e) => {
        setNoSearch(e.target.value);
    };

    const handleMidSearch = (e) => {
        setMidSearch(e.target.value);
    };

    const handleEidSearch = (e) => {
        setEidSearch(e.target.value);
    };
    const handleCatSearch = (e) => {
        setCatSearch(e.target.value);
    };
    const handleTitleSearch = (e) => {
        setTitleSearch(e.target.value);
    };
    const filteredData = data.filter((item) =>
        item.no.toString().includes(noSearch) &&
        item.mid.toLowerCase().includes(midSearch.toLowerCase()) &&
        item.eid.toString().includes(eidSearch) &&
        item.cat.toLowerCase().includes(catSearch.toLowerCase()) &&
        item.title.toLowerCase().includes(titleSearch.toLowerCase())
    );

    return (
        <>
           {/* <DoctorDashboard /> */}
            <div className="bg-white mt-6 px-6 p-2 sm:px-8">
                {/* <div className=" py-3 px-6 mx-auto flex  "> */}

                {/* <div class="grid"> */}
                <AdvStep />

                <div className="flex justify-end mb-2">
                    <div className="  text-center mx-auto text-blue-600 text-2xl mt-2 ">Advance Tariff</div>

                    <MoreMenu />
                </div>
                <div className="flex justify-center  ">
                    <Box sx={{ bgcolor: 'background.paper' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange} centered

                            aria-label="secondary tabs example"
                        >
                            <Tab label={<button className="bg-blue-500 text-white  font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Procedure
                            </button>} />
                            <Tab label={<button className="bg-white text-black  font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Package
                            </button>} />

                        </Tabs>
                    </Box>

                </div>
                {/* Table Start */}
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="table-auto border-collapse w-full  ">

                            <thead>

                                <tr className=" ">

                                    <th className="bg-gray-700 p-2  text-white font-bold md:border md:border-grey-500 text- ">S.No
                                        <input type="text"
                                            placeholder="Search"
                                            value={noSearch}
                                            onChange={handleNOSearch} className="bg-slate-50  grid text-black font-bold py-1 px-2 border  border-slate-100 rounded w-20 h-10" /></th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">Cz Catalog Master Id
                                        <input type="text"
                                            placeholder="Search here"
                                            value={midSearch}
                                            onChange={handleMidSearch} className="bg-slate-50  grid text-black font-bold py-1 px-2 border  border-slate-100 rounded w-28 h-8" /></th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">HCP Catalog Id <br></br>(External Id)
                                        <input type="text"
                                            placeholder="Search here"
                                            value={eidSearch}
                                            onChange={handleEidSearch} className="bg-slate-50  grid text-black font-bold py-1 px-2 border  border-slate-100 rounded w-28 h-8" /></th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">Item <br></br> Category
                                        <input type="text"
                                            placeholder="Search here"
                                            value={catSearch}
                                            onChange={handleCatSearch} className="bg-slate-50  grid text-black font-bold py-1 px-2 border  border-slate-100 rounded w-28 h-8" /></th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left "> Item Title
                                        <input type="text"
                                            placeholder="Search here"
                                            value={titleSearch}
                                            onChange={handleTitleSearch} className="bg-slate-50  grid text-black font-bold py-1 px-2 border  border-slate-100 rounded w-28 h-8" /></th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">Inclusion/Exclusion
                                        {/* <input type="text" class="bg-slate-50  grid text-white font-bold py-1 px-2 border  border-slate-100 rounded w-24 h-8"placeholder='Search'/> */}
                                    </th>
                                </tr>
                            </thead>

                            <tbody >
                                {/* {rows.map((row) => ( */}
                                {filteredData.map((item) => (
                                    <tr key={item.id}>
                                        <td className="p-2 md:border md:border-grey-500 text-left ">{item.no}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left ">{item.mid}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left ">{item.eid}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left ">{item.cat}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left ">{item.title}</td>
                                        <td className="p-2 md:border md:border-grey-500 text-left ">{item.no}</td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>
                </div>
                {/* Table End  */}
                {/* Table Start */}
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="table-auto border-collapse w-full  ">

                            <thead >

                                <tr >

                                    <th className="bg-gray-700 p-2  text-white font-bold md:border md:border-grey-500 text-left ">S.No
                                    </th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">Cz catlog Master id:
                                    </th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">HCP Catalog id  (External id)
                                    </th>
                                    <th className="bg-gray-700 p-2 text-white font-bold md:border md:border-grey-500 text-left ">Item  category
                                    </th>

                                </tr>
                            </thead>
                            <tbody >
                                <tr className="bg-blue-50 border border-grey-500  ">
                                    <td className="p-2 md:border md:border-grey-500 text-left ">01</td>
                                    <td className="p-2 md:border md:border-grey-500 text-left ">P856655</td>
                                    <td className="p-2 md:border md:border-grey-500 text-left">556688</td>
                                    <td className="p-2 md:border md:border-grey-500 text-left ">582</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Table end  */}

                {/* Remark Start */}
                <div className=" py-3 p-3 -mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto ">
                    <div class="inline-block min-w-full shadow rounded-md overflow-hidden">
                        <div className="flex justify-between  ">
                            <div className="flex items-center p-2">

                                <span className="  text-gray-700 ">Ritesh's Remarks:</span>
                                <CheckIcon className="text-white bg-green-600 outline  rounded-full w-4 h-4" />
                            </div>


                            <div className=" flex">
                                <span className="text-sm font-normal">06-08-2023</span>
                            </div>
                        </div>
                        <p className="block font-sans text-md font-normal leading-relaxed text-inherit antialiased">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><div class="w-full md:w-7/12 pt-5 px-4 mb-8 mx-auto text-center"></div>
                        <div className="flex justify-between mt-6 mb-6 ">
                            <div className="grid items-center p-2">
                                Enter your remarks:
                                <input type="text" class="  grid text-black font-bold py-1 px-4 border  border-gray-200 rounded w-96 h-10" placeholder='Enter your remarks here..' />

                            </div>
                            <div className="mt-6 mx-6">
                                <button
                                    type="button"
                                    class="border border-blue-600 bg-blue-600 text-white m-2 rounded-md w-32 h-10 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline"
                                >
                                    SAVE
                                </button>
                                <button
                                    type="button"
                                    class="border border-green-500 bg-green-500 text-white m-2 rounded-md w-32 h-10 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline"
                                >
                                    SEND
                                </button>
                                <button
                                    type="button"
                                    class="border border-red-700 bg-red-600 text-white rounded-md  w-60 h-10 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline"
                                >
                                    NOT RECOMENDED
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Remarks End */}
            </div>
        </>
    )
}

export default AdvanceTariff