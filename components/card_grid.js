import React from "react";
import Image from "next/image";

export class Grid extends React.Component {
    render() {
        return (
            <div>
                <div className="jogos-zerados">Jogos zerados</div>
                <div id="grid_body">
                    <div className="card_container">
                        <Card filePath="/covers/cards/1.png" alt="Diablo II" name="Diablo II" studio="Blizzard North" platform="PC" year="1999" dtZeramento="~Indeterminado~" tempo="~Indeterminado~"/>
                        <Card filePath="/covers/cards/2.png" alt="Teenage Mutant Ninja Turtles: Hyperstone Heist" name="Teenage Mutant Ninja Turtles: Hyperstone Heist" studio="Konami" platform="Mega Drive" year="1992" dtZeramento="15/04/2021" tempo="00:48:41"/>
                        <Card filePath="/covers/cards/3.png" alt="Streets of Rage 2" name="Streets of Rage 2" studio="SEGA" platform="Mega Drive" year="1992" dtZeramento="16/04/2021" tempo="00:59:23"/>
                        <Card filePath="/covers/cards/4.png" alt="Castle of Illusion" name="Castle of Illusion" studio="Disney Interactive Studios" platform="Mega Drive" year="1990" dtZeramento="16/04/2021" tempo="00:45:88"/>
                        <Card filePath="/covers/cards/5.png" alt="Desert Demolition" name="Desert Demolition" studio="BlueSky Software" platform="Mega Drive" year="1995" dtZeramento="16/04/2021" tempo="00:16:33"/>
                        <Card filePath="/covers/cards/6.png" alt="World of Illusion" name="World of Illusion" studio="Disney Interactive Studios" platform="Mega Drive" year="1992" dtZeramento="16/04/2021" tempo="02:25:04"/>
                        <Card filePath="/covers/cards/7.jpg" alt="Tiny Toons: Buster's Hidden Treasure" name="Tiny Toons: Buster's Hidden Treasure" studio="Konami" platform="Mega Drive" year="1993" dtZeramento="01/05/2021" tempo="02:25:04"/>
                        <Card filePath="/covers/cards/8.jpg" alt="Super Mario World" name="Super Mario World" studio="Nintendo" platform="Super Nintendo" year="1990" dtZeramento="04/05/2021" tempo="00:33:42"/>
                        <Card filePath="/covers/cards/9.jpg" alt="Donkey Kong Country" name="Donkey Kong Country" studio="Nintendo" platform="Super Nintendo" year="1994" dtZeramento="17/05/2021" tempo="01:53:72"/>
                        <Card filePath="/covers/cards/10.jpg" alt="Ghost Sweeper Mikami" name="Ghost Sweeper Mikami" studio="Natsume" platform="Super Nintendo" year="1993" dtZeramento="18/05/2021" tempo="00:51:15"/>
                        <Card filePath="/covers/cards/11.png" alt="Mega Man 7" name="Mega Man 7" studio="Capcom" platform="Super Nintendo" year="1995" dtZeramento="22/05/2021" tempo="02:49:47"/>
                        <Card filePath="/covers/cards/12.jpg" alt="Bust a Groove" name="Bust a Groove" studio="enix" platform="Playstation" year="1998" dtZeramento="28/05/2021" tempo="01:03:33"/>
                        <Card filePath="/covers/cards/13.jpg" alt="Bust-A-Move 2: Dance Tengoku Mix" name="Bust-A-Move 2: Dance Tengoku Mix" studio="enix" platform="Playstation" year="1999" dtZeramento="28/05/2021" tempo="00:31:25"/>
                    </div>
                </div>
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="cards">
                    <div className="cover">
                        <div className="cover_front">
                            <img src={
                                    this.props.filePath
                                }
                                alt={
                                    this.props.alt
                                }/>
                        </div>
                        <div className="cover_back">
                            <div className="texts">
                                <h1 className="game_name">
                                    {
                                    this.props.name
                                }</h1>
                                <p className="company">
                                    {
                                    this.props.studio
                                }</p>
                                <p className="platform">
                                    {
                                    this.props.platform
                                }</p>
                                <p className="year">
                                    {
                                    this.props.year
                                }</p>
                                <p className="data_zeramento">
                                    {
                                    this.props.dtZeramento
                                }</p>
                                <p className="tempo">
                                    {
                                    this.props.tempo
                                }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;
