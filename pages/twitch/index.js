import Header from '../../components/header' 
import Grid from '../../components/card_grid' 
import TwitchFrame from '../../components/twitch_frame'
import Footer from '../../components/footer'

function Twitch() {
    return(
    <div>
        <Header/>
        <TwitchFrame />
        <Grid />
        <Footer />
    </div>)
}

export default Twitch
