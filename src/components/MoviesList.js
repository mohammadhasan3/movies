//Components
import MovieItem from "./MovieItem";

//Styling
import { ListText } from "../styles";

const MoveList = (props) => {
  const movieList = props.movies.map((movie) => <MovieItem movie={movie} />);

  return (
    <div className="container">
      <ListText className="row">{movieList}</ListText>
    </div>
  );
};

export default MoveList;
