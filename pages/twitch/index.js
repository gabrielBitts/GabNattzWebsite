import Header from "../../components/header";
import Grid from "../../components/card_grid";
import TwitchFrame from "../../components/twitch_frame";
import Footer from "../../components/footer";

function Twitch({games}) {
  return (
    <div>
      <Header />
      <div className="content">
        <TwitchFrame />
        <Grid games={games} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch("https://gamelistapi.herokuapp.com/api/v1/game")
  const games = await result.json()
  return {
    props: { games }
  }
}

export default Twitch;
