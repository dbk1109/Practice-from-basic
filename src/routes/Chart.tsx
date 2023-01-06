import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  //console.log(data?.map((price) => price.close));
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          //type="line"
          series={[
            {
              name: "close",
              //data: data?.map((price) =>
              //  return {
              //    Number(price.close), Number(price.close);
              //  };
              //),
              //data: [
              //  {
              //    x: `${data?.map((price) => price.close)}`,
              //    y: [3879, 30, 555, 1],
              //  },
              //  {
              //    x: 334,
              //    y: [26, 30, 555, 1],
              //  },
              //],

              data:
                data?.map((price) => {
                  return {
                    x: price.time_open,
                    y: [price.open, price.high, price.low, price.close],
                  };
                }) ?? [],
              //data: data?.map((price) => parseFloat(price.close)) ?? [],
              //data: [1, 20, 403],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              background: "transparent",
            },
            theme: {
              mode: "dark",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
