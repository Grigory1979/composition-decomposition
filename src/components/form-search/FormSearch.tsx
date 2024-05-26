/**
 * Render a form for searching with an input field.
 *
 * @return {JSX.Element} The form for searching.
 */
const FormSearch = () => (
    <div style={{ width: "max-content" }}>
      <label htmlFor="searchInput"></label>
      <form>
        <input placeholder="поисковик" id="searchInput" />
      </form>
    </div>
  );
  
  export default FormSearch;