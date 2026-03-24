import { formatDownloads, formatRating } from '../utils/format'

const AppCard = ({ app, onClick }) => {
    return (
        <article
            className="app-card"
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onClick?.()
            }}
            role="button"
            tabIndex={0}
        >
            <div className="app-image">
                <img src={app.image} alt={`${app.title} cover`} loading="lazy" />
            </div>
            <div className="app-card-body">
                <p className="app-company">{app.companyName}</p>
                <h3 className="app-title">{app.title}</h3>
                <div className="app-meta">
                    <span>{formatDownloads(app.downloads)} downloads</span>
                    <span className="dot" aria-hidden="true"></span>
                    <span>{formatRating(app.ratingAvg)} rating</span>
                </div>
            </div>
        </article>
    )
}

export default AppCard
