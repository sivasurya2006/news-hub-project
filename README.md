# NewsHub - React News Website

NewsHub is a responsive React news website that allows users to browse the latest headlines, search for news articles, and filter articles by category. The application fetches real-time news data from the NewsAPI and displays articles in a clean, user-friendly interface.

## Features

- Browse latest news headlines
- Search articles by keyword
- Filter news by category
- Categories include Technology, Business, Sports, Health, Entertainment, and Science
- Reusable React components
- Article cards with image, title, description, source, date, and read more link
- Loading skeleton while fetching data
- Error handling with retry option
- Empty results message
- Fully responsive design for desktop, tablet, and mobile

## Tech Stack

- React
- Vite
- JavaScript
- HTML5
- CSS3
- NewsAPI

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

Installation
Clone the repository:
git clone https://github.com/your-username/news-website.git
Navigate to the project folder:
cd news-website
Install dependencies:
npm install
Environment Variables
Create a .env file in the root directory and add your NewsAPI key:
VITE_NEWS_API_KEY=your_newsapi_key_here
You can get a NewsAPI key from:
https://newsapi.org/register
Run Locally
Start the development server:
npm run dev
Open the local URL shown in the terminal.
Build
Create a production build:
npm run build

Future Improvements
- Add pagination
- Add dark mode
- Add bookmark/favorite articles
- Add country-based filtering
- Add article detail page
- Add search history

Author
Siva Suriya.B
