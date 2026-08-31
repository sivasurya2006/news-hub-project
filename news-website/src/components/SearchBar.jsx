function SearchBar({ query, onQueryChange, onSubmit, onClear, isSearching }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="news-search">
        Search news
      </label>
      <input
        id="news-search"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search news..."
        autoComplete="off"
      />

      {isSearching && (
        <button className="ghost-button" type="button" onClick={onClear}>
          Clear
        </button>
      )}

      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
