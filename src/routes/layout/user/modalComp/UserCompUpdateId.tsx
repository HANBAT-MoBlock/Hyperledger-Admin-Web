import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect, useState } from "react";
import { IUserDetail, IUserModifyReq, UserRole } from "../../../../interfaces";
import TextField from "@mui/material/TextField";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, modalState } from "../../../../atoms";
import Button from "@mui/material/Button";
import { fetchDeleteUser, fetchUpdateUserId } from "../../../../api";
import { GridSelectionModel } from "@mui/x-data-grid/models/gridSelectionModel";
import { InputLabel } from "@mui/material";

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
  userDto: IUserDetail;
};

function UserCompUpdateId({ userDto }: props) {
  const jwt = useRecoilValue(authAtom);
  const setModalState = useSetRecoilState(modalState);
  const [userId, setUserID] = useState("");
  const [reqDto, setReqDto] = useState<IUserModifyReq>({
    wantToChangeUserRole: UserRole.ROLE_STUDENT,
    wantToChangeName: "",
    wantToChangeIdentifier: "",
    wantToChangePlainPassword: null,
    requestedIdentifier: "",
  });
  useEffect(
    () =>
      setReqDto({
        requestedIdentifier: userDto.identifier,
        wantToChangeIdentifier: userId,
        wantToChangeUserRole: userDto.userRole,
        wantToChangeName: userDto.name,
        wantToChangePlainPassword: null,
      }),
    [userId]
  );

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        ID변경
      </Typography>
      <Typography sx={{ mt: 2 }}>
        변경할 유저 ID : {userDto.identifier}
      </Typography>
      <br />
      <InputLabel variant="standard" htmlFor="coin-native">
        변경할 ID
      </InputLabel>
      <TextField
        size="small"
        sx={{ mt: 1 }}
        label="ID"
        variant="outlined"
        onChange={(event) => setUserID(event.target.value)}
      />
      <br />
      <Box display="flex">
        <Button
          sx={{ mt: 1, ml: "auto" }}
          variant="contained"
          onClick={async () =>
            await fetchUpdateUserId(jwt.accessToken, reqDto).then(
              (response) => {
                setModalState(false);
                if (!response.ok) {
                  response.json().then((data) => alert(data.message));
                } else {
                  alert("변경 성공");
                }
              }
            )
          }
        >
          ID 변경
        </Button>
      </Box>
    </Box>
  );
}
export default UserCompUpdateId;
