import { useEffect, useState } from "react";
import { Route, useLocation, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Loader = styled.div`
  text-align: center;
`;
const Overview = styled.div`
  background-color: #1f2022;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  span {
    display: block;
    text-transform: uppercase;
  }
`;
const HomeButton = styled.a`
  display: block;
  padding: 20px;
  border-radius: 10px;
  background: #1d47b6;
  text-align: center;
  margin-top: 40px;
`;
const Tabs = styled.div`
  display: flex;
  gap: 0 20px;
  margin-bottom: 20px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  width: 50%;
  background-color: #1f2022;
  text-align: center;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
    padding: 10px 20px;
  }
`;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface PriceData {
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

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
      console.log(infoData);
    })();
  }, [coinId]);
  return (
    <Container>
      <Header>
        <Title> {state?.name || info?.name} </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <div>
              <span>Rank:</span>
              {info?.rank}
            </div>
            <div>
              <span>Symbol:</span>
              {info?.symbol}
            </div>
            <div>
              <span>Open Source:</span>
              {info?.open_source ? "YES" : "NO"}
            </div>
          </Overview>
          {info?.description}
          <Overview>
            <div>
              <span>Total Supply:</span>
              {priceInfo?.total_supply}
            </div>
            <div>
              <span>Max Supply:</span>
              {priceInfo?.max_supply}
            </div>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <switch>
            <Route path={`/:coinId/price`}>
              <Price></Price>
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart></Chart>
            </Route>
          </switch>
          <HomeButton>
            <Link to={`/`}>홈페이지로 가기</Link>
          </HomeButton>
        </>
      )}
    </Container>
  );
}
export default Coin;
