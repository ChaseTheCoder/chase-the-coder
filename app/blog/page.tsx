'use client'
import { BlogPageInterface, blogPage } from '@/service/client';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/loading';
import BlogHero from '@/containers/blog/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPageInterface>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBlogHeroData();
  })

  const getBlogHeroData = async () => {
    const res: BlogPageInterface = await blogPage();
    if(res){
        setTimeout(() => {
            setError(false);
            setBlogData(res);
            setLoading(false);
        }, 2000);
    } else {
        setLoading(false);
        setError(true);
    }
    return;
  }

  if(loading) {
    return (
        <LoadingPage />
    )
  }

  return (
    <div className='grid grid-cols-1 divide-y mx-6 md:mx-10'>
      {
        blogData &&
        <>
          <BlogHero
            title={blogData?.title}
            blogImage={blogData?.heroImage}
          />
          <div className="flex flex-col justify-center items-center h-[calc(100vh-125px)] gap-4 m-10">
            <FontAwesomeIcon icon={faHammer} size='6x' className='text-green-600 mb-8' aria-hidden='true' />
            <h1 className='text-xl md:text-2xl font-bold'>Blog under reconstruction as of Febrary 5, 2024</h1>
            <p>Transitioning my blog from Wordpress/PHP to Next.js.</p>
            <p>Blog should be up and running by March 2024.</p>
          </div>
        </>
      }
    </div>
  );
}
