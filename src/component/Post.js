import React from 'react'
import { deletePostById } from '../service/postService'

export default function Post ( { post, posts, setPosts } )
{
  const handleDelete = ( id ) =>
  {
    deletePostById( id )
      .then( () => setPosts( posts.filter( post => post.id !== id ) ) )
      .catch( err => console.log( err ) )
  }
  return (
    <div>
      <h2>{ post.title } </h2>
      <p>{ post.body }</p>
      <button onClick={ () => handleDelete( post.id ) }>Delete</button>
    </div>
  )
}
