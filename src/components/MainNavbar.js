import { Redirect, useHistory } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const MainNavbar = (props) => {
  const history = useHistory();
  return <AppBar
    {...props}
    position="sticky"
  >
    <Toolbar sx={{ height: 40 }}>
      <IconButton 
        size="medium"
        edge="start"
        color="inherit" 
        aria-label="Menu"
        onClick={() => <Redirect to="/" />}
        >
          <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" onClick={() => {history.push('/');}}>
        ChurchDb
      </Typography>
    </Toolbar>
  </AppBar>;
}

export default MainNavbar;
