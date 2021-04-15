import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export class Header extends React.Component {
    render() {
        return (
            <header className="principal-menu">
                    <nav className="header-1">
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    <Image src="/logo.svg" alt="Logomarca"
                                    height="65"
                                    width="80"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="page-indexes">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a data-text="HOME">HOME</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/twitch">
                                        <a data-text="TWITCH">TWITCH</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contato">
                                        <a data-text="SOBRE">SOBRE</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </header>
        )
    }
}

export default Header