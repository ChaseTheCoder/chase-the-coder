'use client'
import React, { useState, useEffect, use } from 'react';
import { BlogPostsInterface } from "@/service/client";
import { blogPost } from "@/service/client";
import LoadingPage from "@/components/loading";
import Image from 'next/image'

type Props = {
  params: Promise<{ id: string }>
}

export default function BlogPostPage({ params }: Props) {
  const [post, setPost] = useState<BlogPostsInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Unwrap the params Promise
  const { id } = use(params);

  useEffect(() => {
    const getBlogPost = async () => {
      try {
        const res: BlogPostsInterface = await blogPost(id);
        if (res) {
          setPost(res);
          setTimeout(() => {
            setError(false);
          }, 100);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getBlogPost();
  }, [id]);

  if (loading) return <LoadingPage/>;
  if (error) return <div>Error loading blog post</div>;
  if (!post) return <div>Blog post not found</div>;

  return (
      <div className='flex flex-col mx-10 md:mx-40 my-5'>
        {post ?
          <div key={post.id} className='flex flex-col gap-8'>
              <Image
                alt={post.projectImage.altText}
                src={post.projectImage.url} 
                width={1200}
                height={1200}
                className='object-cover rounded-lg shadow-lg'
              />
              <div className='flex flex-col gap-4 justify-center'>
                <h1 className='font-bold text-2xl md:text-6xl text-center'>{post.title.toLocaleUpperCase()}</h1>
                <p className='text-center'>{post.techStack}</p>
                {post.content?.html && 
                  <div
                    className={`text-large leading-8 text-slate-800 codeBlock flex flex-col gap-4`}
                    dangerouslySetInnerHTML={{__html: post.content.html}}
                  />
                }
              </div>
            </div> :
            <LoadingPage/>
        }
      </div>
  )
}