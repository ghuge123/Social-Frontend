import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check auth on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users/me", {
          credentials: "include"
        });

        const data = await res.json();
        setIsLoggedIn(data.isLoggedIn);

      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  // logout (optional API call)
  const logout = async () => {
    await fetch("http://localhost:3000/api/users/logout", {
      method: "POST",
      credentials: "include"
    });

    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          Social Feed
        </Typography>

        {!isLoggedIn ? (
          <>
            <Button color="inherit" href="/login">Login</Button>
            <Button color="inherit" href="/signup">Signup</Button>
          </>
        ) : (
          <Button color="inherit" onClick={logout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}