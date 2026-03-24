const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <p className="footer-brand">HERO.IO</p>
                    <p className="footer-text">
                        Building calm, productive experiences for millions of makers.
                    </p>
                </div>
                <div className="footer-links">
                    <p className="footer-heading">Social Links</p>
                    <div className="social-row">
                        <a href="https://x.com" target="_blank" rel="noreferrer">
                            X
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            in
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            GH
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <p className="footer-heading">Explore</p>
                    <a href="https://play.google.com" target="_blank" rel="noreferrer">
                        Play Store
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                        App Store
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <span>Copyright © 2025 - All rights reserved</span>
                    <span>Crafted for the Hero.io challenge</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
