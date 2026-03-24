import { NavLink } from 'react-router-dom'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/apps', label: 'Apps' },
    { path: '/installation', label: 'Installation' },
]

const Logo = () => (
    <div className="logo-mark">
        <div className="logo-shape" aria-hidden="true"></div>
        <div className="logo-text">
            <span className="logo-name">HERO.IO</span>
            <span className="logo-tag">Productive Apps</span>
        </div>
    </div>
)

const Header = () => {
    return (
        <header className="header">
            <div className="container header-bar">
                <NavLink to="/" className="logo-link" aria-label="Go to home">
                    <Logo />
                </NavLink>
                <nav className="nav">
                    {navLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <a
                    className="contribute-btn"
                    href="https://github.com/copilot"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contribute
                </a>
            </div>
        </header>
    )
}

export default Header
