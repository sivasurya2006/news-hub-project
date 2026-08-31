function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="/" aria-label="NewsHub home">
        <span className="brand-mark">N</span>
        <span>NewsHub</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#latest">Home</a>
        <a href="#categories">Categories</a>
        <a href="#latest">Latest</a>
      </nav>
    </header>
  )
}

export default Navbar
