const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = 'https://newsapi.org/v2'

export async function fetchNews({ category = 'All', query = '' }) {
  if (!API_KEY) {
    throw new Error('Missing API key. Add VITE_NEWS_API_KEY in your .env file.')
  }

  const endpoint = query ? 'everything' : 'top-headlines'
  const params = new URLSearchParams({
    apiKey: API_KEY,
    pageSize: '12',
    language: 'en',
  })

  if (query) {
    params.set('q', query)
    params.set('sortBy', 'publishedAt')
  } else {
    params.set('country', 'us')

    if (category !== 'All') {
      params.set('category', category.toLowerCase())
    }
  }

  let response

  try {
    response = await fetch(`${BASE_URL}/${endpoint}?${params.toString()}`)
  } catch {
    throw new Error('Network error. Please check your internet connection.')
  }

  const data = await response.json().catch(() => null)

  if (!response.ok || data?.status === 'error') {
    throw new Error(data?.message || 'Unable to load news right now.')
  }

  return (data.articles || []).filter((article) => article.title && article.url)
}
