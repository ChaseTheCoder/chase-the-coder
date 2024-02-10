import { BlogPostsInterface } from "@/service/client";
import Image from 'next/image'
import Link from "next/link";

type Props = {
  blogPosts?: BlogPostsInterface[]
}

export default function blogPosts({blogPosts}: Props)  {
  return (
      <div className='flex flex-col divide-y gap-12 mb-12'>
        {blogPosts &&
          blogPosts.map((blogPost) => {
            return (
              <div key={blogPost.id} className='grid grid-cols-5 gap-y-4 gap-x-8 pt-12'>
                <div className='cols-1 col-span-5 md:col-span-2'>
                  <Link
                    href={`/blog/${blogPost.id}`}
                  >
                  <h2 className='font-bold mb-4' id='project-title'>{blogPost.title.toLocaleUpperCase()}</h2>
                  <p className='my-3'>{blogPost.techStack}</p>
                  <p className='my-3 text-slate-600'>{`${blogPost.description.substring(0, 300)} [...]`}</p>
                  </Link>
                </div>
                <div className='cols-1 col-span-5 md:col-span-3 flex order-first md:order-last'>
                  <Image
                    src={blogPost.projectImage.url} 
                    alt={blogPost.projectImage.altText}
                    width={700}
                    height={450}
                    className='object-cover rounded-lg shadow-2xl'
                  />
                </div>
              </div>
            )
          })
        }
      </div>
  )
}