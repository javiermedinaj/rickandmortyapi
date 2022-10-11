import React from "react";


const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted p-2">



            <section className="true">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3" />Javier Medina
                            </h6>
                            <p>
                                Proyecto hecho con API de <a href="https://rickandmortyapi.com/" target="_blank">Rick and morty</a>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Otros proyectos
                            </h6>
                            <p>
                                <a href="https://github.com/javiermedinaj/cripto-react" target="_blank" className="text-reset">Price of cripto</a>
                            </p>
                            <p>
                                <a href="https://github.com/javiermedinaj/task" target="_blank" className="text-reset">React-Task</a>
                            </p>
                            <p>
                                <a href="https://github.com/javiermedinaj/testing" target="_blank" className="text-reset">NextJs</a>
                            </p>
                            <p>
                                <a href="https://github.com/javiermedinaj/crud" target="_blank" className="text-reset">Crud</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i className="fas fa-home me-3" />Buenos Aires</p>

                            <i className="fas fa-home me-3" /><a href="https://www.linkedin.com/in/javier-medina-783b721a9/" target="_blank"> Linkedin
                            </a>                          </div>
                    </div>
                </div>
            </section>

        </footer >

    );
}

export default Footer;

