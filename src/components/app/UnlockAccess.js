import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { grantPermission } from "./GrantPermission";

export const UnlockAccess = ({ children, request }) => {
    const permission = grantPermission(request); // request = ['ROLE_ADMIN'] / ['ROLE_USER'] / ['ROLE_MANAGER']
    return <Fragment>{permission && children}</Fragment>;
};

UnlockAccess.propTypes = {
    children: PropTypes.any.isRequired,
    request: PropTypes.any.isRequired,
};
