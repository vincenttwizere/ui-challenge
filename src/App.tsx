import './App.css'

const App = () => {
  return (
    <div className="page-shell">
      <div className="topbar">
        <div className="brand" aria-label="Brand">
          <div className="brand-mark">M</div>
          <div className="brand-text">
            <h1>Mbaza Ubutabera</h1>
            <p>Legal topics</p>
          </div>
        </div>

        <label className="search" aria-label="Search topics">
          <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="5.5" />
            <path d="M16 16L21 21" />
          </svg>
          <input
            type="text"
            placeholder="Search topics, e.g. dismissal"
            aria-label="Search topics"
          />
        </label>
      </div>
    </div>
  );
};

export default App;
