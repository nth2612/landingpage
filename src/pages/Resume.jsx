import { Footer,Navbar,Main } from "../components";

function Resume(){
    const mySkill = ['HTML', 'CSS', 'JavaScript', 'Git', '.Net', 'ReactJS', 'Bootstrap'];
    const skillPerRow = 3;
    const numRows = Math.ceil(mySkill.length / skillPerRow);
    const sliceSkill = [];
    for (let i = 0; i < numRows; i++){
        sliceSkill.push(mySkill.slice(i*skillPerRow, i*skillPerRow + 3));
    }
    console.log(sliceSkill);
    return(
        <>
        <Main>
            <Navbar/>
            <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">
                <span className="text-gradient d-inline fw-bold">Resume</span>
                </h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                <section>
                    <h2 className="text-pink fw-bold mb-4">Education</h2>
                    <div className="card shadow rounded-4 mb-5">
                    <div className="card-body p-5">
                        <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                            <div className="text-pink fw-bold mb-2">2021 - now</div>
                            <div className="text-muted">Electric Power University</div>
                            <div className="text-muted"><p>Software technology</p></div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, eum quaerat enim quae nesciunt laborum. Molestias est, recusandae culpa magni id alias corporis obcaecati labore earum illo doloremque? Quisquam, voluptates.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <div className="pb-5" />
                <section>
                    <div className="card shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-5">
                            <div className="mb-0">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="feature bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                    <i className="fa-solid fa-code" />
                                    </div>
                                    <h3 className="fw-bold mb-0">
                                    <span className="fw-bold text-gradient mb-0">
                                        Skills
                                    </span>
                                    </h3>
                                </div>
                                {sliceSkill.map(function(item, index){
                                    return (
                                        <div className="row row-cols-1 row-cols-md-3 mb-4" key={index}>
                                            {item.map(function(skill, index2){
                                                return(
                                                    <div key={index2} className="col mb-4 mb-md-0">
                                                        <div className="d-flex justify-content-center align-items-center bg-gradient-primary-to-secondary fw-bold text-light rounded-4 p-3 h-100">{skill}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
        </Main>
        <Footer/>
        </>
    )
}
export default Resume;