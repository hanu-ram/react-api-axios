import React, { useState } from 'react'
import { createNewPost } from '../service/postService';

export default function PostForm ( { posts, setPosts } )
{
  const [ title, setTitle ] = useState( '' );
  const [ body, setBody ] = useState( '' );
  const handleFormSubmit = ( event ) =>
  {
    event.preventDefault();
    setTitle( '' );
    setBody( '' );
    createNewPost( { title, body } )
      .then( result => setPosts( [ ...posts, result.data ] ) )
      .catch( err => console.err( err ) )
  }
  return (
    <div>
      <form onSubmit={ handleFormSubmit }>
        <h1>Create New Post</h1>
        <div>
          Title
        </div>
        <input value={ title } onChange={ e => setTitle( e.target.value ) } type='text'></input>
        <div>
          Body
        </div>
        <textarea value={ body } onChange={ e => setBody( e.target.value ) }></textarea>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div >
  )
}
