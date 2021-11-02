import { ListItem, ListItemAvatar, Avatar, ListItemText} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';

function User({user}) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user} secondary="Jan 9, 2014" />
      </ListItem>
    </>
  );
}

export default User;
