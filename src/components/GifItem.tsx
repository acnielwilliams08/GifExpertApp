interface GifItemProps {
  title: string;
  url: string;
}

export const GifItem: React.FC<GifItemProps> = ({ title, url }) => {
  return (
    <article className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </article>
  );
};
