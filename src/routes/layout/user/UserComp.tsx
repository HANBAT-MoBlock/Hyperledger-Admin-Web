import * as React from "react";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../../../api";
import { IPageDetail } from "../../../interfaces";
import { IconButton, Modal } from "@mui/material";
import UserCompUpdatePw from "./modalComp/UserCompUpdatePw";
import UserCompNew from "./modalComp/UserCompNew";
import UserCompDel from "./modalComp/UserCompDel";
import UserCompUpdateId from "./modalComp/UserCompUpdateId";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TransferCoin from "../coin/modalComp/TransferCoin";

function UserComp() {
  const jwt = useRecoilValue(authAtom);
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);
  const [page, setPage] = useState(1);
  const [modalComp, setModalComp] = useState(<UserCompNew />);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const { isLoading, data } = useQuery<IPageDetail>(
    ["allUser", page],
    async () => await fetchAllUser(jwt.accessToken, page)
  );

  const columns: GridColDef[] = [
    { field: "identifier", headerName: "ID", width: 130 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "dateCreated", headerName: "Create", width: 200 },
    { field: "lastUpdated", headerName: "Update", width: 200 },
  ];

  return isLoading ? (
    <span>loading...</span>
  ) : (
    <Box style={{ height: "100%", width: "100%", minHeight: "70vh" }}>
      <DataGrid
        getRowId={(row) => row.identifier}
        rows={data!.userDtoList}
        columns={columns}
        hideFooter={true}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />

      <Box display="flex">
        <Button
          onClick={() => {
            setModalComp(<UserCompNew />);
            handleOpen();
          }}
        >
          <Typography>계정 생성</Typography>
        </Button>
        <Button
          onClick={() => {
            setModalComp(<UserCompDel />);
            handleOpen();
          }}
        >
          <Typography>계정 삭제</Typography>
        </Button>
        <Button
          onClick={() => {
            setModalComp(<UserCompUpdateId />);
            handleOpen();
          }}
        >
          <Typography>ID 변경</Typography>
        </Button>
        <Button
          onClick={() => {
            setModalComp(<UserCompUpdatePw />);
            handleOpen();
          }}
        >
          <Typography>PW 변경</Typography>
        </Button>

        <IconButton
          aria-label="backward"
          disabled={page < 2}
          sx={{ ml: "auto" }}
          onClick={() => setPage(page - 1)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          aria-label="forward"
          disabled={page == data!.totalPage}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {modalComp}
        </Modal>
      </Box>
    </Box>
  );
}

export default UserComp;
