"use client"
import React, { useState } from 'react'
import { BiSearch } from "react-icons/Bi";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

const Header = () =>{
    const [keyword,setKeyword]=useState('')
    const router =useRouter();
    const searchFunc = (e) =>{
        if (e.key==="Enter" && keyword.length>=3){
            router.push(`/search/${keyword}`)
            setKeyword('')
        }
    }
    const menu=[
        {
            name:"About",
            url:"/about"
        },
        {
            name:"Sign In",
            url:"/login"
        }
    ]
    return(
        <div className='flex items-center gap-3 h-20 p-5'>
           <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>
            MovieApp
           </div>
           <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
            <input value={keyword} onKeyDown={searchFunc} onChange={e=>setKeyword(e.target.value)} className='outline-none flex-1 bg-transparent' placeholder='Arama Yapınız !' type='text'></input>
            <BiSearch size={25}>
            </BiSearch>
           </div>
           <ThemeComp></ThemeComp>
           {
            menu.map((mn,i) => (
                <MenuItem mn={mn} key={i}></MenuItem>
            ))
           }
        </div>
    )
}
export default Header