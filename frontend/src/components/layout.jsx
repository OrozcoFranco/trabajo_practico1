import { Outlet } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

function Layout() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
