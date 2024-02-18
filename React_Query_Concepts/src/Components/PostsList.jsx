import {QueryClient, useMutation, useQuery, useQueryClient}  from '@tanstack/react-query'
import React, { useEffect } from 'react'
import {fetchposts, addPost, fetchTags }  from '../api/api.js';


export default function PostsList() {
    const queryClient=useQueryClient();
const {data:postData,isError,isLoading,error} = useQuery({
queryKey:["posts"],
queryFn:fetchposts,
staleTime:5000
});

//tags Fetch
const {data:tagsData} = useQuery({
queryKey:["tags"],
queryFn:fetchTags,
//staleTime:5000
});


//Post Data
const {mutate,isError:isPostError,isPending,error:postError,reset}=useMutation({
    mutationFn:addPost,
    onSuccess:(data,variables,context)=>{
        queryClient.invalidateQueries({
            queryKey:['posts'],
            exact:true,
        })
    }
    
})
    //console.log(data,isLoading,status);

    const handleSubmit=(e)=>{
       e.preventDefault();
        const formData =new FormData(e.target);
        const title=formData.get("title");
        const tags=Array.from(formData.keys()).filter((key)=>formData.get(key)==='on');

       // console.log(title,tags);
         if(!title ||!tags) return;

         mutate({id:postData.length+1,title,tags})
         e.target.reset();

    }

  return (
    <div className='container'>

        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter your post..'
            className='postBox'
            name='title'/>
            
            <div className='tags'>
             {
                tagsData?.map((tag)=>{return(
                    <span>
                        <input type="checkbox" id={tag} name={tag} />
                        <label htmlFor={tag}>{tag}</label>
                    </span>
                )})
             }
            </div>
            <button >Post</button>
        </form>

        {isLoading && isPending && <p>...Loading</p>}
        {
            isError && <p>{error?.message}</p>
        }
        {
            isPostError && <p>{"Unable to post"+postError?.message}</p>
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
