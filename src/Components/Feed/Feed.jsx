import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";
import { useState } from "react";
const Feed = () => {
  const [post,setPost] = useState(Posts)
  const addPost =(newPost)=>{
    setPost([newPost,...post])
  }
  return (
    <div className="z-10  ]">
      <div>
        <Share addPost={addPost}  />
        {post.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
