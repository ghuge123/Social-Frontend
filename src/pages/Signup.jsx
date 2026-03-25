import { useState } from "react";
import { request } from "../services/api";
import { Card, CardContent, TextField, Button } from "@mui/material";

export default function Signup() {
  const [form, setForm] = useState({
    username: "", email: "", password: ""
  });

  const handleSignup = async () => {
    await request("/users/register", "POST", form);
    window.location.href = "/login";
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "400px" }}>
        <CardContent>
          <h3>Signup</h3>

          <TextField fullWidth label="Username" className="mb-2"
            onChange={(e)=>setForm({...form,username:e.target.value})}
          />

          <TextField fullWidth label="Email" className="mb-2"
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <TextField fullWidth label="Password" type="password"
            onChange={(e)=>setForm({...form,password:e.target.value})}
          />

          <Button fullWidth variant="contained" className="mt-3"
            onClick={handleSignup}>
            Signup
          </Button>

          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}