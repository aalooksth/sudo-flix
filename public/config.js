window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "https://simple-proxy.alok.workers.dev",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWExMzgxMWU1Nzc3N2I5ZWRjNWI0YTU0NTJkZDhiMCIsIm5iZiI6MTcyNTcwNTI0NC4wNjc5NDgsInN1YiI6IjYzZTg4ZWM0YTJlNjAyMDBiNWVlMjk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eocpLYP5cdE3TeSBbR7SclyT-5w1ArLp7j-IxYziWEQ",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: "https://backend.sudo-flix.lol",

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: "",

  VITE_ALLOW_AUTOPLAY: true,
};
