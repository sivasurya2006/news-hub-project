import { useCallback, useEffect, useState } from 'react'
import ArticleList from '../components/ArticleList'
import CategoryTabs from '../components/CategoryTabs'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { fetchNews } from '../services/newsApi'

function Home() {
  const [articles, setArticles] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const loadNews = useCallback(async ({ category = activeCategory, search = searchTerm } = {}) => {
    setIsLoading(true)
    setError('')

    try {
      const news = await fetchNews({ category, query: search })
      setArticles(news)
    } catch (err) {
      setArticles([])
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [activeCategory, searchTerm])

  useEffect(() => {
    let isActive = true

    queueMicrotask(() => {
      if (isActive) {
        loadNews({ category: activeCategory, search: searchTerm })
      }
    })

    return () => {
      isActive = false
    }
  }, [activeCategory, loadNews, searchTerm])

  const handleSearch = (event) => {
    event.preventDefault()

    const nextSearch = query.trim()
    if (!nextSearch) {
      setError('Please enter a keyword to search news.')
      return
    }

    setSearchTerm(nextSearch)
    setActiveCategory('All')
  }

  const handleClearSearch = () => {
    setQuery('')
    setSearchTerm('')
    setActiveCategory('All')
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setSearchTerm('')
    setQuery('')
  }

  const heading = searchTerm ? `Search Results for "${searchTerm}"` : 'Latest News'

  return (
    <>
      <Navbar />

      <main className="page-shell">
        <section className="hero-section">
          <div>
            <p className="eyebrow">Real-time news</p>
            <h1>Stay updated with trusted headlines</h1>
            <p>
              Browse breaking stories, search topics, and filter articles by category in one
              responsive news dashboard.
            </p>
          </div>
        </section>

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSubmit={handleSearch}
          onClear={handleClearSearch}
          isSearching={Boolean(searchTerm)}
        />

        <CategoryTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

        <section className="section-head" id="latest">
          <div>
            <p className="eyebrow">{activeCategory === 'All' ? 'Top headlines' : activeCategory}</p>
            <h2>{heading}</h2>
          </div>
          <p>{articles.length} articles</p>
        </section>

        {isLoading && <Loading />}

        {!isLoading && error && <ErrorMessage message={error} onRetry={() => loadNews()} />}

        {!isLoading && !error && <ArticleList articles={articles} />}
      </main>

      <footer className="footer">
        <p>NewsHub uses live news data from a news API.</p>
      </footer>
    </>
  )
}

export default Home
