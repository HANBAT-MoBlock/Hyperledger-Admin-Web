import * as React from "react";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRecoilState, useRecoilValue } from "recoil";
import { authAtom, modalState } from "../../../atoms";
import { useQuery, useMutation } from "react-query";
import { SetStateAction, useEffect, useState } from "react";
import { fetchAllCoins, fetchAllUser } from "../../../api";
import { IconButton, Modal } from "@mui/material";
import CreateCoin from "./modalComp/CreateCoin";
import DeleteCoin from "./modalComp/DeleteCoin";
import TransferCoin from "../user/modalComp/TransferCoin";
import TransferCoinAll from "./modalComp/TransferCoinAll";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ICoinDetail } from "../../../interfaces";

function CoinComp() {
  const jwt = useRecoilValue(authAtom);
  const [modState, setModState] = useRecoilState(modalState);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [page, setPage] = useState(1);
  const [modalComp, setModalComp] = useState(<Box />);
  const handleOpen = () => {
    setModState(true);
  };
  const handleClose = () => setModState(false);
  const { isLoading, data } = useQuery<ICoinDetail>(
    ["allCoins", page],
    async () => await fetchAllCoins(jwt.accessToken, page)
  );
  const columns: GridColDef[] = [
    { field: "name", headerName: "CoinName", width: 130 },
    { field: "issuance", headerName: "issuance", width: 130 },
  ];

  return isLoading ? (
    <span>loading...</span>
  ) : (
    <Box style={{ height: "100%", width: "100%", minHeight: "70vh" }}>
      <DataGrid
        getRowId={(row) => row.name}
        rows={data!.coinDtoList}
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
            setModalComp(<CreateCoin />);
            handleOpen();
          }}
        >
          <Typography>코인 발행</Typography>
        </Button>
        <Button
          onClick={() => {
            setModalComp(<TransferCoinAll coinDtoList={data!.coinDtoList} />);
            handleOpen();
          }}
        >
          <Typography>코인 배포</Typography>
        </Button>
        <Button
          onClick={() => {
            setModalComp(<DeleteCoin coinNames={selectionModel} />);
            handleOpen();
          }}
        >
          <Typography>코인 제거</Typography>
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
          open={modState}
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

export default CoinComp;
