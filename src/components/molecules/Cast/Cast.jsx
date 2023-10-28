import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { CastMember } from 'components/atoms/CastMember/CastMember';

import { fetchDetailsMovie } from 'services/fetchFromApi';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const credits = await fetchDetailsMovie(id, '/credits');
      setCast([...credits.cast]);
    }
    getCast();
  }, [id]);

  return (
    <ul>
      {cast.map(actor => (
        <CastMember key={cast.id} actor={actor} />
      ))}
    </ul>
  );
};
