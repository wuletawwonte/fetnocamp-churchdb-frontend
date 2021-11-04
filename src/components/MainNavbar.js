import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './mainNavbar.css';
import {red} from '@mui/material/colors';

const MainNavbar = (props) => {
  const color = red;
  const navigate = useNavigate();
  return <AppBar
    {...props}
    position="sticky"
    color="primary"
  >
    <Toolbar variant="dense">
      <Typography className="navbarTitle" variant="h6" component="div" onClick={() => {navigate('/');}}>
        ChurchDb
      </Typography>
      <Button color="inherit" onClick={() => {navigate('/login')}}>Login</Button>
    </Toolbar>
  </AppBar>;
}

export default MainNavbar;
