import React from 'react'



export default function ResultsContainer({ip, region, city, cp, timezone, isp}) {

    return (
        <div className='bg-white text-xl mt-10 rounded-lg grid  grid-cols-4 w-5/6 h-32 p-5 text-left divide-x mx-20 md:text-sm '>
            <div className='pl-5'>
                <h2 >IP ADDRESS</h2>
                <p id='ipAddress' key={ip}>{ip}</p>
            </div>
            <div className='pl-5'>
                <h2>LOCATION</h2>
                <p id='location' key={region}>{region}, {city} {cp}</p>
            </div>
            <div className='pl-5'>
                <h2>TIMEZONE</h2>
                <p id='timezone' key={timezone}>{timezone}</p>
            </div>
            <div className='pl-5'>
                <h2>ISP</h2>
                <p id='isp' key={isp}>{isp}</p>
            </div>        
        </div>
    )
}
