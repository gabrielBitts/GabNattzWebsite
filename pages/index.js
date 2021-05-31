import Head from "next/head"
import Header from "../components/header";
import Footer from "../components/footer";
import Medias from "../components/social_media";

function Home() {
    return (<div>
        <Head>
            <script dangerouslySetInnerHTML={{ __html: `var allowedKeys = {37: 'left',38: 'up',39: 'right',40: 'down',65: 'a',66: 'b'};
            var konamiCode = ['up','up','down','down','left','right','left','right','b','a'];
            var konamiCodePosition = 0;
            document.addEventListener('keydown', function (e) {
              var key = allowedKeys[e.keyCode];
              var requiredKey = konamiCode[konamiCodePosition];
              if (key == requiredKey) {
                konamiCodePosition++;
                if (konamiCodePosition == konamiCode.length) {
                  activateCheats();
                  konamiCodePosition = 0;
                }
              } 
              else {
                konamiCodePosition = 0;
              }
            });
            function activateCheats() {
              var audio = new Audio('/vampire-killer.mp3');
              audio.play();
              alert("Cheat activated");
            }` }}></script>
        </Head>
        <Header/>
        <div className="content">
            <Medias/>
        </div>
        <Footer/>
    </div>);
}

export default Home;
