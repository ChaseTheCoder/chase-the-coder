'use client'
import { BlogPageInterface, blogPage, blogPosts, BlogPostsInterface } from '@/service/client';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/loading';
import BlogHero from '@/containers/blog/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import BlogPosts from '@/containers/blog/blogPosts';

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPageInterface>();
  const [loading, setLoading] = useState(true);
  const [blogPostsData, setBlogPostsData] = useState<BlogPostsInterface[]>();
  const [loadingBlogPosts, setLoadingBlogPosts] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBlogHeroData();
  })

  useEffect(() => {
    getBlogPosts();
  })

  const getBlogHeroData = async () => {
    const res: BlogPageInterface = await blogPage();
    if(res){
        setTimeout(() => {
            setError(false);
            setBlogData(res);
            setLoading(false);
        }, 1500);
    } else {
        setLoading(false);
        setError(true);
    }
    return;
  }

  const getBlogPosts = async () => {
    const res: BlogPostsInterface[] = await blogPosts();
    if(res){
        setTimeout(() => {
            setError(false);
            setBlogPostsData(res);
            setLoadingBlogPosts(false);
        }, 1500);
    } else {
        setLoadingBlogPosts(false);
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
            title={blogData.title}
            blogImage={blogData.heroImage}
          />
          <BlogPosts
            blogPosts={blogPostsData && blogPostsData}
          />
        </>
      }
    </div>
  );
}
