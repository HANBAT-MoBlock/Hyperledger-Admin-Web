import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import { GridSelectionModel } from "@mui/x-data-grid/models/gridSelectionModel";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, modalState } from "../../../../atoms";
import Button from "@mui/material/Button";
import { fetchDeleteCoin } from "../../../../api";

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
  coinNames: GridSelectionModel;
};

function DeleteCoin({ coinNames }: props) {
  const jwt = useRecoilValue(authAtom);
  const setModalState = useSetRecoilState(modalState);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        CoinDelete
      </Typography>
      <Typography sx={{ mt: 2 }}>
        삭제될 코인 : {coinNames.toString()}
      </Typography>
      <br />
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        onClick={async () =>
          await fetchDeleteCoin(jwt.accessToken, coinNames).then((response) => {
            setModalState(false);
            if (!response.ok) {
              response.json().then((data) => alert(data.message));
            } else {
              alert("삭제 성공");
            }
          })
        }
      >
        제거
      </Button>
    </Box>
  );
}

export default DeleteCoin;
