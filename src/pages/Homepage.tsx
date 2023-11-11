import HomepageStyled from "./HomePageStyled";
const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <header className="title-container">
        <h1 className="title">Welcome to the Labyrinth</h1>
        <h2>Find your friends...and your foes</h2>
      </header>
    </HomepageStyled>
  );
};

export default Homepage;
