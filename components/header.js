import Link from 'next/link'
import Image from 'next/image'

function Header() {
    return (
        <header class="principal-menu">
            <main>
                <nav class="header-1">
                    <div class="logo">
                        <Link href="/">
                            <a>
                                <Image src="/logo.png" alt="Logomarca"
                                height="65"
                                width="80" 
                                />
                            </a>
                        </Link>
                    </div>
                    <div class="page-indexes">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>HOME</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/twitch">
                                    <a>TWITCH</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contato">
                                    <a>CONTATO</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </main>
        </header>
    )
}
export default Header
