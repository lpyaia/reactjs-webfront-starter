import React from "react";
import { Route } from "react-router-dom";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";

export default function DefaultRoutes({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (
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
            )}
        />
    );
}

DefaultRoutes.propTypes = {
    component: PropTypes.any.isRequired,
};
