import React from 'react'
import {ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Form() {
    return (
        <div className='w-2/5 h-12  inline-flex rounded-lg bg-white'>
            <input 
                type="text"
                name="search"
                id="search"
                placeholder='Search for any address or domain'
                className='bg-white w-full pl-5 rounded-l-lg cursor-pointer'
            />
            <button type="button" className='w-14 h-12 self-center bg-black rounded-r-lg cursor-pointer hover:bg-zinc-800'><ChevronRightIcon className=" text-slate-200" aria-hidden="true" /></button>
        </div>
    )
}
