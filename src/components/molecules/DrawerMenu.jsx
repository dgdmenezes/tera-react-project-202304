import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material/";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../contexts/GlobalContext";

export default function DrawerMenu(props) {
  const { currentUser } = React.useContext(GlobalContext);

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to={`/users/${currentUser}/post`}>Criar Post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
