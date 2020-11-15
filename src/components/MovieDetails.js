//Routes and Links
import { Redirect, useParams, Link } from "react-router-dom";

//Styles
import { DetailWrapper, MoviePoster } from "../styles";

const MovieDetails = (props) => {
  const movieSlug = useParams().movieSlug;
  const movie = props.movies.find((movie) => movie.slug === movieSlug);

  if (!movie) return <Redirect to="/movies" />;

  const genreArray = movie.genre.split(", ");

  const dramalessGenreArray = genreArray.filter((genre) => genre !== "Drama");

  const recommendedMovies = props.movies.filter(
    (movieItem) =>
      movieItem.genre.split(", ").some((genre) => genreArray.includes(genre)) &&
      movieItem.title !== movie.title
  );

  const dramalessRecommendedMovies = props.movies.filter(
    (movieItem) =>
      movieItem.genre
        .split(", ")
        .some((genre) => dramalessGenreArray.includes(genre)) &&
      movieItem.title !== movie.title
  );

  const recommendedMovie = (!dramalessRecommendedMovies.length
    ? recommendedMovies
    : dramalessRecommendedMovies
  ).map((recommendedMovie) => (
    <Link to={`/movies/${recommendedMovie.slug}`}>
      <MoviePoster src={recommendedMovie.poster} alt={recommendedMovie.title} />
    </Link>
  ));

  return (
    <DetailWrapper>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Release Date: {movie.released} </p>
      <p>Runtime: {movie.runtime}</p>
      <p>Genre: {movie.genre}</p>
      <p>Plot: {movie.plot}</p>
      <p>Recommended movies: {recommendedMovie}</p>
    </DetailWrapper>
  );
};

export default MovieDetails;
