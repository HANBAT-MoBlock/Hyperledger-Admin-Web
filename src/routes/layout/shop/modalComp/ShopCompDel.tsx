import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import { fetchDeleteStore } from "../../../../api";
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
  name: string;
  phoneNumber: string;
};

function ShopCompDel({ name, phoneNumber }: props) {
  const jwt = useRecoilValue(authAtom);
  const setModalState = useSetRecoilState(modalState);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Delete Shop
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        삭제할 가맹점 : {name} / {phoneNumber}
      </Typography>
      <Box display="flex">
        <Button
          variant="contained"
          onClick={async () =>
            await fetchDeleteStore(jwt.accessToken, name, phoneNumber).then(
              (response) => {
                setModalState(false);
                if (!response.ok) {
                  response.json().then((data) => alert(data.message));
                } else {
                  alert("삭제 성공");
                }
              }
            )
          }
        >
          삭제하기
        </Button>
      </Box>
    </Box>
  );
}

export default ShopCompDel;
