import Grid from "@mui/material/Grid";
import CoinChart from "./component/CoinChart";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TransactionTable from "./component/TransactionTable";
import { useQuery } from "react-query";
import { ICoinDetail } from "../../../interfaces";
import { fetchAllCoins } from "../../../api";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms";
import { NativeSelect } from "@mui/material";

function HomeComp() {
  const jwt = useRecoilValue(authAtom);
  const [coinList, setCoinList] = useState([]);
  const [coinOne, setCoinOne] = useState("");
  const [coinTwo, setCoinTwo] = useState("");

  const { isLoading, data } = useQuery<ICoinDetail>(["allCoins"], () =>
    fetchAllCoins(jwt.accessToken)
      .then((response) => response.data)
      .then((res) => {
        setCoinList(
          res.coinDtoList.map((value: { name: any }) => (
            <option>{value.name}</option>
          ))
        );
        setCoinOne(res.coinDtoList[0].name);
        setCoinTwo(res.coinDtoList[1].name);
        return res;
      })
  );

  return isLoading ? (
    <span>loading</span>
  ) : (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box
              sx={{
                padding: 2,
                pt: 3,
                borderRadius: 10,
                boxShadow: 3
              }}
            >
              <Box display="flex" sx={{ mb: 1 }}>
                <NativeSelect
                  sx={{ ml: "auto" }}
                  onChange={(event) => setCoinOne(event.target.value)}
                  inputProps={{
                    name: "Coin",
                    id: "coin-native"
                  }}
                >
                  {coinList}
                </NativeSelect>
              </Box>
              <CoinChart coinName={coinOne} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                padding: 2,
                pt: 3,
                borderRadius: 10,
                boxShadow: 3
              }}
            >
              <Box display="flex" sx={{ mb: 1 }}>
                <NativeSelect
                  sx={{ ml: "auto" }}
                  onChange={(event) => setCoinTwo(event.target.value)}
                  inputProps={{
                    name: "Coin",
                    id: "coin-native"
                  }}
                >
                  {coinList}
                </NativeSelect>
              </Box>
              <CoinChart coinName={coinTwo} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <span>coinchart2 part</span>
          </Grid>
          <Grid item xs={6}>
            <span>coinchart2 part</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <TransactionTable />
      </Grid>
    </Grid>
  );
}

export default HomeComp;
