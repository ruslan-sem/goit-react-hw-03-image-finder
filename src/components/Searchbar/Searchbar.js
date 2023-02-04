// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   //   state: PropTypes.object.isRequired,
// };
