import Grid from "@mui/material/Grid";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms";
import { useQuery } from "react-query";
import { useState } from "react";
import { fetchAllUser } from "../../../api";
import { IPageDetail } from "../../../interfaces";

function UserComp() {
  const jwt = useRecoilValue(authAtom);
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery<IPageDetail>(
    "allUsers",
    async () => await fetchAllUser(jwt.accessToken, page)
  );

  const columns: GridColDef[] = [
    { field: "identifier", headerName: "ID", width: 130 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "dateCreated", headerName: "Create", width: 200 },
    { field: "lastUpdated", headerName: "Update", width: 200 },
  ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  return isLoading ? (
    <span>laoding...</span>
  ) : (
    <Box style={{ height: "100%", width: "100%", minHeight: 400 }}>
      <DataGrid
        getRowId={(row) => row.identifier}
        rows={data!.userDtoList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Box display="flex">
        <Button>
          <Typography>계정 생성</Typography>
        </Button>
        <Button>
          <Typography>계정 삭제</Typography>
        </Button>
        <Button>
          <Typography>ID 변경</Typography>
        </Button>
        <Button>
          <Typography>PW 변경</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default UserComp;
