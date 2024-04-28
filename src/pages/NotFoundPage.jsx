import {Footer, Navbar, Main} from "../components";
import { Link } from "react-router-dom";
function NotFoundPage(){
    return(
        <>
        <Main>
            <Navbar/>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-md-12 py-5 bg-gradient-primary-to-secondary text-light text-center">
                        <h4 className="p-3 display-5">404: Page not found</h4>
                        <Link to='/' className="btn btn-outline-light mx-4">Go back to home</Link>
                    </div>
                </div>
            </div>
        </Main>
        <Footer/>
        </>
    )
}
export default NotFoundPage;