import styled from "styled-components";
import { Character } from "../interfaces/Characters";

// Container for all the avatars with soft background colors
const AllCharsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); 
  gap: 2vw; 
  padding: 2vw;
  background-color: #f0f8ff; /* Light blue for a soft, fun feel */
`;

// Card for each dog avatar
const SingleCharDiv = styled.div`
  background-color: #fff;
  border-radius: 1rem; /* Rounded corners for a soft look */
  padding: 1.5rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1); /* Original Shadow */
  text-align: center;
  cursor: pointer; /* Indicates interactivity */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out; 

  &:hover {
    box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.2rem);
  }
`;

// Image style for each dog avatar
const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem; /* Rounded corners for a soft look */
  margin-bottom: 1.5rem;
`;

// Name styling
const AvatarName = styled.h2`
  font-size: 1.5rem; 
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

// Breed styling
const AvatarBreed = styled.p`
  font-size: 1rem; 
  color: #666;
  background-color: #ffefc1; /* Soft yellow for a fun look */
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  display: inline-block;
  margin-top: 0.75rem;
`;

interface AvatarsProps { 
  // Changed from Prof code becuase otherwise the IDE yells
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
