
import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import ScrollToTop from "./utils/ScrollToTop"

function App() {


  return (
    <>
    <ScrollToTop/>
    <Nav></Nav>
     <div className="layout">
      <Outlet></Outlet>
     </div>
    <Footer /> 
    </>
  )
}

export default App
