import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import { IUserModifyRequest } from "../../../../interfaces";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserCompUpdateId() {
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        IdUpdate
      </Typography>
      <TextField id="outlined-basic" label="변경할 ID" variant="outlined" />
    </Box>
  );
}

export default UserCompUpdateId;
