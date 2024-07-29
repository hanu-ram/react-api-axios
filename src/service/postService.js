import axios from "axios";

const api = axios.create( {
  baseURL: "https://jsonplaceholder.typicode.com",
} );

const getAllPosts = () => api.get( `/posts` );
const deletePostById = ( id ) => api.delete( `/posts/${ id }` )
const createNewPost = ( post ) => api.post( `/posts`, post )

export { getAllPosts, deletePostById, createNewPost }
