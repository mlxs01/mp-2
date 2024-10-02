import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Character } from "./interfaces/Characters";
import Avatars from "./components/Avatars";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
  padding: 20px;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  text-align: center;
  color: darkgoldenrod;
`;

function App() {
  const [data, setData] = useState<Character[]>([]);
  
  // Fetch random dogs
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        // Get 15 dogs 
        const response = await fetch("https://dog.ceo/api/breeds/image/random/15");
        const result = await response.json();
        
        // Simulate more fields for each dog (as 'id' and 'breed')
        const formattedData = result.message.map((imgUrl: string, index: number) => ({
            id: index + 1,
            name: `Dog ${index + 1}`,
            image: imgUrl,
            breed: imgUrl.split("/")[4]  // Extract breed
        }));
        setData(formattedData);
      } catch (error) {
        console.log("There was an error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ParentDiv>
        <Title>Dog Avatars</Title>
        <Avatars data={data} />
      </ParentDiv>
    </>
  );
}

export default App;