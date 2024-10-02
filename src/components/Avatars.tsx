import styled from "styled-components";
import { Character } from "../interfaces/Characters";

// Container for all the avatars with soft background colors
const AllCharsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust grid to fit better */
  gap: 20px;
  padding: 20px;
  background-color: #f0f8ff; /* Light blue for a soft, fun feel */
`;

// Card for each dog avatar
const SingleCharDiv = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// Image style for each avatar
const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px; /* Rounded corners for a soft look */
  margin-bottom: 15px;
`;

const AvatarName = styled.h2`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

// Breed styling with soft colors
const AvatarBreed = styled.p`
  font-size: 1rem;
  color: #666;
  background-color: #ffefc1; /* Soft yellow for a fun look */
  padding: 5px 10px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 10px;
`;

interface AvatarsProps {
  data: Character[];
}

export default function Avatars(props: AvatarsProps) {
  const { data } = props;

  return (
    <AllCharsDiv>
      {data.map((chara: Character) => (
        <SingleCharDiv key={chara.id}>
          <AvatarImage src={chara.image} alt={chara.name} />
          <AvatarName>{chara.name}</AvatarName>
          <AvatarBreed>Breed: {chara.breed}</AvatarBreed>
        </SingleCharDiv>
      ))}
    </AllCharsDiv>
  );
}
