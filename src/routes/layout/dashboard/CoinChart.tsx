import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../atoms";
import { useQuery } from "react-query";
import { fetchCoinUsage } from "../../../api";

interface ICoinUsage {
  tradingDate: string;
  tradingVolume: number;
}

function CoinChart() {
  const jwt = useRecoilValue(authAtom);
  const { isLoading, data } = useQuery<ICoinUsage[]>(
    "coinUsage",
    async () =>
      await fetchCoinUsage(
        jwt.accessToken,
        "test16",
        "2020-07-01T00:00:00",
        "2023-08-01T00:00:00"
      ).then((response) => response.data)
  );

  return isLoading ? (
    <span>lading...</span>
  ) : (
    <ApexChart
      type="area"
      series={[
        {
          name: "VALUE",
          data: data?.map(
            (usage) => usage.tradingVolume
          ) as unknown as number[],
        },
      ]}
      options={{
        chart: {
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        title: {
          text: "usage of TEST coin",
          align: "left",
        },
        subtitle: {
          text: "usage Movements",
          align: "left",
        },
        labels: data?.map((time) => time.tradingDate) as unknown as string[],
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
      }}
    />
  );
}

export default CoinChart;
