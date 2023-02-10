import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import data from "../listData"

export default function ListComponent() {
    const classes = useStyles();
    return (
      <List component="nav" aria-labelledby='nested-list-subheader'
        subheader={<ListSubheader component='div' id='nested-list-subheader'>
            Cost based on a group of 30px, accommodated in twin rooms
        </ListSubheader>}>
        {
            data.map(item =>(
                <ListItem key={item.text}>
                    <ListItemIcon className={classes.icon}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                </ListItem>
            ))
        }
      </List>
    )
  }

  const useStyles = makeStyles((theme) => ({
    icon:{
        color:"#40CFF5",
    } 
}))
  