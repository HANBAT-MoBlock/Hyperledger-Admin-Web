import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useSetRecoilState } from "recoil";
import {
  modalState,
  transactionReceiver,
  transactionReceiverRole,
  transactionSender,
  transactionSenderRole,
} from "../../../../atoms";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { UserRole } from "../../../../interfaces";

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

function TransactionCompReceiver() {
  const [sender, setSender] = useState("");
  const [senderRole, setSenderRole] = useState<UserRole>(UserRole.ROLE_STUDENT);
  const setReceiverState = useSetRecoilState(transactionReceiver);
  const setReceiverRoleState = useSetRecoilState(transactionReceiverRole);
  const setModalState = useSetRecoilState(modalState);
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={style}>
      <Grid container>
        <Grid item xs={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            수신자 검색
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex">
            <Typography sx={{ mt: 1, ml: "auto" }}>Role 검색</Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="small"
            sx={{ mt: 2 }}
            id="outlined-basic"
            label="수신자"
            variant="outlined"
            disabled={checked}
            onChange={(event) => setSender(event.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <FormControl sx={{ mt: 1 }}>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event) =>
                setSenderRole(
                  (event.target as HTMLInputElement).value === "학생"
                    ? UserRole.ROLE_STUDENT
                    : UserRole.ROLE_STOREMANAGER
                )
              }
            >
              <FormControlLabel
                value="학생"
                disabled={!checked}
                control={<Radio />}
                label="학생"
              />
              <FormControlLabel
                value="상점"
                disabled={!checked}
                control={<Radio />}
                label="상점"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Box display="flex">
        <Button
          sx={{ mt: 1, ml: "auto" }}
          variant="contained"
          onClick={() => {
            checked
              ? setReceiverRoleState(senderRole)
              : setReceiverState(sender);
            setModalState((prevState) => !prevState);
          }}
        >
          검색
        </Button>
      </Box>
    </Box>
  );
}

export default TransactionCompReceiver;
