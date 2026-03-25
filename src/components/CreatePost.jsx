import { useState } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { request } from "../services/api";

export default function CreatePost({ refresh }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("text", text);
      if (image) formData.append("image", image);

      await request("/posts", "POST", formData, true);
      refresh();

    } catch (err) {
      alert("Please login first");
      window.location.href = "/login";
    }
  };

  return (
    <Card className="mb-3">
      <CardContent>
        <TextField
          fullWidth
          placeholder="What's on your mind?"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <input type="file" className="form-control mt-2"
          onChange={(e)=>setImage(e.target.files[0])}
        />
        <Button className="mt-2" variant="contained" onClick={handlePost}>
          Post
        </Button>
      </CardContent>
    </Card>
  );
}