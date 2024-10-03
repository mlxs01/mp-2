import { useState, useEffect } from 'react';
import { Character } from "../interfaces/Characters";

interface DataFetcherProps {
  render: (data: Character[]) => JSX.Element;
}

export default function DataFetcher({ render }: DataFetcherProps) {
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        // Get 15 dogs
        const response = await fetch("https://dog.ceo/api/breeds/image/random/15");
        const result = await response.json();
        const formattedData = result.message.map((imgUrl: string, index: number) => ({
          id: index + 1,
          name: `Dog ${index + 1}`,
          image: imgUrl,
          breed: imgUrl.split("/")[4], // Extract breed
        }));
        setData(formattedData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return <>{render(data)}</>;
}
