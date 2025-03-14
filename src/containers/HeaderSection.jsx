import {Link} from "react-router";

export default function HeaderSection (){
    return (
    <div className="header_section">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="logo">
                        <Link to="/">
                            <img src="/images/logosmal.svg"  alt={""}/>
                        </Link>
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
                                <Link className="nav-link" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">
                                    OUR PRODUCTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/testimonials">
                                    TESTIMONIALS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/promotions">
                                    PROMOTIONS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    CONTACT US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <img src="/images/search-icon.png"  alt={""}/>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">
                                    SIGN IN
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}
