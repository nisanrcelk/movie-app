import Movies from "@/app/components/Movies";
import React from "react";

const Page =  async ({params}) =>{
    const keyword=params.keyword;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'your token'
        },      };
     const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en-US&include_adult=false`, options)

     const searchResult= await data.json();
    return(
<div>   
     {
        searchResult.results.length<1 ? 
        <div>  No result !</div>:
        <div className="flex items-center flex-wrap gap-2">
            {
                searchResult?.results?.map((mv,i)=> (
                    <Movies key={i} mv={mv} ></Movies>
                ))
            } 
             </div>
     }
</div>
    )
}
export default Page;