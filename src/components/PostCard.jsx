import { Card, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PostCard({ post, refresh, userId }) {

  // 🔥 check from backend data
  const isLiked = post.likes.includes(userId);

  const handleLike = async () => {
    try {
      await fetch(`http://localhost:3000/api/posts/${post._id}/like`, {
        method: "PUT",
        credentials: "include"
      });

      refresh(); // 🔥 re-fetch updated data

    } catch {
      alert("Login required");
      window.location.href = "/login";
    }
  };

  return (
    <Card className="mb-3 shadow-sm">
      <CardContent>

        <Typography variant="h6">{post.user?.username}</Typography>
        <Typography>{post.text}</Typography>

        {post.image && (
          <img
            src={`http://localhost:3000/${post.image}`}
            className="img-fluid mt-2 rounded"
          />
        )}

        {/* 🔥 Like Section */}
        <div className="d-flex align-items-center mt-2">

          <IconButton onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>

          <Typography>{post.likes.length}</Typography>

        </div>

      </CardContent>
    </Card>
  );
}