import ApexChart from "react-apexcharts";
import { ICoinDtoList } from "../../../../interfaces";

type props = {
  coinList : ICoinDtoList[];
  totalIssuance : number;
};

function CoinShareChart({ coinList, totalIssuance }: props) {

  return(
    <ApexChart
      type="pie"
      series={coinList.map((element) => element.issuance)}
      options={{
        chart: {
          height: 350,
          zoom: {
            // autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },

        title: {
          text: `COIN SHARE`,
          align: "left"
        },
        labels: coinList.map((element) => element.name),
      }}
    />
  );
}

export default CoinShareChart;
//
// import ApexChart from "react-apexcharts";
//
// type props = {
//   coinName: string;
//   issuance : number;
//   totalIssuance : number;
// };
//
// function CoinShareChart({ coinName, issuance, totalIssuance }: props) {
//
//   return(
//     <ApexChart
//       type="pie"
//       series={[issuance, totalIssuance - issuance]}
//       options={{
//         chart: {
//           height: 350,
//           zoom: {
//             // autoScaleYaxis: true
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: "straight"
//         },
//
//         title: {
//           text: `share of ${coinName.toUpperCase()} coin`,
//           align: "left"
//         },
//         labels: [coinName.toUpperCase(), "OTHERS"],
//       }}
//     />
//   );
// }
//
// export default CoinShareChart;
