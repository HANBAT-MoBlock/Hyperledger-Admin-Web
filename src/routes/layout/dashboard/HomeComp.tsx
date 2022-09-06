import Grid from "@mui/material/Grid";
import CoinChart from "./component/CoinChart";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TransactionTable from "./component/TransactionTable";
import { useQuery } from "react-query";
import { ICoinDetail, ICoinDtoList, ICoinShare } from "../../../interfaces";
import { fetchAllCoins } from "../../../api";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms";
import { NativeSelect } from "@mui/material";
import CoinShareChart from "./component/CoinShareChart";

function HomeComp() {
  const jwt = useRecoilValue(authAtom);
  const [coinList, setCoinList] = useState<ICoinShare[]>([]);
  const [coinOne, setCoinOne] = useState<ICoinShare>({name:"", issuance:0});
  const [coinTwo, setCoinTwo] = useState<ICoinShare>({name:"", issuance:0});
  const [totalIssuance, setTotalIssuance] = useState(0);

  const { isLoading, data } = useQuery<ICoinDetail>(["allCoins"], () =>
    fetchAllCoins(jwt.accessToken)
      .then((response) => response.data)
      .then((res) => {
        setTotalIssuance(res.totalIssuance)
        setCoinList(res.coinDtoList)
        setCoinOne({name : res.coinDtoList[0].name, issuance: res.coinDtoList[0].issuance});
        setCoinTwo({name : res.coinDtoList[1].name, issuance: res.coinDtoList[1].issuance});
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
                  onChange={(event) => setCoinOne(coinList[+event.target.value])}
                  inputProps={{
                    name: "Coin",
                    id: "coin-native"
                  }}
                >
                  {coinList.map((currElement, index) => <option value={index}>{currElement.name}</option>)}
                </NativeSelect>
              </Box>
              <CoinChart coinName={coinOne!.name} />
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
                  onChange={(event) => setCoinTwo(coinList[+event.target.value])}
                  inputProps={{
                    name: "Coin",
                    id: "coin-native"
                  }}
                >
                  {coinList.map((currElement, index) => <option value={index}>{currElement.name}</option>)}
                </NativeSelect>
              </Box>
              <CoinChart coinName={coinTwo!.name} />
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
                <CoinShareChart coinName={coinOne!.name} issuance={coinOne!.issuance} totalIssuance={totalIssuance}/>
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
              <CoinShareChart coinName={coinTwo!.name} issuance={coinTwo!.issuance} totalIssuance={totalIssuance}/>
            </Box>
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
