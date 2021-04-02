import Image from 'next/image'

function Twitch() {
    return (
            <div class="card_container">
                <div class="cards">
                    <div class="cover">
                        <div class="cover_front">
                            <Image src="/covers/diablo-2.jpg" 
                            alt="Capa Diablo 2"
                            layout="fill"
                            />
                        </div>
                        <div class="cover_back">
                            <h1 class="game_name">Diablo II</h1>
                            <p class="company">Blizzard North</p>
                            <p class="platform">PC</p>
                            <p class="year">1999</p>
                            <p class="data_zeramento">01/02/2021</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Twitch
