function FormContact(){
    return(
        <section className="py-5">
            <div className="container px-5">
                <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                <div className="text-center mb-5">
                    <div className="feature text-white rounded-3 mb-3 bg-gradient-primary-to-secondary">
                    <i className="fa-regular fa-envelope" />
                    </div>
                    <h1>Get in touch</h1>
                    <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                    <form action id="contactForm">
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="Enter your name..." />
                        <label htmlFor="name">Full name</label>
                        <div className="invalid-feedback" />
                        </div>
                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Enter your email..." />
                        <label htmlFor="email">Email Address</label>
                        <div className="invalid-feedback" />
                        <div className="invalid-feedback" />
                        </div>
                        <div className="form-floating mb-3">
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone..." />
                        <label htmlFor="phone">Phone number</label>
                        <div className="invalid-feedback" />
                        </div>
                        <div className="form-floating mb-3">
                        <textarea className="form-control" style={{height: '10rem'}} placeholder="Enter your message here..." id="message" defaultValue={""} />
                        <label htmlFor="message">Message</label>
                        <div className="invalid-feedback" />
                        </div>
                        <div className="d-grid">
                        <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default FormContact;