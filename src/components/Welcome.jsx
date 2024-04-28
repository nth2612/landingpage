import { Link } from "react-router-dom"

function Welcome(){
    return(
        <div className="py-5">
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                    <div className="text-center text-xxl-start">
                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                        <div className="text-uppercase">Front-end Developer</div>
                    </div>
                    <div className="fs-3 fw-light text-muted">I can get your business to</div>
                    <h1 className="display-3 fw-bolder mb-5">
                        <span className="text-gradient d-inline">Get online and grow fast</span>
                    </h1>
                    </div>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <Link to='/resume' className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Resume</Link>
                    <Link to='/projects' className="btn btn-outline-dark btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Projects</Link>
                    </div>
                </div>
                <div className="col-xxl-7">
                    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                    <div className="profile bg-gradient-primary-to-secondary">
                        <img src="assets/sneeze2-removebg-preview.png" alt="" className="profile-img" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome