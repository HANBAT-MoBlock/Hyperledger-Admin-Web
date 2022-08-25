import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalState, transactionDate } from "../../../../atoms";
import { NativeSelect } from "@mui/material";
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
  const [dateFlag, setDateFlag] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  // let fromDateCount = false;
  // let untilDateCount = false;
  const [fromDateClicked, setFromDateClicked] = useState(false);
  const [untilDateClicked, setUntilDateClicked] = useState(false);

  const dateTimeRange = ["YEAR", "MONTH", "DAY", "HOUR", "MINUTE", "SECOND"];
  const dateTextHint = [
    "2022",
    "2022-01",
    "2022-01-01",
    "2022-01-01T22",
    "2022-01-01T22:02",
    "2022-01-01T22:02:02",
  ];
  const defaultDate = "2000-01-01T00:00:00";
  const makeTimeFormat = (inputDate: string) => {
    return `${inputDate}${defaultDate.substring(
      inputDate.length,
      defaultDate.length
    )}`;
  };

  useEffect(() => console.log(dateObject), [dateObject]);

  return (
    <Box sx={style}>
      <Grid container spacing={2}>
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
            onChange={(event) => setDateFlag(+event.target.value)}
          >
            <option value={0}>년</option>
            <option value={1}>월</option>
            <option value={2}>일</option>
            <option value={3}>시</option>
            <option value={4}>분</option>
            <option value={5}>초</option>
          </NativeSelect>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField
            label="from"
            variant="outlined"
            size="small"
            placeholder={"ex) " + dateTextHint[dateFlag]}
            fullWidth
            onChange={(event) => setFromDate(event.target.value)}
            onBlur={() => setFromDateClicked(true)}
            error={
              dateTextHint[dateFlag].length !== fromDate.length &&
              fromDateClicked
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="to"
            variant="outlined"
            size="small"
            placeholder={"ex) " + dateTextHint[dateFlag]}
            fullWidth
            onChange={(event) => setUntilDate(event.target.value)}
            onBlur={() => setUntilDateClicked(true)}
            error={
              dateTextHint[dateFlag].length !== untilDate.length &&
              untilDateClicked
            }
            onError={(event) => console.log(event)}
          />
        </Grid>
      </Grid>
      <br />

      <Box display="flex">
        <Button
          sx={{ mt: 1, ml: "auto" }}
          variant="contained"
          disabled={
            dateTextHint[dateFlag].length !== untilDate.length ||
            dateTextHint[dateFlag].length !== fromDate.length
          }
          onClick={() => {
            setDateObject({
              dateTimeRange: dateTimeRange[dateFlag],
              fromLocalDateTime: makeTimeFormat(fromDate),
              untilLocalDateTime: makeTimeFormat(untilDate),
            });
            setModalState((prevState) => !prevState);
          }}
        >
          검색
        </Button>
      </Box>
    </Box>
  );
}

export default TransactionCompDate;
