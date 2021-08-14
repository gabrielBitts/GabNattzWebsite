import Link from "next/link";
import Image from "next/image";
import React from "react";
import Head from "next/head";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `var allowedKeys = {37: 'left',38: 'up',39: 'right',40: 'down',65: 'a',66: 'b'};
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
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <header className="principal-menu">
          <nav className="header-1">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image src="/logo.svg" alt="Logomarca" height="65" width="80" />
                </a>
              </Link>
            </div>
            <div className="page-indexes">
              <ul>
                <li>
                  <Link href="/">
                    <a className="navigation" data-text="HOME">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/twitch">
                    <a className="navigation" data-text="TWITCH">
                      Twitch
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
