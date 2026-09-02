const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = 'https://newsdata.io/api/1'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80'

export async function fetchNews({ category = 'All', query = '' }) {
  if (!API_KEY) {
    throw new Error('Missing API key. Add VITE_NEWS_API_KEY in your .env file')
  }

  const endpoint = 'news'
  const params = new URLSearchParams({
    apikey: API_KEY,
    language: 'en',
  })

  if (query) {
    params.set('q', query)
  } else if (category !== 'All') {
    params.set('category', category.toLowerCase())
  } else {
    params.set('q', 'top') // Default news topic
  }

  let response

  try {
    response = await fetch(`${BASE_URL}/${endpoint}?${params.toString()}`)
  } catch {
    throw new Error('Network error. Please check your internet connection.')
  }

  const data = await response.json().catch(() => null)

  if (!response.ok || data?.status === 'error') {
    throw new Error(data?.results?.message || data?.message || 'Failed to fetch news.')
  }

  return (data?.results || [])
    .map(normalizeArticle)
    .filter((article) => article.title && article.url)
}

function normalizeArticle(article) {
  const title = cleanText(article.title) || 'Untitled article'
  const description =
    truncateText(cleanText(article.description) || cleanText(article.content), 170) ||
    'No description available for this article.'
  const sourceName =
    cleanText(article.source_name) ||
    cleanText(article.source_id) ||
    cleanText(article.creator?.[0]) ||
    'Unknown source'

  return {
    id: article.article_id || article.link || title,
    title,
    description,
    sourceName,
    publishedAt: article.pubDate || article.publishedAt || '',
    imageUrl: article.image_url || DEFAULT_IMAGE,
    url: article.link || article.url || '#',
  }
}

function cleanText(value) {
  if (!value) {
    return ''
  }

  return String(value)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function truncateText(value, maxLength) {
  if (!value || value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength).trim()}...`
}
