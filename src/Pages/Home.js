import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const handleNavigate = (values) => {
        navigate(values)
    }

    return (
        <div className=" text-gray-50 pb-10">
            <div className="text-center bg-gray-900 border-b-2 border-gray-600 p-4" >
                <h1 >Trending</h1>
                <p className="text-gray-400">See what the GitHub community is most excited about today.</p>
            </div>
            <div className='container border border-gray-900 rounded p-0 mt-10 overflow-hidden'>
                <div className='py-3 px-5 w-full flex flex-row justify-between  bg-slate-800 '>
                    <div className='flex flex-row font-bold border-2 p-0 border-gray-400 rounded overflow-hidden'>
                        <button onClick={() => handleNavigate('')} className='p-1 px-2 border-r-2 border-gray-400 active:bg-blue-700 focus:bg-blue-700'>Repositories</button>
                        <button onClick={() => handleNavigate("/Developers")} className='p-1 px-2 w-1/2 active:bg-blue-700 focus:bg-blue-700'>Developers</button>
                    </div>
                    <div className='flex flex-row text-gray-400 space-x-4 p-1'>
                        <div>Language: Any <i class="fa-solid fa-sort-down"></i></div>
                        <div>Date Range: Any <i class="fa-solid fa-sort-down"></i></div>
                        <div>Sponsarable: Any <i class="fa-solid fa-sort-down"></i></div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Home