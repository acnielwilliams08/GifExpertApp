import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

interface ImgeData {
  id: string;
  title: string;
  url: string;
}

interface GifGridProps {
  category: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      <h3> {category} </h3>

      {isLoading && <h2>Cargando...</h2>}

      <section className="card-grid">
        {images.map((image: ImgeData) => (
          <GifItem key={image.id} {...image}></GifItem>
        ))}
      </section>
    </>
  );
};
