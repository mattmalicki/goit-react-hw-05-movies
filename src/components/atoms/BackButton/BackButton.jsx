import { Link } from 'react-router-dom';

export const BackButton = ({ to }) => {
  return (
    <Link to={to}>
      <button>Go back</button>
    </Link>
  );
};
