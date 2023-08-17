import React from 'react'



export default function ResultsContainer({ip, region, city, cp, timezone, isp}) {

    return (
        <div className='bg-white text-md m-12  text-center gap-1  absolute top-40 z-10 rounded-lg grid  grid-cols-1 grid-rows-4 md:grid-cols-4 w-5/6 md:h-44 p-5 md:text-left md:mx-20 md:text-lg '>
            <div className='px-5 '>
                <h2 className='text-gray-400 text-sm pb-2'>IP ADDRESS</h2>
                <p className='font-semibold text-lg' id='ipAddress' key={ip}>{ip}</p>
            </div>
            <div className='px-5 '>
                <h2 className='text-gray-400 text-sm pb-2'>LOCATION</h2>
                <p className='font-semibold text-lg' id='location' key={region}>{region}, {city} {cp}</p>
            </div>
            <div className='px-5 '>
                <h2 className='text-gray-400 text-sm pb-2'>TIMEZONE</h2>
                <p className='font-semibold text-lg' id='timezone' key={timezone}>{timezone}</p>
            </div>
            <div className='px-5 pb-2'>
                <h2 className='text-gray-400 text-sm pb-2'>ISP</h2>
                <p className='font-semibold text-lg' id='isp' key={isp}>{isp}</p>
            </div>        
        </div>
    )
}
