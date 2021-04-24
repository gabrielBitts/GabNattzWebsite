import React from "react";
import Image from "next/image";

export class Grid extends React.Component {
  render() {
    return (
      <div id="grid_body">
        <div className="card_container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="cards">
          <div className="cover">
            <div className="cover_front">
              <Image
                src="/covers/cards/diablo-2.png"
                alt="Capa Diablo 2"
                layout="fill"
              />
            </div>
            <div className="cover_back">
              <h1 className="game_name">Diablo II</h1>
              <p className="company">Blizzard North</p>
              <p className="platform">PC</p>
              <p className="year">1999</p>
              <p className="data_zeramento">01/02/2021</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
