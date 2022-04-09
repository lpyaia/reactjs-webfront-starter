import RoleAccess from "../../enums/RoleEnum";

export const grantPermission = (requestedRoles) => {
    if (pageHasNotRestrictions(requestedRoles)) return true;

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    return requestedRoles.includes(userInfo?.role);
};

function pageHasNotRestrictions(requestedRoles) {
    return requestedRoles.includes(RoleAccess.Everybody);
}
