import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppCard from '../components/AppCard'
import LoadingOverlay from '../components/LoadingOverlay'
import { apps } from '../data/apps'

const AllApps = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const filteredApps = useMemo(() => {
        const term = searchTerm.trim().toLowerCase()
        if (!term) return apps
        return apps.filter((app) => app.title.toLowerCase().includes(term))
    }, [searchTerm])

    useEffect(() => {
        if (searchTerm === '') {
            setIsSearching(false)
            return undefined
        }

        setIsSearching(true)
        const timer = setTimeout(() => setIsSearching(false), 320)
        return () => clearTimeout(timer)
    }, [searchTerm])

    const showEmptyState = !isSearching && filteredApps.length === 0

    return (
        <div className="page">
            <section className="title-block">
                <p className="eyebrow">Our Library</p>
                <h1>Our All Applications</h1>
                <p className="section-desc">
                    Explore all apps on the market developed by us. We code for millions.
                </p>
            </section>

            <div className="filters-row">
                <p className="count-text">{filteredApps.length} apps found</p>
                <div className="search-box">
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search apps"
                        aria-label="Search apps"
                    />
                </div>
            </div>

            <div className="apps-grid">
                {filteredApps.map((app) => (
                    <AppCard
                        key={app.id}
                        app={app}
                        onClick={() => navigate(`/apps/${app.id}`)}
                    />
                ))}
            </div>

            {isSearching && <LoadingOverlay message="Searching apps..." />}
            {showEmptyState && (
                <div className="empty-state">
                    <h3>No App Found</h3>
                    <p>Try another keyword to find the app you are looking for.</p>
                </div>
            )}
        </div>
    )
}

export default AllApps
