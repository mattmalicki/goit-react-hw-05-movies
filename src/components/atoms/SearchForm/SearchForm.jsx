export const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="querry"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};
