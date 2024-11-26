import Header from './Header'
import SlideBar from './SlideBar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SlideBar />
                <div className="content">{children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;