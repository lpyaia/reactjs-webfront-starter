import React from "react";
import Menu from "../menu/menu";
import Navbar from "../navbar/navbar";
import PropTypes from "prop-types";

const DefaultRoutes = ({ component: Component, props }) => {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Menu></Menu>
                <div className="layout-page">
                    <Navbar></Navbar>
                    <Component {...props} />
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    );
};

DefaultRoutes.propTypes = {
    component: PropTypes.any.isRequired,
};

export default DefaultRoutes;
