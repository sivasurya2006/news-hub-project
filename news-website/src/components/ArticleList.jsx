import ArticleCard from './ArticleCard'

function ArticleList({ articles }) {
  if (!articles.length) {
    return (
      <section className="empty-state">
        <h2>No results found</h2>
        <p>Try another keyword or select a different category.</p>
      </section>
    )
  }

  return (
    <section className="article-grid" aria-live="polite">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </section>
  )
}

export default ArticleList
