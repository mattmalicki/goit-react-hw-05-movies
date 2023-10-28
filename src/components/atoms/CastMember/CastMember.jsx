export const CastMember = ({ actor }) => {
  return (
    <li>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          width="100%"
          alt="Cast member of a movie"
        />
        <span>{actor.name}</span>
      </div>
      <div>
        <span>Character:</span>
        <span>{actor.character}</span>
      </div>
    </li>
  );
};
