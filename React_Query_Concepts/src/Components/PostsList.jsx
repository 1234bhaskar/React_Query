import {useQuery}  from '@tanstack/react-query'
import React, { useEffect } from 'react'
import fetchposts  from '../api/api.js';

export default function PostsList() {
const {data:postData,isError,isLoading,error} = useQuery({
queryKey:["posts"],
queryFn:fetchposts,
staleTime:5000
});
    //console.log(data,isLoading,status);

  return (
    <div className='container'>
        {isLoading && <p>...Loading</p>}
        {
            isError && <p>{error?.message}</p>
        }

        {postData?.map((post)=>{
                return(
                    <div key={post.id} className='posts' >
                        <div>{post.title}</div>
                        {post.tags.map((tag)=>(
                            <span key={tag}>{tag}</span>   
                        ))
                        }
                    </div>

                )
            })
        }
        
    </div>
  )
}
