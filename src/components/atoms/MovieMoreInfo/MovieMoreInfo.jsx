import { Link } from 'react-router-dom';

export const MovieMoreInfo = ({ id }) => {
  return (
    <>
      <p>Additional info:</p>
      <ul>
        <li>
          <Link to={`${id}/cast`} />
        </li>
        <li>
          <Link to={`${id}/reviews`} />
        </li>
      </ul>
    </>
  );
};
