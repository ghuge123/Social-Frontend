import { Card, CardContent, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { request } from "../services/api"; // use API helper

export default function PostCard({ post, refresh, userId }) {

  // safe check (avoid crash if userId null)
  const isLiked = userId && post.likes.includes(userId);

  const handleLike = async () => {
    try {
      await request(`/posts/${post._id}/like`, "PUT"); // clean API call
      refresh(); // re-fetch updated posts
    } catch (err) {
      alert("Login required");
      window.location.href = "/login";
    }
  };

  return (
    <Card className="mb-3 shadow-sm">
      <CardContent>

        <Typography variant="h6">
          {post.user?.username}
        </Typography>

        <Typography>{post.text}</Typography>

        {post.image && (
          <img
            src={`https://social-backend-2pe5.onrender.com/${post.image}`} // FIXED
            className="img-fluid mt-2 rounded"
            alt="post"
          />
        )}

        {/* Like Section */}
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