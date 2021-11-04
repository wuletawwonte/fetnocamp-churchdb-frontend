import { useRef, useContext } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import {UserContext} from '../context/UserContext';

const Login = () => {
    const {user, setUser} = useContext(UserContext);
  const email = useRef("");
  const password = useRef("sdfsd");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f4f6f8",
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
                Login with email address
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              inputRef={email}
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
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
