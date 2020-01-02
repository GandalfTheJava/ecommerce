import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser, hidden }) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/Shop">SHOP</Link>
                <Link className="option" to="/Contact">CONTACT</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>
                        :
                        <Link className="option" to="/SignIn">SIGN IN</Link>
                }
                <CartIcon />
                {
                    hidden ?
                        (null) :
                        (<CartDropdown />)
                }

            </div>

        </div>
    );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);