// // MovieList.jsx
// import React from 'react';
// import './App.css';

// const movies = [
//   { 
//     title: "CAPTAIN AMERICA BRAVE NEW WORLD", 
//     rating: "8.5", 
//     poster: cp,
//     genre: "Action"
//   },
//   { 
//     title: "Dune: Part Two", 
//     rating: "8.8", 
//     poster: doom,
//     genre: "Sci-Fi"
//   },
//   { 
//     title: "Spider-Man: No Way Home", 
//     rating: "8.3", 
//     poster: mk,
//     genre: "Action"
//   },
//   { 
//     title: "John Wick 4", 
//     rating: "8.6", 
//     poster: kl,
//     genre: "Action"
//   },
//   { 
//     title: "One Piece", 
//     rating: "9.0", 
//     poster: Onepiece,
//     genre: "Animation"
//   }
// ];

// const MovieList = () => {
//   return (
//     <div className="movie-section">
//       <h2 className="section-title">Now Showing</h2>
//       <div className="movie-grid">
//         {movies.map((movie, index) => (
//           <div key={index} className="movie-card">
//             <img src={movie.poster} alt={movie.title} className="movie-poster" />
//             <div className="movie-info">
//               <h3>{movie.title}</h3>
//               <div className="movie-rating">⭐ {movie.rating}</div>
//               <p className="movie-genre">{movie.genre}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;