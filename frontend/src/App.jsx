import Admin from "@/components/admin.jsx"
import Dashboard from "@/components/dashboard.jsx"
import Home from "@/components/home.jsx"
import Navbar from "@/components/navbar.jsx"
import NotFound from "@/components/notFound.jsx"
import Register from "@/components/register.jsx"
import { ToastContainer } from "react-toastify"
import './App.css'
import '@/styles//custom-toast.css'
import '@/styles/scrollbar.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />

        <div className="routes">

          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin"  >

              <Route index element={<Admin />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
