import { Link } from 'react-router-dom';

export const MovieMoreInfo = () => {
  return (
    <>
      <p>Additional info:</p>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};
