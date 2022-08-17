import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { InputLabel, NativeSelect } from "@mui/material";
import { ICoinDtoList } from "../../../../interfaces";
import * as React from "react";
import { GridSelectionModel } from "@mui/x-data-grid/models/gridSelectionModel";
import { useState } from "react";
import Button from "@mui/material/Button";
import { fetchCreateCoin, fetchTransferCoin } from "../../../../api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, modalState } from "../../../../atoms";

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

type props = {
  coinList: ICoinDtoList[];
};

function TransferCoin({ coinList }: props) {
  const [user, setUser] = useState("");
  const [coin, setCoin] = useState("");
  const [coinValue, setCoinValue] = useState("");
  const jwt = useRecoilValue(authAtom);
  const setModalState = useSetRecoilState(modalState);

  const coinOptions = coinList.map((value) => <option>{value.name}</option>);

  let userList: string[] = [];

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        TransferCoin
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={9}>
          <InputLabel variant="standard" htmlFor="coin-native">
            User
          </InputLabel>
          <TextField
            label="학번"
            variant="outlined"
            onChange={(event) => setUser(event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => userList.push(user)}>추가</Button>
        </Grid>
        <Grid item xs={3}>
          <InputLabel variant="standard" htmlFor="coin-native">
            Coin
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "Coin",
              id: "coin-native",
            }}
            onChange={(event) => setCoin(event.target.value)}
          >
            {coinOptions}
          </NativeSelect>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="코인수량"
            variant="outlined"
            onChange={(event) => setCoinValue(event.target.value)}
          />
        </Grid>
      </Grid>
      <br />
      <Typography>선택된 학생 : {}</Typography>
      <Button
        onClick={async () =>
          await fetchTransferCoin(
            jwt.accessToken,
            coin,
            coinValue,
            userList
          ).then((response) => {
            setModalState(false);
            if (!response.ok) {
              response.json().then((data) => alert(data.message));
            } else {
              alert("전송 송공");
            }
          })
        }
      >
        전송
      </Button>
    </Box>
  );
}

export default TransferCoin;
