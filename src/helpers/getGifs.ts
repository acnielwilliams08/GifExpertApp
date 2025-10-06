interface GifData {
  id: string;
  title: string;
  images: {
    fixed_height_downsampled: {
      url: string;
    };
  };
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/stickers/search?api_key=wQ2HPsYOlmZrMDSlXIg4N6qcqObd182n&q=${category}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((gif: GifData) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.fixed_height_downsampled.url,
  }));

  return gifs;
};
