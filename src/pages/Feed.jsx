import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
        try {
        const res = await fetch("http://localhost:3000/api/users/me", {
            credentials: "include"
        });
        const data = await res.json();

        if (data.isLoggedIn) {
            setUserId(data.userId);
        }
        } catch {}
    };

    fetchUser();
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4" style={{ maxWidth: "600px" }}>
        <CreatePost refresh={fetchPosts} />
        {posts.map(post => (
          <PostCard key={post._id} post={post} refresh={fetchPosts} userId={userId}/>
        ))}
      </div>
    </>
  );
}