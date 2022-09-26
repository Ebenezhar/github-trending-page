import React from 'react'

function DeveloperCard({ data }) {
    return (
        <div className='p-3 flex flex-row text-xl justify-between border-b-2 border-gray-400'>
            <div>
                <p className='text-gray-400 text-lg'>{data.rank}</p>
            </div>
            <div className='w-3/6 flex flex-row px-5'>
                <div className=''>
                    <img width="60" height="60" className='rounded-full' src={`${data.avatar}`} />
                </div>
                <div className='flex flex-column px-4'>
                    <a className='pb-1 font-bold text-2xl no-underline' href={`${data.url}`} target="_blank"> {`${data.name
                        }`}
                    </a>
                    <p className='text-gray-400'>{data.username}</p>
                </div>
            </div>
            <div className='w-2/6'>
                <p className='text-gray-400 mb-0 text-lg'><i className="fa-solid fa-fire-flame-curved text-amber-600"></i> POPULAR REPO</p>
                {data.popularRepository.repositoryName ? <p><i className="fa-regular fa-file text-lg  "></i> <a className='no-underline font-bold px-1' href={`${data.popularRepository.url}`}>{data.popularRepository.repositoryName}</a></p> : null}
                {data.popularRepository.description ? <p className='text-gray-400'>{data.popularRepository.description}</p> : null}

            </div>
            <div className='w-1/6 flex items-start justify-end space-x-2 text-sm'>
                <button className='p-1 px-2 border-2 border-gray-400 rounded hover:border-gray-100 hover:bg-gray-700'><i className="fa-regular fa-heart p-1 text-pink-500 "></i> Sponsor</button>
                <button className='p-1 px-2 border-2 border-gray-400 rounded hover:border-gray-100 hover:bg-gray-700'> Follow</button>
            </div>

        </div>
    )
}

export default DeveloperCard