import { RiDeleteBin6Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Users } from "../../dummyData";
import { useState } from "react";
import Feed from "../Feed/Feed";

const Post = ({ post, deletePost }) => {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(true);

  const likeHandle = () => {
    setLike(isLike ? like + 1 : like - 1);
    setIsLike(!isLike);
  };
  const callDelete = (id) => {
    console.log("step 1", id);
    deletePost(id);
  };

  return (
    <div className="m-5  shadow-xl">
      <div className="container p-4">
        <div className="top flex items-center justify-between ">
          <div className="topLeft flex items-center">
            <img
              className="w-12 h-12 rounded-full object-cover "
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="error"
            />
            <div className="">
        <div className="text-lg ml-5">{Users.filter((u) => u.id === post.userId)[0].username}</div>
        <div className="text-sm ml-5 text-gray-600">{Users.filter((u) => u.id === post.userId)[0].userId}</div>
      </div>
            <span className="font-normal mx-5 ">{post.date}</span>
          </div>
          <div className="topRight">
            <RiDeleteBin6Line
              className="text-2xl"
              onClick={() => callDelete(post.id)}
            />
          </div>
        </div>
        <div className="center my-5">
          <span className="font-mono text-lg">{post.desc}</span>
          <img className="mt-5 w-full max-h-96" src={post.photo} alt="" />
        </div>
        <div className="bottom flex justify-between">
          <div className="bottomLeft flex items-center">
            <FaHeart
              className="text-2xl "
              style={{ color: isLike ? "#8080805c" : "#e83c3c" }}
              onClick={likeHandle}
            />
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
