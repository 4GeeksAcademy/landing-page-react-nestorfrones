import React from "react";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-secondary" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );

};

export default Navbar