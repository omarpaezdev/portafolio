// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { AvisoLegal } from "./pages/AvisoLegal";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad";

export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#06060a', color: '#f0eee8', fontFamily: "'Syne', sans-serif", flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, letterSpacing: '-0.04em', margin: 0 }}>404</h1>
          <p style={{ color: '#9896a4', fontFamily: "'DM Mono', monospace", fontSize: '0.85rem' }}>Página no encontrada</p>
          <a href="/" style={{ color: '#00e5b0', fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', letterSpacing: '0.08em', textDecoration: 'none', border: '1px solid rgba(0, 229, 176, 0.2)', padding: '0.75rem 1.5rem', borderRadius: '4px', marginTop: '0.5rem' }}>Volver al inicio</a>
        </main>
      } >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Route>
    )
);