# NewsHub - React News Website

NewsHub is a responsive news website built with React, Vite, HTML, CSS, and JavaScript. It fetches live articles from a news API and lets users browse latest headlines, filter by category, and search for specific topics.

## Features

- Latest news section
- Category tabs for All, Technology, Business, Sports, Health, Entertainment, and Science
- Search news by keyword
- Reusable article card component
- Article image, title, description, source, published date, and read more link
- Loading skeleton cards
- Error handling with retry option
- Empty results state
- Responsive layout for desktop, tablet, and mobile
- API key loaded from `.env`

## Tech Stack

- React
- Vite
- HTML5
- CSS3
- JavaScript
- NewsData.io API

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CategoryTabs.jsx
│   ├── ArticleCard.jsx
│   ├── ArticleList.jsx
│   ├── Loading.jsx
│   └── ErrorMessage.jsx
├── pages/
│   └── Home.jsx
├── services/
│   └── newsApi.js
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_NEWSDATA_API_KEY=your_newsdata_api_key_here
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## API Key Safety

Do not hardcode your API key inside React components or service files. Keep it in `.env`, and make sure `.env` is ignored by Git.

For deployment, add the same `VITE_NEWSDATA_API_KEY` variable in your hosting provider's environment variables and redeploy the project.
