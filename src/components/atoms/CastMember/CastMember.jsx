export const CastMember = ({ cast }) => {
  return (
    <li>
      <div>
        <img src={cast.src} width="100%" />
        <span>{cast.actor}</span>
      </div>
      <div>
        <span>Character:</span>
        <span>{cast.character}</span>
      </div>
    </li>
  );
};
