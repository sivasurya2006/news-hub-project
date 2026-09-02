function ArticleCard({ article }) {
  const timestamp = article.publishedAt ? new Date(article.publishedAt) : null
  const publishedDate = timestamp && !Number.isNaN(timestamp.getTime())
    ? new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(timestamp)
    : 'Date unavailable'

  return (
    <article className="article-card">
      <div className="article-image">
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        )}
        <div className="image-placeholder fallback-label">NEWS</div>
      </div>

      <div className="article-content">
        <h3>{article.title}</h3>
        <p>
          {article.description}
        </p>

        <div className="article-meta">
          <span>{article.sourceName}</span>
          <span>{publishedDate}</span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </article>
  )
}

export default ArticleCard
