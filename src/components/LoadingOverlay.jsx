const LoadingOverlay = ({ message = 'Loading...' }) => {
    return (
        <div className="loading-overlay" role="status" aria-live="polite">
            <div className="spinner"></div>
            <p>{message}</p>
        </div>
    )
}

export default LoadingOverlay
