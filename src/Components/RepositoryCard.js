import React from 'react'

function RepositoryCard({ data }) {
    return (
        <div className='p-3 flex flex-row text-xl justify-between border-b-2 border-gray-400'>
            <div className='flex flex-column w-4/6 pr-10'>
                <div className='flex flex-row p-1 '>
                    <i className="fa-regular fa-file text-lg"></i>
                    <a className='px-2 pb-1 font-bold  ' href={`${data.url}`} target="_blank"> {`${data.username
                        } / ${data.repositoryName}`} </a>
                </div>
                {data.description ? <p className='text-lg text-gray-400 my-0'>{`${data.description}`}</p> : null}
                <div className='flex flex-row py-2 space-x-4 text-lg text-gray-400'>
                    <div className='flex flex-row'>
                        {
                            data.languageColor ? <div style={{ "background-color": `${data.languageColor}` }} className={`w-[1.7rem] h-[1.7rem] rounded-full m-2`}> </div> : null

                        }
                        {
                            data.language ? <p className='my-2'>{data.language}</p> : null
                        }
                    </div>
                    <p className='my-2'><i className="fa-regular fa-star"></i> {`${data.totalStars}`}</p>
                    <p className='my-2'> <i className="fa-solid fa-code-fork"></i> {`${data.forks}`}</p>
                    <div className='flex flex-row'>
                        <p className='my-2 px-1'>built by</p>
                        <div className='flex flex-row px-1 mx-1 py-3 space-x-1'>
                            {
                                data.builtBy.map((element) => {
                                    return <img width="20" height="20" className='rounded-full' src={`${element.avatar}`} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-column p-1 w-2/6 justify-center'>
                <div className='flex flex-row p-0 justify-center text-gray-300'>
                    <div className='flex flex-row justify-center border-2 border-gray-400 rounded mx-4 bg-gray-900 hover:border-gray-100 hover:bg-gray-700'>
                        <button className='p-1 px-2 '><i className="fa-regular fa-heart p-1 text-pink-500 "></i> Sponsor</button>
                    </div>
                    <div className='flex flex-row border-2 border-gray-400 rounded mx-4 bg-gray-900 hover:border-gray-100 hover:bg-gray-700'>
                        <button className='p-1 px-3 border-r-2 border-gray-400'><i className="fa-regular fa-star p-1"></i> Star</button>
                        <button className='px-3 pb-2'>
                            <i className="fa-solid fa-sort-down"></i>
                        </button>
                    </div>
                </div>
                <h6 className='text-right p-1 px-5 pt-5 text-gray-400'><i className="fa-regular fa-star p-1"></i> {`${data.starsSince}`} Stars today</h6>
            </div>
        </div>
    )
}

export default RepositoryCard