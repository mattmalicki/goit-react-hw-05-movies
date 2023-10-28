import styles from './CastMember.module.css';

export const CastMember = ({ actor }) => {
  return (
    <li className={styles.Item}>
      <div className={styles.Image}>
        <img
          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
          width="100%"
          alt={`${actor.name}`}
        />
      </div>
      <div className={styles.CharacterDiv}>
        <span className={styles.Name}>{actor.name}</span>
        <span className={styles.CharacterTitle}>as</span>
        <span className={styles.Character}>{actor.character}</span>
      </div>
    </li>
  );
};
