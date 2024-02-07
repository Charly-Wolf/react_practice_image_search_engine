import { toast } from 'react-toastify';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchValue = e.target.elements.search.value;
    searchValue = searchValue.trim();
    if (!searchValue) {
      toast.error('Search field cannot be empty');
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Find your Unsplash images!</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder={searchTerm}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
