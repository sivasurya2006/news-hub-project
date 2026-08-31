function ArticleCard({ article }) {
  const publishedDate = article.publishedAt
    ? new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(article.publishedAt))
    : 'Date unavailable'

  const imageUrl = article.urlToImage || article.image
  const sourceName = article.source?.name || article.source || 'Unknown source'

  return (
    <article className="article-card">
      <div className="article-image">
        {imageUrl ? (
          <img src={imageUrl} alt={article.title} />
        ) : (
          <div className="image-placeholder">NEWS</div>
        )}
      </div>

      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.description || 'No description available for this article.'}</p>

        <div className="article-meta">
          <span>{sourceName}</span>
          <span>{publishedDate}</span>
        </div>

        <a href={article.url} target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </article>
  )
}

export default ArticleCard
