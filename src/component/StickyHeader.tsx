import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function StickyHeader() {
  return (
    <Box sx={{ flexGrow: 1, pl: 1, pr: 1, pt: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hanbat Currency Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default StickyHeader;
