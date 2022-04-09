import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { grantPermission } from "./GrantPermission";
import Forbidden from "../../pages/forbidden/Forbidden";
import DefaultRoutes from "./DefaultRoutes";

export default function RoleBasedRouting({ component: Component, roles, ...rest }) {
    return (
        <Fragment>
            {grantPermission(roles) && <DefaultRoutes {...rest} component={(props) => Component(props)} />}
            {!grantPermission(roles) && <Route render={() => <Forbidden />} />}
        </Fragment>
    );
}

RoleBasedRouting.propTypes = {
    component: PropTypes.any.isRequired,
    roles: PropTypes.any.isRequired,
};
