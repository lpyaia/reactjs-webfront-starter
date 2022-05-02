import React, { Fragment } from "react";
import RoleAccess from "../../enums/roleEnum";
import { AdminAndPartnerPage, AdminPage, CustomerPage, EverybodyLoggedPage, PartnerPage } from "../roles/roleAccess";
import { UnlockAccess } from "../../components/app/unlockAccess";

const UnlockablePage = () => {
    return (
        <Fragment>
            <UnlockAccess allowedRoles={[RoleAccess.Admin]}>
                <AdminPage></AdminPage>
            </UnlockAccess>
            <UnlockAccess allowedRoles={[RoleAccess.Customer]}>
                <CustomerPage></CustomerPage>
            </UnlockAccess>
            <UnlockAccess allowedRoles={[RoleAccess.Partner]}>
                <PartnerPage></PartnerPage>
            </UnlockAccess>
            <UnlockAccess allowedRoles={[RoleAccess.Partner, RoleAccess.Admin]}>
                <AdminAndPartnerPage></AdminAndPartnerPage>
            </UnlockAccess>
            <UnlockAccess allowedRoles={[RoleAccess.Everybody]}>
                <EverybodyLoggedPage></EverybodyLoggedPage>
            </UnlockAccess>
        </Fragment>
    );
};

export default UnlockablePage;
