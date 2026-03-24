import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'
import { apps } from '../data/apps'
import { formatDownloads, formatRating, formatReviews, formatSize } from '../utils/format'
import { installApp, isAppInstalled } from '../utils/storage'

const AppDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const app = useMemo(
        () => apps.find((item) => item.id === Number(id)),
        [id],
    )
    const [isInstalled, setIsInstalled] = useState(
        app ? isAppInstalled(app.id) : false,
    )

    useEffect(() => {
        if (app) setIsInstalled(isAppInstalled(app.id))
    }, [app])

    if (!app) {
        return (
            <div className="page">
                <div className="empty-state">
                    <h2>App not found</h2>
                    <p>The app you are looking for is not in our catalog. Try another.</p>
                    <button className="primary-btn" onClick={() => navigate('/apps')}>
                        Go Back
                    </button>
                </div>
            </div>
        )
    }

    const handleInstall = () => {
        if (isInstalled) return
        installApp(app)
        setIsInstalled(true)
        toast.success('App installed successfully')
    }

    return (
        <div className="page">
            <section className="details-layout">
                <div className="details-visual">
                    <img src={app.image} alt={`${app.title} preview`} />
                </div>
                <div className="details-info">
                    <p className="eyebrow">Developed by {app.companyName}</p>
                    <h1>{app.title}</h1>
                    <div className="detail-meta">
                        <div>
                            <p className="meta-label">Downloads</p>
                            <p className="meta-value">{formatDownloads(app.downloads)}</p>
                        </div>
                        <div>
                            <p className="meta-label">Average Rating</p>
                            <p className="meta-value">{formatRating(app.ratingAvg)}</p>
                        </div>
                        <div>
                            <p className="meta-label">Total Reviews</p>
                            <p className="meta-value">{formatReviews(app.reviews)}</p>
                        </div>
                        <div>
                            <p className="meta-label">Size</p>
                            <p className="meta-value">{formatSize(app.size)}</p>
                        </div>
                    </div>
                    <button
                        className={`install-btn ${isInstalled ? 'installed' : ''}`}
                        onClick={handleInstall}
                        disabled={isInstalled}
                    >
                        {isInstalled ? 'Installed' : 'Install Now'}
                    </button>
                </div>
            </section>

            <section className="chart-card">
                <div className="section-header compact">
                    <div>
                        <p className="eyebrow">Ratings</p>
                        <h2>Ratings breakdown</h2>
                    </div>
                </div>
                <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={app.ratings} barSize={32}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Bar dataKey="count" radius={[8, 8, 0, 0]} fill="#7c3aed" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <section className="description-box">
                <h2>Description</h2>
                <p>{app.description}</p>
            </section>
        </div>
    )
}

export default AppDetails
