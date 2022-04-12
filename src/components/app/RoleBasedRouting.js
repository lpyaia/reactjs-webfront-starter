import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { grantPermission } from "./GrantPermission";
import Forbidden from "../../pages/forbidden/Forbidden";
import DefaultRoutes from "./DefaultRoutes";

export default function RoleBasedRouting({ component: Component, roles, isDefaultLayout = true, ...rest }) {
    return (
        <Fragment>
            {grantPermission(roles) && render(isDefaultLayout, Component, rest)}
            {!grantPermission(roles) && <Route render={() => <Forbidden />} />}
        </Fragment>
    );
}

function render(isDefaultLayout, Component, rest) {
    return isDefaultLayout ? (
        <DefaultRoutes {...rest} component={(props) => Component(props)} />
    ) : (
        <Route render={() => <Component />} />
    );
}

RoleBasedRouting.propTypes = {
    component: PropTypes.any.isRequired,
    roles: PropTypes.any.isRequired,
    isDefaultLayout: PropTypes.bool,
};
