import { useState } from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import ExplorePage from './pages/ExplorePage'
import CompanyPage from './pages/CompanyPage'
import CompanyDashBoard from './pages/CompanyDashBoard'
import AdminDashBoardPage from './pages/AdminDashBoardPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<Home />} />
        <Router path="/feed" element={<FeedPage />} />
        <Router path="/explore" element={<ExplorePage />}/>
        <Router path="/prompt" element={<PromptPage />} />
        <Router path="/chat" element={<ChatPage />} />

        <Router path="/company" element={<CompanyPage />} />
        <Router path="/company/:companyId" element={<SingleCompanyPage />} />
        <Router path="/tool/:toolId" element={<SingleToolPage />} />

        <Router path="/userprofile/:userId" element={<UserProfilePage />} />
        <Router path="/favourite" element={<FavouritePage />} />

        <Router path="/companydashboard/:companyId" element={<CompanyDashBoard />} />
        <Router path="/admindashboard" element={<AdminDashBoardPage />} />

        <Router path="/login" element={<LoginPage />} />
        <Router path="/register" element={<RegisterPage />} />

        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
