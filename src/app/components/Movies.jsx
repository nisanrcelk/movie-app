"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({mv}) => {
    const router=useRouter();

    return(
<div onClick={()=>router.push(`/movie/${mv?.id}`)} className="min-w-[400px] relative cursor-pointer">
  <Image style={{objectFit:'cover'}} width={400} height={300} src={`https://image.tmdb.org/t/p/original/${mv?.backdrop_path || mv?.poster_path}`}></Image>
        <div className="absolute bottom-0 p-2 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
            <div className="text-xl font-bold">
            {mv?.title}
            </div>
            <div>
            {mv?.vote_average} - {mv?.release_date}
            </div>
        </div>
</div>  
    )
}
export default Movies