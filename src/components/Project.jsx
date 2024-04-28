function Project(){
    const myProject = [
        {
            id : 1,
            name : "Project 1",
            desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In unde nemo ex sequi quidem voluptate expedita nostrum autem, laborum libero perspiciatis reprehenderit impedit aut nisi, temporibus dolorem. Dicta, consequatur quibusdam."
        },
        {
            id : 2,
            name : "Project 2",
            desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In unde nemo ex sequi quidem voluptate expedita nostrum autem, laborum libero perspiciatis reprehenderit impedit aut nisi, temporibus dolorem. Dicta, consequatur quibusdam."
        },
        {
            id : 3,
            name : "Project 3",
            desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In unde nemo ex sequi quidem voluptate expedita nostrum autem, laborum libero perspiciatis reprehenderit impedit aut nisi, temporibus dolorem. Dicta, consequatur quibusdam."
        }
    ]
    return(
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">
                    <span className="text-gradient d-inline fw-bold">Projects</span>
                </h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    {myProject.map(function(project, index){
                        if(index % 2 === 0){
                            return (
                                <div className="col-lg-11 col-xl-9 col-xxl-8" key={project.id}>
                                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <img src="/assets/nguyen2.png" alt="" className="img-fluid" />
                                                <div className="p-5">
                                                    <h2 className="fw-bold">{project.name}</h2>
                                                    <p>{project.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div className="col-lg-11 col-xl-9 col-xxl-8" key={project.id}>
                                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bold">{project.name}</h2>
                                                    <p>{project.desc}</p>
                                                </div>
                                                <img src="/assets/nguyen2.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Project;