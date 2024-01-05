import React from "react";
import Image from "next/image";

const getMovie = async (id)=> {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'your token'
        },      };
     const data= await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)

     return await data.json();
}


const Page = async ({params})=>{
    const id=params.id;
    const movieDetail = await getMovie(id)
    console.log(movieDetail,'moviede')
    return(
        <div className="relative p-7 min-h-screen">
            <Image style={{objectFit:'cover'}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} ></Image>
            <div className="absolute">
            <div className="text-3xl font-bold my-3">{movieDetail?.title} </div>
            <div className="w-1/2">{movieDetail?.overview} </div>
            <div className="my-3">{movieDetail?.release_date}- {movieDetail?.vote_average} </div>
            <div className="border w-32 p-2 my-2 hover:bg-white hover:text-black rounded-md text-center text-lg cursor-pointer">
                Trail
            </div>
             </div>
            </div>
    )
}

export default Page