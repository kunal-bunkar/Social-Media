import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="z-10  ]">
      <div>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
