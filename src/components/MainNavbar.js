import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <FacebookIcon />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
