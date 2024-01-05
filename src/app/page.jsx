import React from 'react'
import Movies from './components/Movies';
const Page = async({searchParams})=>{

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'your token'
        },      };
     const data= await fetch(`https://api.themoviedb.org/3/${
        searchParams.genre ? 'movie/' + searchParams.genre : 'movie/top_rated'
      }?language=en-US&page=1`, options)

     const movies=await data.json();
            

return(
    <div className='flex items-center justify-center flex-wrap gap-3'>
       {movies?.results?.map((mv,i)=> (
        <Movies key={i} mv={mv}></Movies>
       ))} 
    </div>
)

}
export default Page