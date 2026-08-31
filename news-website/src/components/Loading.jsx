function Loading() {
  return (
    <section className="article-grid" aria-label="Loading articles">
      {Array.from({ length: 6 }).map((_, index) => (
        <article className="skeleton-card" key={index}>
          <div></div>
          <span></span>
          <p></p>
          <p></p>
        </article>
      ))}
    </section>
  )
}

export default Loading
