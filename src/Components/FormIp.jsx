import React, { useState } from 'react'
import {ChevronRightIcon } from '@heroicons/react/20/solid'


export default function FormIp({newText =f => f}) {
    const [search, setSearch] = useState("");

    const submit = e => {
        e.preventDefault();
        newText(search);
        setSearch("") 
    }

    return (
        <div className='w-1/3 h-12 inline-flex rounded-lg bg-white'>
        
            <form onSubmit={submit} className='bg-white w-full flex rounded-lg '> 
            <input 
                value={search}
                onChange={event => setSearch(event.target.value)}
                type="text"
                name="search"
                id="search"
                placeholder='Search for any address or domain'
                className='bg-white pl-5 w-5/6 rounded-lg cursor-pointer'
                required
            />
            <button type="submit" className='w-1/6 h-12 self-center bg-black rounded-r-lg cursor-pointer hover:bg-zinc-800'><ChevronRightIcon className=" text-slate-200 w-8" aria-hidden="true" /></button>
            </form>

        </div>
    )
}


