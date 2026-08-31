NewsHub - React News Website
NewsHub is a responsive news website built with React, Vite, HTML, CSS, and JavaScript. It fetches live articles from a news API and lets users browse latest headlines, filter by category, and search for specific topics.

Features
Latest news section
Category tabs for All, Technology, Business, Sports, Health, Entertainment, and Science
Search news by keyword
Reusable article card component
Article image, title, description, source, published date, and read more link
Loading skeleton cards
Error handling with retry option
Empty results state
Responsive layout for desktop, tablet, and mobile
API key loaded from .env
Tech Stack
React
Vite
HTML5
CSS3
JavaScript
NewsAPI
Project Structure
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
Getting Started
Install dependencies:

npm install
Create a .env file in the project root:

VITE_NEWS_API_KEY=your_news_api_key_here
Start the development server:

npm run dev
Build for production:

npm run build
API Key Safety

Author:
siva suriya.B

Do not hardcode your API key inside React components or service files. Keep it in .env, and make sure .env is ignored by Git.

NewsAPI free developer keys commonly work on localhost. For public deployment, use a backend proxy if the API provider restricts browser requests.
