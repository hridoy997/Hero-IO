import { useNavigate } from 'react-router-dom'
import AppCard from '../components/AppCard'
import { apps } from '../data/apps'

const stats = [
    {
        label: 'Total Downloads',
        value: '29.6M',
        detail: '21% more than last month',
    },
    {
        label: 'Total Reviews',
        value: '906K',
        detail: '46% more than last month',
    },
    {
        label: 'Active Apps',
        value: '132+',
        detail: '31 more will launch',
    },
]

const Home = () => {
    const navigate = useNavigate()
    const topApps = [...apps]
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 8)

    return (
        <div className="page">
            <section className="hero-banner">
                <div className="hero-content">
                    <p className="pill">Featured</p>
                    <h1>
                        We Build <span className="highlight">Productive</span> Apps
                    </h1>
                    <p className="subhead">
                        At HERO.IO we craft apps that make everyday life simpler, smarter,
                        and more exciting.
                    </p>
                    <div className="hero-actions">
                        <a className="primary-btn" href="https://play.google.com" target="_blank" rel="noreferrer">
                            Play Store
                        </a>
                        <a className="ghost-btn" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                            App Store
                        </a>
                    </div>
                </div>
                <div className="hero-visual" aria-hidden="true">
                    <div className="phone-mock"></div>
                    <div className="badge badge-blue">Focus</div>
                    <div className="badge badge-orange">Timers</div>
                    <div className="badge badge-green">Calm</div>
                </div>
            </section>

            <section className="stats-section">
                <div className="stats-grid">
                    {stats.map((item) => (
                        <div key={item.label} className="stat-card">
                            <p className="stat-label">{item.label}</p>
                            <p className="stat-value">{item.value}</p>
                            <p className="stat-detail">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="top-apps">
                <div className="section-header">
                    <div>
                        <p className="eyebrow">Trending Apps</p>
                        <h2>Top picks this week</h2>
                        <p className="section-desc">
                            Explore the most loved apps on the market developed by us.
                        </p>
                    </div>
                    <button className="primary-btn" onClick={() => navigate('/apps')}>
                        Show All
                    </button>
                </div>
                <div className="apps-grid">
                    {topApps.map((app) => (
                        <AppCard
                            key={app.id}
                            app={app}
                            onClick={() => navigate(`/apps/${app.id}`)}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
