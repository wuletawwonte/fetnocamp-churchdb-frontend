import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useRef, useContext } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link
} from "@material-ui/core";
import { UserContext } from "../context/UserContext";
// import axios from "axios";

const Login = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const username = useRef("");
  const password = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/user/dashboard');
    // axios
    //   .post("https://fetnocampbackend.herokuapp.com/user/login", {
    //     username: username.current.value,
    //     password: password.current.value,
    //   })
    //   .then((res) => {
    //       console.log(res.data);
    //   })
    //   .catch((err) => {
    //     setUser(JSON.stringify(err.data, null, 2));
    //   });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleLogin}>
            <Box sx={{ mt: 8 }}>
              <Typography color="textPrimary" variant="h2">
                Sign in
              </Typography>
            </Box>
            <Box sx={{ pb: 1, pt: 1 }}>
              <Typography color="textSecondary" variant="body1">
                Login with your credentials
              </Typography>
            </Box>
            <Box sx={{ pb: 1, pt: 1 }}>
              <Typography color="textSecondary" variant="body1">
                {user}
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              name="username"
              type="text"
              variant="outlined"
              inputRef={username}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              inputRef={password}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Login
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Don&apos;t have an account?{" "}
              <Link
                component={RouterLink}
                to="/register"
                variant="h6"
                underline="hover"
              >
                Sign up
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
