import { CastMember } from 'components/atoms/CastMember/CastMember';

export const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map((member, index) => {
        <CastMember key={`member${index}`} cast={member} />;
      })}
    </ul>
  );
};
