import React, { useState } from 'react';
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {

    const [click, setClick] = useState(false);
    const [button] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [itemCount] = useState(null);

    const cartItemsCount = cartItems.reduce((price, item) => price + item.quantity, 0);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/products" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className="navbar-icon" />
                            <span style={{ color: "#f54100" }}>S</span>
                            <span style={{ color: "#fa612a" }}>o</span>
                            <span style={{ color: "#ff7b4b" }}>g</span>
                            <span style={{ color: "#ff8e65" }}>i</span>
                            <span style={{ color: "#ff9b76" }}>n</span>
                            <span style={{ color: "#ffa889" }}>b</span>
                            <span style={{ color: "#ffb89e" }}>0</span>
                            <span style={{ color: "#ffcab7" }}>y</span>
                            <span style={{ color: "#ffdbcd" }}>e</span>
                            <span style={{ color: "#ffeae2" }}>v</span>
                            &nbsp;
                            <span style={{ color: "#f54100" }}>O</span>
                            <span style={{ color: "#ff7b4b" }}>y</span>
                            <span style={{ color: "#ff9b76" }}>b</span>
                            <span style={{ color: "#ffa889" }}>e</span>
                            <span style={{ color: "#ffdbcd" }}>k</span>
                        </Link>

                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/productall"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Product
                                </Link>
                            </li>
                            <li>
                                <a target="blank" href="https://portfolio-js-theta.vercel.app/" className="nav-links" onClick={closeMobileMenu}>
                                    Portfolio Js
                                </a>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/signup" className="btn-link">
                                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to="/sign-up" className="btn-link">
                                        <Button
                                            buttonStyle="btn--outline"
                                            buttonSize="btn--mobile"
                                            onClick={closeMobileMenu}
                                        >
                                            SIGN UP
                                        </Button>
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/cart" onClick={closeMobileMenu}>
                                    Cart
                                    {itemCount ? 0
                                        :
                                        <span className="item_count">{cartItemsCount}</span>
                                    }
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;