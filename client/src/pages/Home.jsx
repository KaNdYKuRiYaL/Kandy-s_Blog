import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard';

export default function Home() {
  
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await fetch(`/api/post/getPosts`);
      const data = await res.json();
      setPosts(data.posts);
    }
    fetchPosts();
  },[]);

    return (
      <div>
        <div className='flex flex-col gap-5 px-3 p-20 max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
          <p className='text-gray-500 text-md sm:text-lg'>Here you will find the variety of articles and tutorials on topics such as recent technologies , lifestyle and health related articles.</p>
          <Link to={'/search'} className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>
            View all posts
          </Link>
        </div>
        <div className='p-3 bg-amber-100 dark:bg-slate-700'>
          <CallToAction/>
        </div>

        <div className='max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7'>
          {
            posts && posts.length > 0 && (
              <div className=' flex flex-col gap-6'>
                <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
                <div className='flex flex-wrap gap-2'>
                  {posts.map((post) =>(
                    <PostCard key={post._id} post={post}/>
                    ))
                  }
                </div>
                <Link to={`/search`} className='text-lg text-teal-500 hover:underline text-center'>
                  View all posts
                </Link>
              </div>
            )
          }
        </div>
      </div>
    )
}
