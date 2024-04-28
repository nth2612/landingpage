import { Footer, Navbar, Main, Project } from "../components";
import { Link } from "react-router-dom";
function ProjectsPage(){
    return(
        <>
        <Main>
            <Navbar/>
            <Project/>
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                    <h2 className="display-4 fw-bold mb-4">Let's build something together</h2>
                    <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bold">Contact me</Link>
                    </div>
                </div>
            </section>
        </Main>
        <Footer/>
        </>
    )
}
export default ProjectsPage;