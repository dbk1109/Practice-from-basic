import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
`;

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  return (
    <Container>
      <h1>Coin: {coinId}</h1>
      <Link to={`/`}>홈페이지로 가기</Link>
    </Container>
  );
}
export default Coin;
