import React from "react";

export class Grid extends React.Component {
    render() {
        const cards = this.props.games.map(game => {
            return (
            <Card filePath={game.coverImg} 
            key={game.id}
            alt={game.name} 
            name={game.name} 
            studio={game.studio} 
            platform={game.platform} 
            year={game.year} 
            dtZeramento={game.dtZeramento} 
            tempo={game.tempo} />
            )
        })
        return (
            <div>
                <div className="jogos-zerados">Jogos zerados</div>
                <div id="grid_body">
                    <div className="card_container">
                        {cards}
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
                                } />
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
