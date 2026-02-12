import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import VisionMissionPage from './pages/VisionMissionPage'
import ReferencesPage from './pages/ReferencesPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/admin/ProtectedRoute'
import LoginPage from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'
import ActivitiesListPage from './pages/admin/ActivitiesListPage'
import NewActivityPage from './pages/admin/NewActivityPage'
import EditActivityPage from './pages/admin/EditActivityPage'

const SiteLayout = () => {
  return (
<div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />
  <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin routes (no header/footer) */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/activities"
            element={
              <ProtectedRoute>
                <ActivitiesListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/activities/new"
            element={
              <ProtectedRoute>
                <NewActivityPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/activities/:id/edit"
            element={
              <ProtectedRoute>
                <EditActivityPage />
              </ProtectedRoute>
            }
          />

          {/* Public site routes (with header/footer) */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision-mission" element={<VisionMissionPage />} />
            <Route path="/references" element={<ReferencesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Optional: 404 page */}
          {/* <Route path="*" element={<div>404</div>} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
