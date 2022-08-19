import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import { fetchCreateCoin } from "../../../../api";
import { useState } from "react";
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

function CoinCompNew() {
  const [coinName, setCoinName] = useState("");
  const jwt = useRecoilValue(authAtom);
  const setModalState = useSetRecoilState(modalState);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        코인 생성
      </Typography>

      <TextField
        sx={{ mt: 2 }}
        id="outlined-basic"
        label="생성할 코인의 이름"
        variant="outlined"
        onChange={(event) => setCoinName(event.target.value)}
      />
      <br />
      <Box display="flex">
        <Button
          sx={{ mt: 1, ml: "auto" }}
          variant="contained"
          onClick={async () =>
            await fetchCreateCoin(jwt.accessToken, coinName).then(
              (response) => {
                setModalState(false);
                if (!response.ok) {
                  response.json().then((data) => alert(data.message));
                } else {
                  alert("발행 성공");
                }
              }
            )
          }
        >
          발행
        </Button>
      </Box>
    </Box>
  );
}

export default CoinCompNew;
