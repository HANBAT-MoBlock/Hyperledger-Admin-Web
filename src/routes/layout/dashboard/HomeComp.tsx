import Grid from "@mui/material/Grid";
import CoinChart from "./CoinChart";
import * as React from "react";
import Box from "@mui/material/Box";

function HomeComp() {
  return (
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
        <span>Hello i am grid part 2</span>
      </Grid>
      <Grid item xs={6}>
        <span>Hello i am grid part 3</span>
      </Grid>
      <Grid item xs={6}>
        <span>Hello i am grid part 4</span>
      </Grid>
      <Grid item xs={12}>
        <span>Hello i am grid part 5</span>
      </Grid>
    </Grid>
  );
}

export default HomeComp;
