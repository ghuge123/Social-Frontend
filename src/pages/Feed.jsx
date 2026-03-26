import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { request } from "../services/api"; // use central API

export default function Feed() {

  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  // fetch posts
  const fetchPosts = async () => {
    try {
      const data = await request("/posts"); // no localhost
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch user (for like logic)
  const fetchUser = async () => {
    try {
      const data = await request("/users/me"); // cookie-based auth

      if (data.isLoggedIn) {
        setUserId(data.userId);
      }
    } catch {
      setUserId(null);
    }
  };

  // run on load
  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">

            <CreatePost refresh={fetchPosts} />

            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                refresh={fetchPosts}
                userId={userId}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}