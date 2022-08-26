import Grid from "@mui/material/Grid";
import CoinChart from "./component/CoinChart";
import * as React from "react";
import Box from "@mui/material/Box";

function HomeComp() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                padding: 5,
                borderRadius: 10,
                boxShadow: 3,
              }}
            >
              <CoinChart />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                padding: 5,
                borderRadius: 10,
                boxShadow: 3,
              }}
            >
              <CoinChart />
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
        <span>Transaction Part</span>
      </Grid>
    </Grid>
  );
}

export default HomeComp;
