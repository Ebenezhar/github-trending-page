import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const handleNavigate = (values) => {
        navigate(values)
    }

    return (
        <div className=" text-gray-50">
            <div className="text-center bg-gray-900 border-b-2 border-gray-600 p-4" >
                <h1 >Trending</h1>
                <p className="text-gray-400">See what the GitHub community is most excited about today.</p>
            </div>
            <div className='container border border-gray-800 rounded p-0 mt-10 overflow-hidden'>
                <div className='py-3 px-5 w-full flex flex-row justify-between  bg-slate-800 '>
                    <div className='flex flex-row  border-2 px-1 border-gray-400 rounded'>
                        <button onClick={() => handleNavigate('')} className='p-1 border-r-2 border-gray-400'>Repositories</button>
                        <button onClick={() => handleNavigate("/Developers")} className='p-1 w-1/2'>Developers</button>
                    </div>
                    <div className='flex flex-row space-x-4 '>
                        <div>Language:</div>
                        <div>Date Range:</div>
                        <div>Sponsarable:</div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Home