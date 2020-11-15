import { TitleHeader, LogoImage } from "../styles";
import logo from "../movie.jpg";

const Home = () => {
  return (
    <div>
      <TitleHeader>Movie Website Title Here</TitleHeader>

      <LogoImage src={logo} alt="Company Logo" />
    </div>
  );
};

export default Home;
