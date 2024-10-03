import styled from "styled-components";
import DataFetcher from "./components/DataFetcher";
import Avatars from "./components/Avatars";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 2% darkgoldenrod solid;
  padding: 3%;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  text-align: center;
  color: darkgoldenrod;
`;

function App() {
  return (
    <ParentDiv>
      <Title>Dog Avatars</Title>
      {/* DataFetcher component to Fetch. Avatars for UI*/}
      <DataFetcher render={(data) => <Avatars data={data} />} />
    </ParentDiv>
  );
}

export default App;
