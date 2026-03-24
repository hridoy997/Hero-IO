import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingOverlay from './components/LoadingOverlay'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import Installations from './pages/Installations'
import NotFound from './pages/NotFound'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

const RouteLoading = () => {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 420)
    return () => clearTimeout(timer)
  }, [pathname])

  return loading ? <LoadingOverlay message="Loading page..." /> : null
}

const Layout = () => {
  return (
    <div className="app-shell">
      <Header />
      <RouteLoading />
      <ScrollToTop />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/installation" element={<Installations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2600,
          style: { borderRadius: '10px', background: '#0b0c14', color: '#fff' },
        }}
      />
      <Layout />
    </BrowserRouter>
  )
}

export default App
