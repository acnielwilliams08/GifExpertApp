import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

interface GifGridProps {
  category: string;
}

interface ImgeData {
  id: string;
  title: string;
  url: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3> {category} </h3>

      <ol>
        {images.map(({ id, title, url }: ImgeData) => (
          <li key={id}>
            <h2> {title} </h2>
            <img src={url} alt="image" />
          </li>
        ))}
      </ol>
    </>
  );
};
