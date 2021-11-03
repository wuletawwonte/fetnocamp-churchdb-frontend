import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AddIcon from "@material-ui/icons/Add";
import List from "@mui/material/List";
import User from "../components/User";
import { LinearProgress } from "@material-ui/core";

export default function Practice() {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState([]);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_API)
      .then((response) => response.json())
      .then((data) => {
        setEmail(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <header className="App-header">
        <h2>{counter}</h2>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          color="secondary"
          onClick={increment}
        >
          Increment
        </Button>
        <hr />
        {email.length !== 0 ? (
          <>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {email.map((user, idx) => {
                return (
                  <div key={idx}>
                    <User>{user}</User>
                  </div>
                );
              })}
            </List>
          </>
        ) : (
          <LinearProgress />
        )}
      </header>
    </Container>
  );
}
