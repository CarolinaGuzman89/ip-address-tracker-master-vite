import React from 'react'


export default function ResultsContainer({ipSearc}) {

    return (
        <div >
            {ipSearc.map((result) => (
                <div className='bg-white rounded-lg grid  grid-cols-4 w-5/6 h-32 p-5 text-left divide-x mx-20 '>
                    <div className='pl-5'>
                        <h2 >IP ADDRESS</h2>
                        <p id='ipAddress'>{result.id}</p>
                    </div>
                    <div className='pl-5'>
                        <h2>LOCATION</h2>
                        <p id='location'>{result.location}</p>
                    </div>
                    <div className='pl-5'>
                        <h2>TIMEZONE</h2>
                        <p id='timezone'>{result.timezone}</p>
                    </div>
                    <div className='pl-5'>
                        <h2>ISP</h2>
                        <p id='isp'>{result.isp}</p>
                    </div>
                </div>
            ))}
                
        </div>
    )
}
