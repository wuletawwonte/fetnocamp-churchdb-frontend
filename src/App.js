import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AddIcon from "@material-ui/icons/Add";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const api = "https://fetnocampbackend.herokuapp.com/user";

function App() {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState([]);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    fetch(api)
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
        <br />
        {email.length !== 0 ? (
          <>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {email.map((user, idx) => {
                return (
                  <div key={idx}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={user.username} secondary="Jan 9, 2014" />
                    </ListItem>
                  </div>
                );
              })}
            </List>
          </>
        ) : (
          "Loading..."
        )}
      </header>
    </Container>
  );
}

export default App;
