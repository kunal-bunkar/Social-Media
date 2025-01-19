import { MdOutlineMoreVert } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Users } from "../../dummyData";
import { useState } from "react";
import AddPost from "./AddPost";

const Post = ({ post }) => {
  const [like,setLike] = useState(post.like)
  const [isLike,setIsLike] = useState(true)

  const likeHandle=() => {
    setLike(isLike ? like+1 : like-1);
    setIsLike(!isLike)
    
  }
console.log(post)
  return (
    <div className="m-5  shadow-xl">
      <div className="container p-4">
        <div className="top flex items-center justify-between ">
          <div className="topLeft flex items-center">
            <img
              className="w-12 rounded-full object-cover mr-3 "
              src="/images/s1.jpg"
              alt="error"
            />
            <span className="font-semibold">{Users.filter((u)=> u.id=== post.userId)[0].username}</span>
            <span className="font-normal mx-5 ">{post.date}</span>
          </div>
          <div className="topRight">
            <MdOutlineMoreVert className="text-2xl " />
          </div>
        </div>
        <div className="center my-5">
          <span className="font-mono text-lg">{post.desc}</span>
          <img className="mt-5 w-full max-h-96" src={post.photo} alt="" />
        </div>
        <div className="bottom flex justify-between">
          <div className="bottomLeft flex items-center">
            <FaHeart className="text-2xl " style={{color: isLike ? "#8080805c" : "#e83c3c"}} onClick={likeHandle} />
            <span className="mx-4">{`${like} likes`}</span>
          </div>
          <div className="bottomRight mr-4 border-b-2">
            <span className="font-semibold">{`${post.comment} comments`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
