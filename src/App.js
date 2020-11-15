import "./App.css";
//useStates
import { useState } from "react";

//Movie Array
import movies from "./movies";

//Components
import Home from "./components/Home";
import MovieList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

//Routing and Linking
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const [_movies, setMovies] = useState();
  return (
    <>
      <Switch>
        <Route path="/movies/:movieSlug">
          <MovieDetails
            movies={movies}
            setMovies={setMovies}
            _movies={_movies}
          />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
