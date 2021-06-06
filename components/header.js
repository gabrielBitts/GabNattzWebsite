import Link from "next/link";
import Image from "next/image";
import React from "react";

export class Header extends React.Component {
  render() {
    return (
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
              <li>
                <Link href="/contato">
                  <a className="navigation" data-text="SOBRE">
                    Sobre
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
