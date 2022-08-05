import ApexChart from "react-apexcharts";
import data from "../../../dummyData/data.json";

// interface ICoinChart {
//     coinName: string,
// }
function CoinChart() {
  return (
    <ApexChart
      type="area"
      series={[
        {
          name: "STOCK ABC",
          data: data?.map((price) => price.close) as unknown as number[],
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
          text: "Fundamental Analysis of Stocks",
          align: "left",
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        labels: data?.map((time) => time.time_close) as unknown as string[],
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
