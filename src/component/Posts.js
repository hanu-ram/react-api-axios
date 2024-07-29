import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../service/postService';
import Post from './Post';
import PostForm from './PostForm';

export default function Posts ()
{
  const [ posts, setPosts ] = useState();
  useEffect( () =>
  {
    getAllPosts()
      .then( result => setPosts( result.data ) )
      .catch( err => console.log( err ) )
  }, [] )

  return (
    < div >
      <PostForm posts={ posts } setPosts={ setPosts }></PostForm>
      <h1>Posts</h1>
      <div>
        {
          posts.map( post =>
          (
            <Post key={ post.id } post={ post } posts={ posts } setPosts={ setPosts }></Post>
          ) )
        }
      </div>
    </div >
  )
}
