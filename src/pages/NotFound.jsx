import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="page">
            <div className="empty-state">
                <h1>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <button className="primary-btn" onClick={() => navigate('/')}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFound
