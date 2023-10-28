export const Review = ({ author, description }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{description}</p>
    </li>
  );
};
