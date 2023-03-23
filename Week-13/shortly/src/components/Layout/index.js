import React from "react"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    const footerMenu = [{
        Features: [
            'Link Shortening',
            'Branded Links',
            'Analytics']
    }, {
        Resources: [
            'Blog',
            'Developers',
            'Support']
    }, {
        Company: [
            'About',
            'Our Team',
            'Careers',
            'Contact']
    }]






    return (
        <React.Fragment>
            <nav className='nav-bar'>
                <section><h2>Shortly</h2></section>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <article>
                    <section className="dark-gray flex-2 mt-0"><h2>Shortly</h2></section>
                    {footerMenu.map((item, index) => (
                        Object.keys(item).map(key =>
                        (
                            <section className="flex-1 mt-0" key={"menu-" + index}>
                                <h5>
                                    {key}
                                </h5>
                                {console.log("---->", item, key)}
                                {item[key] && item[key].map((subMenu, subIndex) => (
                                    <h6 key={'submenu-' + subIndex}>{subMenu}</h6>
                                ))}
                            </section>
                        )
                        )
                    ))}

                    <section></section>
                    <section></section>

                </article>
            </footer>
        </React.Fragment>

    )
}

export default Layout