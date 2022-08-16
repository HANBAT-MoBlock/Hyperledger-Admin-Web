import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputLabel, NativeSelect } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, modalState } from "../../../../atoms";
import { ICoinDtoList, UserRole } from "../../../../interfaces";
import { fetchTransferCoinAll } from "../../../../api";

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

type CoinList = {
  coinDtoList: ICoinDtoList[];
};

function TransferCoinAll({ coinDtoList }: CoinList) {
  const [coinValue, setCoinValue] = useState("");
  const [coinName, setCoinName] = useState("");
  const [userRole, setUserRole] = useState(UserRole.ROLE_STUDENT);

  const jwt = useRecoilValue(authAtom);
  const setModalState = useSetRecoilState(modalState);

  const coinOptions = coinDtoList.map((value) => <option>{value.name}</option>);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Transfer Coins to All
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <InputLabel variant="standard" htmlFor="coin-native">
            Coin
          </InputLabel>
          <NativeSelect
            onChange={(event) => setCoinName(event.target.value)}
            inputProps={{
              name: "Coin",
              id: "coin-native",
            }}
          >
            {coinOptions}
          </NativeSelect>
        </Grid>
        <Grid item xs={4}>
          <InputLabel variant="standard" htmlFor="coin-native">
            Role
          </InputLabel>
          <NativeSelect
            onChange={(event) =>
              setUserRole(
                event.target.value == "1"
                  ? UserRole.ROLE_STUDENT
                  : UserRole.ROLE_STOREMANAGER
              )
            }
            inputProps={{
              name: "Role",
              id: "role-native",
            }}
          >
            <option value={1}>학생</option>
            <option value={2}>상점</option>
          </NativeSelect>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="코인수량"
            variant="outlined"
            onChange={(event) => setCoinValue(event.target.value)}
          />
        </Grid>
      </Grid>
      <br />
      <Button
        variant="contained"
        onClick={async () =>
          await fetchTransferCoinAll(
            jwt.accessToken,
            coinName,
            coinValue,
            userRole
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
        배포
      </Button>
    </Box>
  );
}
export default TransferCoinAll;
