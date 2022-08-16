import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { InputLabel, NativeSelect } from "@mui/material";
import { ICoinDtoList, UserRole } from "../../../../interfaces";
import * as React from "react";

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

type TransferParam = {
  coinDtoList: ICoinDtoList[];
};
function TransferCoin({ coinDtoList }: TransferParam) {
  const coinOptions = coinDtoList.map((value) => <option>{value.name}</option>);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        TransferCoin
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <InputLabel variant="standard" htmlFor="coin-native">
            Coin
          </InputLabel>
          <NativeSelect
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
            inputProps={{
              name: "ID",
              id: "id-native",
            }}
          >
            <option value={1}>학생</option>
            <option value={2}>상점</option>
          </NativeSelect>
        </Grid>
        <Grid item xs={4}>
          <TextField label="코인수량" variant="outlined" />
        </Grid>
      </Grid>
      <br />
      <Typography>선택된 학생 : {}</Typography>
    </Box>
  );
}

export default TransferCoin;
