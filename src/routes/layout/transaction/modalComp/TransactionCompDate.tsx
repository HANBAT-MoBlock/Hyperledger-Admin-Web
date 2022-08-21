import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import { fetchCreateCoin } from "../../../../api";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, modalState, transactionDate } from "../../../../atoms";
import { InputLabel, NativeSelect } from "@mui/material";
import { UserRole } from "../../../../interfaces";
import Grid from "@mui/material/Grid";

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

function TransactionCompDate() {
  const setModalState = useSetRecoilState(modalState);
  const [dateObject, setDateObject] = useRecoilState(transactionDate);
  const [dateFlag, setDateFlag] = useState("YEAR");

  useEffect(() => console.log(dateFlag), [dateFlag]);

  return (
    <Box sx={style}>
      <Grid container>
        <Grid item xs={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            날짜 검색
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ mt: 1, ml: "auto" }}>날짜 선택</Typography>
        </Grid>
        <Grid item xs={3}>
          <NativeSelect
            inputProps={{
              name: "dateFlag",
              id: "role-native",
            }}
            onChange={(event) => setDateFlag(event.target.value)}
          >
            <option value={0}>년</option>
            <option value={1}>월</option>
            <option value={2}>일</option>
            <option value={3}>시</option>
            <option value={4}>분</option>
            <option value={5}>초</option>
          </NativeSelect>
        </Grid>
      </Grid>
      <br />
      <Box display="flex">
        <Button sx={{ mt: 1, ml: "auto" }} variant="contained">
          발행
        </Button>
      </Box>
    </Box>
  );
}

export default TransactionCompDate;
