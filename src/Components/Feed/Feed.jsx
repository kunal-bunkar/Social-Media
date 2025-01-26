import Share from "../Share/Share";
import Post from "./Post";
import { Posts } from "../../dummyData";
import { useState } from "react";


const Feed = ({deletePost}) => {
  const [post,setPost] = useState(Posts)
  const addPost =(newPost)=>{
    setPost([newPost,...post])
    localStorage.setItem("arr",JSON.stringify(post))
  }
  deletePost=(id)=>{
    console.log("step 2")
    const updatePost = post.filter((p)  =>p.id!==id)
    setPost(updatePost)
  }
  
  return (
    <div className="z-10  ]">
      <div>
        <Share addPost={addPost}  />
        {post.map((p) => (
          <Post key={p.id} post={p} deletePost={deletePost}/>
        ))}
      </div>
    </div>
  );
};

export default Feed;
