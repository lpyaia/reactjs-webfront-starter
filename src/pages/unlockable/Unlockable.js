import React, { Fragment } from "react";
import RoleAccess from "../../enums/RoleEnum";
import { AdminAndPartnerPage, AdminPage, CustomerPage, EverybodyLoggedPage, PartnerPage } from "../roles/RoleAccess";
import { UnlockAccess } from "../../components/app/UnlockAccess";

export default function UnlockablePage() {
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
}
