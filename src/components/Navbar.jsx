import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { request } from "../services/api"; // use central API

export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check auth on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await request("/users/me"); // no localhost

        setIsLoggedIn(data.isLoggedIn);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  // logout
  const logout = async () => {
    try {
      await request("/users/logout", "POST"); // clean API call
      setIsLoggedIn(false);
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
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