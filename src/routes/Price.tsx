import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const Table = styled.div`
  border-radius: 10px;
  padding: 10px 20px;
  color: ${(props) => props.theme.textColor};
`;
const TableCell = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.transColor};
`;
const LeftCell = styled.span`
  display: inline-block;
  text-transform: uppercase;
  color: ${(props) => props.theme.accentColor};
`;
const RightCell = styled.div`
  strong {
    font-weight: bold;
  }
  span {
    color: red;
  }
`;
const Persent = styled.div`
  background-color: ${(props) => props.theme.transColor};
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  div {
  }
`;

interface PriceProps {
  coinId: string;
}
interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceData>(["prices", coinId], () =>
    fetchCoinTickers(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <Table>
          <TableCell>
            <LeftCell>가격</LeftCell>
            <RightCell>
              <strong>$ {data?.quotes.USD.price.toFixed(2)}</strong>
            </RightCell>
          </TableCell>
          <TableCell>
            <LeftCell>시가 총액</LeftCell>
            <RightCell>
              ${" "}
              {data?.quotes.USD.market_cap
                .toFixed()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span> ({data?.quotes.USD.market_cap_change_24h}%)</span>
            </RightCell>
          </TableCell>
          <TableCell>
            <LeftCell>24시간 거래량</LeftCell>
            <RightCell>
              {data?.quotes.USD.volume_24h
                .toFixed()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span> ({data?.quotes.USD.volume_24h_change_24h}%)</span>
            </RightCell>
          </TableCell>
          <Persent>
            <div>
              15m
              <br /> {data?.quotes.USD.percent_change_15m}%
            </div>
            <div>
              30m
              <br /> {data?.quotes.USD.percent_change_30m}%
            </div>
            <div>
              1h
              <br />
              {data?.quotes.USD.percent_change_1h}%
            </div>
            <div>
              12h
              <br /> {data?.quotes.USD.percent_change_12h}%
            </div>
            <div>
              7d
              <br />
              {data?.quotes.USD.percent_change_7d}%
            </div>
            <div>
              30d
              <br /> {data?.quotes.USD.percent_change_30d}%
            </div>
          </Persent>
          <Persent>
            <LeftCell>최고점</LeftCell>
            <RightCell>
              {data?.quotes.USD.ath_price.toFixed(2)}{" "}
              <strong>
                <span>({data?.quotes.USD.percent_from_price_ath})</span>
              </strong>
            </RightCell>
          </Persent>
          <Persent>
            <LeftCell>최고점 일자</LeftCell>
            <RightCell>{data?.quotes.USD.ath_date}</RightCell>
          </Persent>
        </Table>
      )}
    </div>
  );
}

export default Price;
