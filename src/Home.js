import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Tipography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import HomeIcon from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';

import AccountCircle from '@material-ui/icons/Menu';

import Apps from '@material-ui/icons/Apps';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
  listItemText: {
    fontSize: 14,
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  logo: {
    height: 25,
  },
  grow: {
    flexGrow: 1,
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src="/imagens/preto.png" alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="primary"
          >
            FAZER LOGIN
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              {<ListItemIcon>{<HomeIcon />}</ListItemIcon>}

              <ListItemText
                className={classes.listItemText}
                primary={'Inicio'}
              />
            </ListItem>

            <ListItem button>
              {<ListItemIcon>{<Whatshot />}</ListItemIcon>}

              <ListItemText
                className={classes.listItemText}
                primary={'Em Alta'}
              />
            </ListItem>

            <ListItem button>
              {<ListItemIcon>{<Subscriptions />}</ListItemIcon>}

              <ListItemText
                className={classes.listItemText}
                primary={'Inscrições'}
              />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
