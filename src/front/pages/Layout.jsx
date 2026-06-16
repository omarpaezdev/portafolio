import { Outlet } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar, Sidebar, MobileNav } from "../components/NavSidebar"
import { Footer } from "../components/ContactFooter"

export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <Sidebar />
            <MobileNav />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}