'use client'
import { BlogPageInterface, blogPage, blogPosts, BlogPostsInterface } from '@/service/client';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/loading';
import BlogHero from '@/containers/blog/hero';
import BlogPosts from '@/containers/blog/blogPosts';

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPageInterface>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [blogPostsData, setBlogPostsData] = useState<BlogPostsInterface[]>();
  const [loadingBlogPosts, setLoadingBlogPosts] = useState(false);
  const [errorBlogPosts, setErrorBlogPosts] = useState(false);
  if(error) {console.log("Blog Page error")}
  if(errorBlogPosts) {console.log("Blog Post error")}
  
  useEffect(() => {
    getBlogHeroData();
  }, []);

  useEffect(() => {
    getBlogPosts();
  }, []);

  const getBlogHeroData = async () => {
    setLoading(true);
    const res: BlogPageInterface = await blogPage();
    if(res){
        setTimeout(() => {
            setError(false);
            setBlogData(res);
            setLoading(false);
        });
    } else {
        setLoading(false);
        setError(true);
    }
    return;
  }

  const getBlogPosts = async () => {
    setLoadingBlogPosts(true);
    const res: BlogPostsInterface[] = await blogPosts();
    if(res){
      setLoadingBlogPosts(false);
      setBlogPostsData(res);
    } else {
      setLoadingBlogPosts(false);
      setErrorBlogPosts(true);
    }
    return;
  }

  if(loading) {
    return (
        <LoadingPage />
    )
  }

  return (
    <div className='grid grid-cols-1 divide-y mx-0 md:mx-10'>
      {
        blogData &&
        <>
          <BlogHero
            title={blogData.title}
            blogImage={blogData.heroImage}
          />
          {
            blogPostsData ?
            <BlogPosts
              blogPosts={blogPostsData}
            /> :
            <LoadingPage />
          }
        </>
      }
    </div>
  );
}
