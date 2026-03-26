import { useState } from "react";
import { request } from "../services/api";
import { Card, CardContent, TextField, Button } from "@mui/material";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    await request("/users/login", "POST", form);
    window.location.href = "/";
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "400px" }}>
        <CardContent>
          <h3>Login</h3>

          <TextField fullWidth label="Email" className="mb-2"
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <TextField fullWidth label="Password" type="password"
            onChange={(e)=>setForm({...form,password:e.target.value})}
          />

          <Button fullWidth variant="contained" className="mt-3"
            onClick={handleLogin}>
            Login
          </Button>

          {/* IMPORTANT LINE */}
          <p className="mt-3 text-center">
            Don't have an account? <a href="/signup">Signup</a>
          </p>

        </CardContent>
      </Card>
    </div>
  );
}