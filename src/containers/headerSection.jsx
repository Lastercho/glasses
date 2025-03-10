export default function HeaderSection (){
    return (
    <div className="header_section">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/images/logosmal.svg"  alt={""}/>
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    OUR PRODUCTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    VIDEO GAMES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    REMOT CONTROL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    CONTACT US
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="/images/search-icon.png"  alt={""}/>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    SIGN IN
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    REGISTER
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}
