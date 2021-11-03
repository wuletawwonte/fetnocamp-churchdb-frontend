import { ListItem, ListItemAvatar, Avatar, ListItemText} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';

function User(props) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.children.username} secondary="Jan 9, 2014" />
      </ListItem>
    </>
  );
}

export default User;
