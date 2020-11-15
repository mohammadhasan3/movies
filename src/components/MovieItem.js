//Routing and Linking
import { Link } from "react-router-dom";

//Styling
import { DescriptionButton, MovieTitle } from "../styles";

const MovieItem = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.movie.poster}
        className="card-img-top"
        alt={props.movie.title}
      />
      <div className="card-body">
        <MovieTitle className="card-title">{props.movie.title}</MovieTitle>

        <Link to={`/movies/${props.movie.slug}`}>
          <DescriptionButton>Movie Description</DescriptionButton>
        </Link>

        {/* <a href="#" className="btn btn-primary">
          Movie Description
        </a> */}
      </div>
    </div>
  );
};

export default MovieItem;
