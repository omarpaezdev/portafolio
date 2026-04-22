import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import {Navbar} from "../components/NavSidebar"
import Footer from "../components/Footer"
import { Sidebar } from "../components/NavSidebar"



// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
           <Navbar />
                <Sidebar />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}