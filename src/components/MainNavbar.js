import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import './mainNavbar.css';

const MainNavbar = (props) => {
  const navigate = useNavigate();
  return <AppBar
    {...props}
    position="sticky"
    color="primary"
    elevation="0"
  >
    <Toolbar variant="regular">
      <Typography className="navbarTitle" variant="h4" component="div" onClick={() => {navigate('/');}}>
        ChurchDb
      </Typography>
      <Button color="inherit" onClick={() => {navigate('/login')}}>Login</Button>
    </Toolbar>
  </AppBar>;
}

export default MainNavbar;
