import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';

const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=1`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  if (data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No Results Found...</h4>
      </section>
    );
  }

  const results = data.results;

  return (
    <section className="image-container">
      {results.map((photo) => {
        const { id, urls, alt_description } = photo;
        return (
          <img
            key={id}
            src={urls?.regular}
            alt={alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
