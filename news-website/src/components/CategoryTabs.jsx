const categories = [
  'All',
  'Technology',
  'Business',
  'Sports',
  'Health',
  'Entertainment',
  'Science',
]

function CategoryTabs({ activeCategory, onCategoryChange }) {
  return (
    <section className="category-tabs" id="categories" aria-label="News categories">
      {categories.map((category) => (
        <button
          className={activeCategory === category ? 'active' : ''}
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </section>
  )
}

export default CategoryTabs
