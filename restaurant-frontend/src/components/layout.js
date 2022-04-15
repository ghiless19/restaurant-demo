import React from "react"
import Menu from './menu';
import Header from './header';

const Layout = () => {
    return (
        <main>
            <header>
                <Header />
            </header>
            <body>
                <Menu />
            </body>
        </main>
    )
}
export default Layout