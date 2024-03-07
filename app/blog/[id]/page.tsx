'use client'
import LoadingPage from "@/components/loading";
import { BlogPostsInterface, blogPost } from "@/service/client";
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function BlogPost({ params }: { params: { id: string } })  {
  const [blogPostData, setBlogPostData] = useState<BlogPostsInterface>();
  const [loadingBlogPost, setLoadingBlogPost] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBlogPost();
  })

  const getBlogPost = async () => {
    const res: BlogPostsInterface = await blogPost(params.id);
    if(res){
        setTimeout(() => {
            setError(false);
            setBlogPostData(res);
            setLoadingBlogPost(false);
        }, 1500);
    } else {
        setLoadingBlogPost(false);
        setError(true);
    }
    return;
  }
  return (
      <div className='flex flex-col mx-10 md:mx-40 my-5'>
        {blogPostData ?
          <div key={blogPostData.id} className='flex flex-col gap-8'>
              <Image
                src={blogPostData.projectImage.url} 
                alt={blogPostData.projectImage.altText}
                width={1200}
                height={1200}
                className='object-cover rounded-lg shadow-lg'
              />
              <div className='flex flex-col gap-4 justify-center'>
                <h1 className='font-bold text-2xl md:text-6xl text-center'>{blogPostData.title.toLocaleUpperCase()}</h1>
                <p className='text-center'>{blogPostData.techStack}</p>
              </div>
              <p className='text-large leading-8 text-slate-800'>{blogPostData.description}</p>
            </div> :
            <LoadingPage/>
        }
      </div>
  )
}