import React from "react";

export const AdminPage = () => {
    return (
        <div>
            <h4 className="fw-bold p-4">Admin Page</h4>
        </div>
    );
};

export const CustomerPage = (props) => {
    console.log(props);

    return (
        <div>
            <h4 className="fw-bold p-4">Customer Page</h4>
        </div>
    );
};

export const PartnerPage = () => {
    return (
        <div>
            <h4 className="fw-bold p-4">Partner Page</h4>
        </div>
    );
};

export const AdminAndPartnerPage = () => {
    return (
        <div>
            <h4 className="fw-bold p-4">Admin & Partner Page</h4>
        </div>
    );
};

export const EverybodyLoggedPage = () => {
    return (
        <div>
            <h4 className="fw-bold p-4">Page without role restrictions</h4>
        </div>
    );
};
