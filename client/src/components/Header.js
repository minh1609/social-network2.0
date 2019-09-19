import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ auth }) => {
    const renderContent = () => {
        switch (auth) {
            case null:
                return (
                    <li>
                        <a href={"/auth/google"}>Login With Google</a>
                    </li>
                );
            default:
                return [
                    <li key="3" style={{ margin: "0 10px" }}>
                        <Link to="/blogs">My Blogs</Link>
                    </li>,
                    <li key="2">
                        <a href={"/auth/logout"}>Logout</a>
                    </li>
                ];
        }
    };

    return (
        <nav className="indigo">
            <div className="nav-wrapper">
                <Link
                    to={auth ? "/blogs" : "/"}
                    className="left brand-logo"
                    style={{ marginLeft: "10px" }}
                >
                    Secret Blog
                </Link>
                <ul className="right">{renderContent()}</ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Header);
