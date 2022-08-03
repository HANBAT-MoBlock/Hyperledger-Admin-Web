import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Grid";
import CoinChart from "./CoinChart";

const drawerWidth = 240;

// interface IDashboard {}

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/*해더 파트*/}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      {/*서랍 파트*/}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["홈", "사용자 관리", "코인 관리", "가맹점 관리", "트랜잭션"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      {/*본문 파트*/}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <span>
              grid part 1/ 최근
              <CoinChart />
            </span>
          </Grid>
          <Grid item xs={6}>
            <span>Hello i am grid part 2</span>
          </Grid>
          <Grid item xs={6}>
            <span>Hello i am grid part 3</span>
          </Grid>
          <Grid item xs={6}>
            <span>Hello i am grid part 4</span>
          </Grid>
          <Grid item xs={12}>
            <span>Hello i am grid part 5</span>
          </Grid>
        </Grid>
      </Box>
      {/*<Box*/}
      {/*  component="main"*/}
      {/*  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}*/}
      {/*>*/}
      {/*  <Toolbar />*/}
      {/*  <Typography paragraph>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
      {/*    eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus*/}
      {/*    dolor purus non enim praesent elementum facilisis leo vel. Risus at*/}
      {/*    ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum*/}
      {/*    quisque non tellus. Convallis convallis tellus id interdum velit*/}
      {/*    laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed*/}
      {/*    adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies*/}
      {/*    integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate*/}
      {/*    eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo*/}
      {/*    quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat*/}
      {/*    vivamus at augue. At augue eget arcu dictum varius duis at consectetur*/}
      {/*    lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien*/}
      {/*    faucibus et molestie ac.*/}
      {/*  </Typography>*/}
      {/*  <Typography paragraph>*/}
      {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est*/}
      {/*    ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar*/}
      {/*    elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse*/}
      {/*    sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat*/}
      {/*    mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis*/}
      {/*    risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas*/}
      {/*    purus viverra accumsan in. In hendrerit gravida rutrum quisque non*/}
      {/*    tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant*/}
      {/*    morbi tristique senectus et. Adipiscing elit duis tristique*/}
      {/*    sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis*/}
      {/*    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla*/}
      {/*    posuere sollicitudin aliquam ultrices sagittis orci a.*/}
      {/*  </Typography>*/}
      {/*</Box>*/}
    </Box>
  );
}

export default Dashboard;
