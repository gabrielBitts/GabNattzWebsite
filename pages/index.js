import Header from "../components/header";
import Footer from "../components/footer";
import Medias from "../components/social_media";

function Home() {
  return (
    <div>
      <Header />
      <div className="content">
        <Medias />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
