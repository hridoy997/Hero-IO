import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import AppCard from '../components/AppCard'
import { uninstallApp, readInstalledApps } from '../utils/storage'

const sorters = {
    'high-low': (a, b) => b.downloads - a.downloads,
    'low-high': (a, b) => a.downloads - b.downloads,
}

const Installations = () => {
    const [sortOrder, setSortOrder] = useState('high-low')
    const [installedApps, setInstalledApps] = useState(readInstalledApps())

    useEffect(() => {
        setInstalledApps((prev) => [...prev].sort(sorters[sortOrder]))
    }, [sortOrder])

    const sortedApps = useMemo(() => {
        return [...installedApps].sort(sorters[sortOrder])
    }, [installedApps, sortOrder])

    const handleUninstall = (id) => {
        const updated = uninstallApp(id)
        setInstalledApps(updated)
        toast.success('App uninstalled')
    }

    return (
        <div className="page">
            <section className="title-block">
                <p className="eyebrow">My Library</p>
                <h1>Your Installed Apps</h1>
                <p className="section-desc">
                    Explore all apps you have installed. Manage them with one tap.
                </p>
            </section>

            <div className="filters-row">
                <p className="count-text">{installedApps.length} apps found</p>
                <div className="sort-box">
                    <label htmlFor="sort-select">Sort By Downloads</label>
                    <select
                        id="sort-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="high-low">High - Low</option>
                        <option value="low-high">Low - High</option>
                    </select>
                </div>
            </div>

            <div className="apps-grid">
                {sortedApps.map((app) => (
                    <div key={app.id} className="install-card">
                        <AppCard app={app} onClick={() => { }} />
                        <button
                            className="ghost-btn full-width"
                            onClick={() => handleUninstall(app.id)}
                        >
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>

            {sortedApps.length === 0 && (
                <div className="empty-state">
                    <h3>No apps installed</h3>
                    <p>Install an app to see it here.</p>
                </div>
            )}
        </div>
    )
}

export default Installations
